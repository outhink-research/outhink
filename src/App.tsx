import { useEffect } from 'react';
import { RouterProvider, useRouter } from '@/router';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import HowWeWork from '@/pages/HowWeWork';
import Portfolio from '@/pages/Portfolio';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

function Pages() {
  const { route } = useRouter();

  // Keep document title in sync with the route
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Outhink Research — Ideas worth betting on, built for real.',
      '/about': 'About — Outhink Research',
      '/how-we-work': 'How we work — Outhink Research',
      '/portfolio': 'Portfolio — Outhink Research',
      '/contact': 'Contact — Outhink Research',
    };
    document.title = titles[route] ?? titles['/'];
  }, [route]);

  switch (route) {
    case '/':
      return <Home />;
    case '/how-we-work':
      return <HowWeWork />;
    case '/portfolio':
      return <Portfolio />;
    case '/about':
      return <About />;
    case '/contact':
      return <Contact />;
    default:
      return <Home />;
  }
}

function Shell() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Pages />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  );
}
