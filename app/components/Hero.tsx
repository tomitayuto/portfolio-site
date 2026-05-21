import { ArrowRight, MapPin } from "lucide-react";
import { site, stats } from "../data/site";

export default function Hero() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-wide">
        <div className="max-w-5xl">
          <p className="eyebrow">Portfolio — 2026</p>

          {/* 屋号（改行なし・1行で収める） */}
          <h1 className="font-display mt-6 whitespace-nowrap text-[clamp(1.875rem,7.6vw,4.75rem)] font-bold leading-[1.1] tracking-tight text-foreground">
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

          {/* 名前（屋号とセット） */}
          <p className="mt-5 font-display text-base text-foreground md:text-lg">
            <span className="font-semibold">富田 悠斗</span>
            <span className="ml-3 text-xs tracking-[0.16em] text-subtle md:text-sm">
              YUTO TOMITA
            </span>
          </p>

          {/* 肩書き4枚（社会的証明） */}
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface px-4 py-5 md:px-6 md:py-6">
                <dt className="font-display text-[10px] uppercase tracking-[0.18em] text-subtle md:text-[11px] md:tracking-[0.2em]">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
                  {s.value}
                </dd>
                {s.note && (
                  <p className="mt-1 font-display text-[10px] text-muted md:text-xs">
                    {s.note}
                  </p>
                )}
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
