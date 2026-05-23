import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">
            WEBマーケの超<span className="text-accent">☆</span>伴走屋
          </p>
          <p className="mt-3 text-sm text-background/70">{site.name}（{site.nameEn}）</p>
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-[0.22em] text-background/60">
            Navigate
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#skills" className="hover:text-accent">スキル・対応業務</a></li>
            <li><a href="#works" className="hover:text-accent">ポートフォリオ</a></li>
            <li><a href="#career" className="hover:text-accent">経歴</a></li>
            <li><a href="#contact" className="hover:text-accent">お問合せ</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-[0.22em] text-background/60">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li>{site.contact.phone}</li>
            <li>{site.contact.email}</li>
            <li>LINE ／ Online Meeting 対応</li>
          </ul>
          <p className="mt-3 text-xs text-background/60">
            {site.base}・愛知県内なら訪問可
          </p>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-wide flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-background/60">
          <p>© {new Date().getFullYear()} {site.name} / WEBマーケの超☆伴走屋</p>
          <p>Last updated 2026.05</p>
        </div>
      </div>
    </footer>
  );
}
