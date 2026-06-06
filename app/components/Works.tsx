"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import {
  categoryLabels,
  industryLabels,
  industryOrder,
  works,
  type Work,
  type WorkCategory,
} from "../data/works";

type Filter = "all" | WorkCategory;

const filterButtons: { id: Filter; label: string }[] = [
  { id: "all", label: "すべて" },
  { id: "ads", label: categoryLabels.ads },
  { id: "lp", label: categoryLabels.lp },
  { id: "pm", label: categoryLabels.pm },
  { id: "consulting", label: categoryLabels.consulting },
  { id: "crm", label: categoryLabels.crm },
  { id: "sns", label: categoryLabels.sns },
  { id: "affiliate", label: categoryLabels.affiliate },
];

function WorkCard({ w }: { w: Work }) {
  return (
    <article
      className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-foreground/30"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-display text-[10px] font-medium tracking-wider text-accent">
          {categoryLabels[w.category]}
        </span>
        {w.ongoing && (
          <span className="inline-flex items-center gap-1 rounded-full border border-accent/50 px-2.5 py-0.5 font-display text-[10px] font-medium text-accent">
            <Clock size={10} strokeWidth={2} />
            対応中
          </span>
        )}
      </div>

      <p className="mt-4 font-display text-[11px] uppercase tracking-[0.16em] text-subtle">
        {w.industry}
      </p>
      <h3 className="mt-1.5 font-display text-base font-semibold leading-snug tracking-tight text-foreground">
        {w.title}
      </h3>

      {w.metrics && w.metrics.length > 0 && (
        <ul className="mt-4 space-y-1 border-l-2 border-accent pl-3">
          {w.metrics.map((m) => (
            <li
              key={m}
              className="font-display text-sm font-semibold tracking-tight text-foreground"
            >
              {m}
            </li>
          ))}
        </ul>
      )}

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{w.summary}</p>

      {w.scope && w.scope.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1">
          {w.scope.map((s) => (
            <li
              key={s}
              className="rounded-full border border-border px-2.5 py-0.5 text-[10px] text-subtle"
            >
              {s}
            </li>
          ))}
        </ul>
      )}

      {w.url ? (
        <a
          href={w.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 self-start rounded-full border border-accent/40 bg-accent-soft px-3 py-1 font-display text-xs font-medium text-accent transition-colors hover:border-accent hover:bg-accent hover:text-background"
        >
          公開中のLPを見る
          <ArrowUpRight size={12} strokeWidth={2} />
        </a>
      ) : w.comingSoon ? (
        <span className="mt-4 inline-flex items-center gap-1 self-start rounded-full border border-border bg-surface px-3 py-1 font-display text-xs font-medium text-subtle">
          現在制作中...
        </span>
      ) : null}
    </article>
  );
}

export default function Works() {
  const [filter, setFilter] = useState<Filter>("all");

  // フィルター適用後の作品リスト
  const filtered = useMemo(() => {
    if (filter === "all") return works;
    return works.filter((w) => w.category === filter);
  }, [filter]);

  // 業種ごとにグルーピング（業種順を保つ）
  const grouped = useMemo(() => {
    return industryOrder
      .map((ind) => ({
        industry: ind,
        label: industryLabels[ind],
        items: filtered.filter((w) => w.industryCategory === ind),
      }))
      .filter((g) => g.items.length > 0);
  }, [filtered]);

  return (
    <section id="portfolio" className="section-pad border-t border-border bg-surface">
      <div className="container-wide">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            ポートフォリオ
          </h2>
        </div>

        {/* フィルター */}
        <div className="mt-10 flex flex-wrap gap-2">
          {filterButtons.map((b) => {
            const isActive = filter === b.id;
            const count =
              b.id === "all"
                ? works.length
                : works.filter((w) => w.category === b.id).length;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setFilter(b.id)}
                className={`rounded-full border px-4 py-1.5 font-display text-xs transition-colors ${
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-muted hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {b.label}
                <span className="ml-1.5 text-[10px] opacity-70">{count}</span>
              </button>
            );
          })}
        </div>

        {/* 業種グルーピング表示 */}
        {grouped.length > 0 ? (
          <div className="mt-12 space-y-14">
            {grouped.map((g) => (
              <div key={g.industry}>
                <div className="mb-5 flex items-baseline gap-3 border-b border-border pb-3">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                    {g.label}
                  </h3>
                  <span className="font-display text-xs text-subtle">
                    {g.items.length}件
                  </span>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {g.items.map((w) => (
                    <WorkCard key={w.id} w={w} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-sm text-subtle">
            該当する実績はありません。
          </p>
        )}
      </div>
    </section>
  );
}
