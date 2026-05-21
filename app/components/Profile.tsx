import { credentials, site } from "../data/site";

const skills = [
  "広告運用",
  "SNS運用",
  "CRM構築（Lステップ / エルメ）",
  "LP作成・LPO",
  "ECサイトページ作成",
  "ディレクション",
  "プロダクトマネジメント",
  "マーケ顧問",
  "マーケ講師",
  "マーケコンサル",
  "DXコンサル",
];

export default function Profile() {
  return (
    <section id="profile" className="section-pad border-t border-border bg-surface">
      <div className="container-wide grid gap-14 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow">Profile</p>
          <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            富田 悠斗
          </h2>
          <p className="font-display mt-2 text-sm tracking-[0.16em] text-accent">YUTO TOMITA</p>
          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex gap-3">
              <dt className="w-20 flex-none font-display text-xs uppercase tracking-[0.18em] text-subtle">
                屋号
              </dt>
              <dd className="text-foreground">{site.brand}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 flex-none font-display text-xs uppercase tracking-[0.18em] text-subtle">
                拠点
              </dt>
              <dd className="text-foreground">{site.base}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 flex-none font-display text-xs uppercase tracking-[0.18em] text-subtle">
                対応
              </dt>
              <dd className="text-foreground">オンライン全国対応 ／ {site.baseNote}</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-10">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-subtle">
              Credentials
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {credentials.map((c) => (
                <li
                  key={c.label}
                  className="rounded-xl border border-border bg-background px-5 py-4"
                >
                  <p className="font-display text-[11px] uppercase tracking-[0.18em] text-subtle">
                    {c.label}
                  </p>
                  <p className="mt-1.5 font-display text-base font-semibold text-foreground">
                    {c.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-subtle">
              対応可能なスキル
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              戦略立案・ディレクション・コンサルから、広告運用・SNS運用・LP作成・CRM構築といった実務まで、Webマーケティングに関する業務を一貫して対応可能。
              事業のゴールから逆算した上流工程の課題整理を起点に、必要な施策を必要な粒度で実装します。
              社内教育としてのセミナー・勉強会の登壇も実施しており、内製化を目指す体制づくりまで踏み込んで支援します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
