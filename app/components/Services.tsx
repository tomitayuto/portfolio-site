"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { serviceCategories } from "../data/site";

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(serviceCategories[0].id);

  return (
    <section id="services" className="section-pad border-t border-border">
      <div className="container-wide">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div className="md:sticky md:top-24 md:self-start">
            <p className="eyebrow">Services</p>
            <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              対応業務、実現可能なこと
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              気になるカテゴリだけタップして展開してください。
              <br />
              事業フェーズと相談しながら、必要な役割を必要なだけ。点ではなく線で支えます。
            </p>
          </div>

          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
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
                      <p className="font-display text-lg font-semibold tracking-tight text-foreground">
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
                      <div className="border-t border-border bg-background/60 px-6 py-6 md:px-8">
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
