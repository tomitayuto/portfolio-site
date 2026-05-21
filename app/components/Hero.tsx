import { ArrowRight, MapPin } from "lucide-react";
import { site, stats } from "../data/site";

export default function Hero() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-wide">
        <div className="max-w-4xl">
          <p className="eyebrow">Portfolio — 2026</p>
          <h1 className="font-display mt-6 text-[clamp(2.25rem,6.5vw,5rem)] font-bold leading-[1.1] tracking-tight text-foreground">
            <span className="block">WEBマーケの</span>
            <span className="relative inline-block">
              超
              <span className="text-accent">☆</span>
              伴走屋
              <span
                className="absolute -bottom-1 left-0 h-[8px] w-full bg-accent-soft"
                aria-hidden
              />
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            戦略立案から実務、改善までを一気通貫で。<br />
            事業のゴールから逆算し、課題が解決するまで伴走するWEBマーケター。
          </p>

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

          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface px-4 py-5 md:px-6 md:py-6">
                <dt className="font-display text-[10px] uppercase tracking-[0.18em] text-subtle md:text-[11px] md:tracking-[0.2em]">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
