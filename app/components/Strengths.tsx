import { strengths } from "../data/site";

export default function Strengths() {
  return (
    <section id="strengths" className="section-pad border-t border-border">
      <div className="container-wide">
        <p className="eyebrow">Strengths</p>
        <h2 className="font-display mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          “制作だけ” でも “戦略だけ” でもない、
          <br className="hidden md:block" />
          つなぎ目を持って動ける人。
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {strengths.map((item, i) => (
            <div key={item.title} className="border-t border-foreground pt-6">
              <span className="font-display text-xs tracking-[0.22em] text-accent">
                STRENGTH {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
