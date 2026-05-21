import { process } from "../data/site";

export default function Process() {
  return (
    <section id="process" className="section-pad border-t border-border">
      <div className="container-wide">
        <p className="eyebrow">Process</p>
        <h2 className="font-display mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          依頼から納品、そして改善まで。
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          走り出す前に前提を揃え、走り出した後も走らせっぱなしにしない。
          <br />「やった → 数字が出た → 次にこうする」を一緒に繰り返します。
        </p>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {process.map((p) => (
            <li key={p.step} className="bg-background p-7">
              <span className="font-display text-3xl font-semibold text-accent">{p.step}</span>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
