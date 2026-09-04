import { useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';

const PORTFOLIO_IMAGES = [
  {
    src: 'https://images.pexels.com/photos/20578678/pexels-photo-20578678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Product workspace',
  },
  {
    src: 'https://images.pexels.com/photos/8519256/pexels-photo-8519256.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Team working on a product',
  },
  {
    src: 'https://images.pexels.com/photos/7495291/pexels-photo-7495291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Team collaborating around a table',
  },
];

export default function Portfolio() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % PORTFOLIO_IMAGES.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const image = PORTFOLIO_IMAGES[activeImage];

  return (
    <div>
      {/* ── HERO ── */}
      <section className="container-x flex min-h-[calc(100vh-80px)] items-center pt-16 pb-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Portfolio</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-6 text-[clamp(2.2rem,5.5vw,3.5rem)] text-balance text-ink-900">
                The bets we&rsquo;ve made — even the ones we walked away from.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-lg text-pretty text-lg text-ink-500">
                A look at the products we&rsquo;ve helped bring to life, and the lessons behind each one.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="overflow-hidden rounded-xl border border-ink-100">
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className="animate-fade-in h-64 w-full object-cover lg:h-full"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}
