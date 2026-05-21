import { career } from "../data/site";

export default function Career() {
  return (
    <section id="career" className="section-pad border-t border-border">
      <div className="container-wide">
        <p className="eyebrow">Career</p>
        <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          経歴
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          単発の制作からSNS・広告運用代行を経て、現在は「事業に伴走する」スタイルへ。<br />
          そのプロセスでつくられた業務範囲の広さが、いまの強みになっています。
        </p>

        <ol className="mt-16 space-y-12 border-l border-border md:ml-4">
          {career.map((c, i) => (
            <li key={c.title} className="relative pl-8 md:pl-12">
              <span
                className="absolute left-0 top-1.5 -translate-x-1/2 rounded-full border-2 border-accent bg-background"
                style={{ width: 14, height: 14 }}
                aria-hidden
              />
              <p className="font-display text-xs tracking-[0.18em] text-accent">{c.period}</p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight text-foreground md:text-xl">
                {c.title}
              </h3>
              {c.role && (
                <p className="mt-1 font-display text-xs text-subtle">{c.role}</p>
              )}
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{c.body}</p>
              {i === 0 && (
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 font-display text-[10px] font-medium tracking-wider text-background">
                  現在
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
