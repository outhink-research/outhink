import { ArrowRight } from 'lucide-react';
import { useRouter } from '@/router';
import { Reveal } from '@/components/Reveal';

export default function Home() {
  const { navigate } = useRouter();

  return (
    <div>
      {/* ── HERO ── */}
      <section className="container-x flex min-h-[calc(100vh-80px)] items-center pt-16 pb-20 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <h1 className="display mt-6 text-[clamp(2.5rem,6.5vw,4.5rem)] text-balance text-ink-900">
                Ideas worth betting on, built for real.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-lg text-pretty text-lg text-ink-500">
                We find promising ideas and turn them into working products.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button onClick={() => navigate('/contact')} className="btn-primary">
                  Work with us
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => navigate('/how-we-work')} className="btn-ghost">
                  How we work
                </button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={240}>
              <div className="overflow-hidden rounded-xl border border-ink-100 bg-white">
                <img
                  src="https://images.pexels.com/photos/2817514/pexels-photo-2817514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Modern architecture"
                  className="h-80 w-full object-cover"
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