import { Reveal } from '@/components/Reveal';


export default function About() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="container-x flex min-h-[calc(100vh-80px)] items-center pt-16 pb-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">About us</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-6 text-[clamp(2.2rem,5.5vw,3.5rem)] text-balance text-ink-900">
                We're research, build and ship it.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-lg text-pretty text-lg text-ink-500">
                Started from 2020 as a fun side project.<br />
                Become a capable team of researchers, builders, and shippers who turn ideas into products that actually make money.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="overflow-hidden rounded-xl border border-ink-100">
                <img
                  src="https://images.pexels.com/photos/7495291/pexels-photo-7495291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Team collaborating"
                  className="h-64 w-full object-cover lg:h-full"
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
