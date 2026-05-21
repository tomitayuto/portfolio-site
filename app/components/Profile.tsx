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

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
          事業のゴールから逆算した上流工程の課題整理を起点に、必要な施策を必要な粒度で実装します。社内教育としてのセミナー・勉強会の登壇も実施しており、内製化を目指す体制づくりまで踏み込んで支援します。
        </p>
      </div>
    </section>
  );
}
