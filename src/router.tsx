import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Route = '/' | '/about' | '/how-we-work' | '/portfolio' | '/contact';

type RouterContextValue = {
  route: Route;
  navigate: (to: Route) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

const VALID: Route[] = ['/', '/about', '/how-we-work', '/portfolio', '/contact'];
const SCROLL_ROUTES: Route[] = ['/', '/how-we-work', '/portfolio', '/about', '/contact'];

function pathToRoute(path: string): Route {
  const clean = path.replace(/\/+$/, '') || '/';
  return (VALID.includes(clean as Route) ? clean : '/') as Route;
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>(() =>
    typeof window !== 'undefined' ? pathToRoute(window.location.pathname) : '/',
  );

  useEffect(() => {
    const onPop = () => setRoute(pathToRoute(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    let locked = false;
    let touchStartY: number | null = null;

    const moveToAdjacentRoute = (direction: 1 | -1, event?: Event) => {
      const pageFitsViewport = document.documentElement.scrollHeight <= window.innerHeight + 4;
      if (!pageFitsViewport || locked) return;

      const currentIndex = SCROLL_ROUTES.indexOf(route);
      const nextRoute = SCROLL_ROUTES[currentIndex + direction];
      if (!nextRoute) return;

      event?.preventDefault();
      locked = true;
      window.history.pushState({}, '', nextRoute);
      setRoute(nextRoute);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      window.setTimeout(() => {
        locked = false;
      }, 700);
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 12) return;
      moveToAdjacentRoute(event.deltaY > 0 ? 1 : -1, event);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartY === null) return;

      const touchEndY = event.changedTouches[0]?.clientY ?? touchStartY;
      const distance = touchStartY - touchEndY;
      touchStartY = null;
      if (Math.abs(distance) < 40) return;

      moveToAdjacentRoute(distance > 0 ? 1 : -1, event);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: false });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [route]);

  const navigate = (to: Route) => {
    if (to === route) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', to);
    setRoute(to);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return <RouterContext.Provider value={{ route, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within RouterProvider');
  return ctx;
}
