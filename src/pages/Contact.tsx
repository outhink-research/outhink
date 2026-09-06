import { Reveal } from '@/components/Reveal';


export default function Contact() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="container-x flex min-h-[calc(100vh-80px)] items-center pt-16 pb-20 lg:pt-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="max-w-2xl lg:col-span-7 lg:-translate-y-8">
            <Reveal>
              <p className="eyebrow">Contact</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-6 text-[clamp(2.2rem,5.5vw,3.5rem)] text-balance text-ink-900">
                Tell us what you&rsquo;re chasing.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-lg text-pretty text-lg text-ink-500">
                Talk to us what your idea, product, or research challenge is, and we&rsquo;ll help you figure out the next steps.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5 lg:-translate-y-6">
            <div className="border-l-2 border-ink-900 pl-6 sm:pl-8">
              <p className="eyebrow">Email</p>
              <a
                href="mailto:hello@outhinkresearch.com"
                className="mt-3 block break-words text-lg font-medium text-ink-900 underline decoration-ink-200 underline-offset-4 transition-colors hover:decoration-ink-900 sm:text-xl"
              >
                hello@outhinkresearch.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}