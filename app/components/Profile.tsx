"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { serviceCategories } from "../data/site";

const skills = [
  "広告運用",
  "SNS運用",
  "CRM構築（Lステップ / エルメ）",
  "LP作成・LPO",
  "ECサイトページ構築",
  "ディレクション",
  "プロダクトマネジメント",
  "マーケティング顧問",
  "マーケティング講師",
  "マーケティングコンサル",
  "DXコンサル",
];

export default function Profile() {
  const [openId, setOpenId] = useState<string | null>(serviceCategories[0].id);

  return (
    <section id="skills" className="section-pad border-t border-border bg-surface">
      <div className="container-wide">
        <p className="eyebrow">Skills</p>
        <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          スキル
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          戦略立案・ディレクション・コンサルから、広告運用・SNS運用・LP作成・CRM構築といった実務まで、Webマーケティングに関する業務を一貫して対応可能です。
        </p>

        <ul className="mt-10 flex flex-wrap gap-2">
          {skills.map((s) => (
            <li
              key={s}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
            >
              {s}
            </li>
          ))}
        </ul>

        <p className="eyebrow mt-16">Services</p>
        <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          対応業務
        </h2>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
          事業のゴールから逆算した上流工程の課題整理を起点に、必要な施策を必要な粒度で実装します。社内教育としてのセミナー・勉強会の登壇も実施しており、内製化を目指す体制づくりまで踏み込んで支援します。
        </p>

        <div id="services" className="mt-10 scroll-mt-24">
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background">
            {serviceCategories.map((s, i) => {
              const isOpen = openId === s.id;
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : s.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-5 px-6 py-5 text-left transition-colors hover:bg-accent-soft/40 md:px-8"
                  >
                    <span className="font-display text-xs font-medium tracking-[0.2em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="font-display text-base font-semibold tracking-tight text-foreground md:text-lg">
                        {s.title}
                      </p>
                      <p className="mt-0.5 text-xs text-muted md:text-sm">{s.short}</p>
                    </div>
                    <ChevronDown
                      size={20}
                      strokeWidth={1.6}
                      className={`flex-none text-subtle transition-transform ${
                        isOpen ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-border bg-surface px-6 py-6 md:px-8">
                        <p className="text-sm leading-relaxed text-foreground">
                          {s.description}
                        </p>
                        <p className="mt-5 font-display text-[11px] uppercase tracking-[0.18em] text-subtle">
                          代表的な案件
                        </p>
                        <ul className="mt-3 space-y-1.5 text-sm text-muted">
                          {s.cases.map((c) => (
                            <li key={c} className="flex items-start gap-2">
                              <span className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-accent" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
