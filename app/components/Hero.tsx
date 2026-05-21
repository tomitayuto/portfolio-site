import { ArrowRight } from "lucide-react";
import { stats } from "../data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-[clamp(80px,12vw,160px)] md:pt-16">
      <div className="container-wide">
        <div className="max-w-5xl">
          <p className="eyebrow">Portfolio — 2026</p>

          {/* 名前（屋号サイズで大きく） */}
          <h1 className="font-display mt-5 whitespace-nowrap leading-[1.1] tracking-tight text-foreground md:mt-6">
            <span className="relative inline-flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-[clamp(2.25rem,9vw,5rem)] font-bold">
                富田 悠斗
              </span>
              <span className="font-display text-[clamp(1.5rem,6vw,3.3rem)] font-semibold tracking-[0.08em] text-accent">
                YUTO TOMITA
              </span>
              <span
                className="absolute -bottom-1 left-0 h-[6px] w-full bg-accent-soft"
                aria-hidden
              />
            </span>
          </h1>

          {/* 屋号（名前の下にコンパクトに） */}
          <p className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            WEBマーケの超<span className="text-accent">☆</span>伴走屋
          </p>

          {/* 肩書き4枚（社会的証明） */}
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="bg-surface px-3 py-6 sm:px-7 sm:py-7 md:px-6 md:py-8 lg:px-7"
              >
                <dt className="font-display whitespace-nowrap text-[15px] font-medium tracking-[0.01em] text-foreground sm:text-[17px] md:text-base lg:text-lg">
                  {s.label}
                </dt>
                <dd className="mt-3 flex items-baseline gap-1.5 whitespace-nowrap leading-none">
                  <span
                    className="hero-underline font-display text-[22px] font-bold tracking-tight text-foreground sm:text-[32px] md:text-[36px] lg:text-[40px]"
                    style={
                      {
                        "--hero-underline-delay": `${0.25 + i * 0.18}s`,
                      } as React.CSSProperties
                    }
                  >
                    {s.value}
                  </span>
                  {s.note && (
                    <span className="font-display text-[12px] font-semibold text-accent sm:text-[16px] md:text-[16px] lg:text-[18px]">
                      {s.note}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          {/* CTA */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-foreground px-4 py-4 font-display text-base font-semibold text-background transition-transform hover:-translate-y-0.5 sm:px-9 md:px-10 md:py-5 md:text-lg"
            >
              お問い合わせ <ArrowRight size={18} strokeWidth={2} />
            </a>
            <a
              href="#works"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-foreground bg-surface px-4 py-4 font-display text-base font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background sm:px-9 md:px-10 md:py-5 md:text-lg"
            >
              実績を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
