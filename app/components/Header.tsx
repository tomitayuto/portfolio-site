import Link from "next/link";

const nav = [
  { href: "#skills", label: "スキル・対応業務" },
  { href: "#portfolio", label: "ポートフォリオ" },
  { href: "#career", label: "経歴" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-wide flex flex-col gap-2 py-3 md:flex-row md:items-center md:justify-between md:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="font-display text-sm font-semibold tracking-tight md:text-base"
          >
            WEBマーケの超<span className="text-accent">☆</span>伴走屋
          </Link>
          <a
            href="#contact"
            className="font-display text-xs font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent md:hidden"
          >
            お問合せ
          </a>
        </div>

        <nav className="-mx-1 flex items-center gap-1 overflow-x-auto md:mx-0 md:gap-7 [&::-webkit-scrollbar]:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-1 font-display text-xs text-muted transition-colors hover:bg-accent-soft hover:text-foreground md:px-0 md:py-0 md:text-sm md:hover:bg-transparent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden font-display text-sm font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent md:inline"
        >
          お問合せ
        </a>
      </div>
    </header>
  );
}
