import { useEffect, useState } from 'react';
import { useRouter } from '@/router';
import { Menu, X } from 'lucide-react';

const LINKS: { label: string; to: '/' | '/how-we-work' | '/portfolio' | '/about' | '/contact' }[] = [
  { label: 'How we work', to: '/how-we-work' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center gap-2.5" aria-label="Outhink Research home">
      <span className="text-[22px] font-semibold tracking-tight text-ink-900 font-display">
        Outhink<span className="text-ink-400"> Research</span>
      </span>
    </button>
  );
}

export default function Navbar() {
  const { route, navigate } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (to: (typeof LINKS)[number]['to']) => {
    navigate(to);
    setOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink-100 bg-paper">
        <nav className="container-x flex h-16 items-center justify-between">
          <Logo onClick={() => go('/')} />

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <button
                key={link.to}
                onClick={() => go(link.to)}
                className={`rounded-md px-3.5 py-2 text-sm transition-colors duration-200 ${
                  route === link.to ? 'bg-ink-50 text-ink-900 font-medium' : 'text-ink-500 hover:text-ink-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button onClick={() => go('/portfolio')} className="btn-primary">
              See Our Work
            </button>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink-800 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-paper transition-opacity duration-200 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <div className="space-y-1">
            {LINKS.map((link, i) => (
              <button
                key={link.to}
                onClick={() => go(link.to)}
                className={`block w-full text-left text-3xl font-semibold tracking-tight font-display transition-all ${
                  route === link.to ? 'text-ink-900' : 'text-ink-400'
                }`}
                style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              >
                {link.label}
              </button>
            ))}
          </div>
          <button onClick={() => go('/portfolio')} className="btn-primary mt-10 w-full">
            See Our Work
          </button>
        </div>
      </div>
    </>
  );
}
