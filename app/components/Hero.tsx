import { ArrowRight, MapPin } from "lucide-react";
import { site, stats } from "../data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-[clamp(80px,12vw,160px)] md:pt-16">
      <div className="container-wide">
        <div className="max-w-5xl">
          <p className="eyebrow">Portfolio — 2026</p>

          {/* 屋号（改行なし・1行で収める） */}
          <h1 className="font-display mt-5 whitespace-nowrap text-[clamp(1.875rem,7.6vw,4.75rem)] font-bold leading-[1.1] tracking-tight text-foreground md:mt-6">
            <span className="relative inline-block">
              WEBマーケの超
              <span className="text-accent">☆</span>
              伴走屋
              <span
                className="absolute -bottom-1 left-0 h-[6px] w-full bg-accent-soft"
                aria-hidden
              />
            </span>
          </h1>

          {/* 名前（屋号とセット・大きく） */}
          <div className="mt-6">
            <p className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              富田 悠斗
            </p>
            <p className="mt-1 font-display text-[11px] tracking-[0.22em] text-subtle md:text-xs">
              YUTO TOMITA
            </p>
          </div>

          {/* 肩書き4枚（社会的証明） */}
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface px-3 py-6 sm:px-6 md:px-7 md:py-8">
                <dt className="font-display whitespace-nowrap text-[16px] font-medium tracking-[0.01em] text-foreground sm:text-[17px] md:text-lg">
                  {s.label}
                </dt>
                <dd className="mt-3 flex items-baseline gap-1.5 whitespace-nowrap leading-none">
                  <span className="font-display text-[26px] font-bold tracking-tight text-foreground sm:text-[32px] md:text-[44px]">
                    {s.value}
                  </span>
                  {s.note && (
                    <span className="font-display text-[11px] font-semibold text-accent sm:text-[14px] md:text-[18px]">
                      {s.note}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          {/* CTA + 拠点 */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-display text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              お問い合わせ <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a
              href="#works"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 font-display text-sm font-medium text-foreground transition-colors hover:border-foreground"
            >
              実績を見る
            </a>
            <span className="inline-flex items-center gap-1.5 text-xs text-subtle">
              <MapPin size={14} strokeWidth={1.8} />
              {site.base}・愛知県内 直接訪問可
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
