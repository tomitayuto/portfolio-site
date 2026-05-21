import Link from "next/link";

const nav = [
  { href: "#profile", label: "Profile" },
  { href: "#services", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#career", label: "Career" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="font-display text-sm font-semibold tracking-tight md:text-base">
          WEBマーケの超<span className="text-accent">☆</span>伴走屋
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="font-display text-sm font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
