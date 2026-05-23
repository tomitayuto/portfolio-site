import { ArrowUpRight, CalendarClock, Mail, Phone } from "lucide-react";
import { site } from "../data/site";

// LINE公式ロゴ風アイコン（緑円＋白吹き出し＋LINEテキスト）
// 親要素いっぱいに広がる仕様（円が枠そのものになる）
const LineIcon = (_props: { size?: number; strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 320"
    width="100%"
    height="100%"
    aria-hidden="true"
  >
    <circle cx="160" cy="160" r="160" fill="#06C755" />
    <path
      fill="#fff"
      d="M266.66 144.92c0-47.74-47.86-86.58-106.69-86.58S53.28 97.18 53.28 144.92c0 42.8 37.96 78.65 89.22 85.42 3.47.75 8.21 2.29 9.4 5.26 1.07 2.7.7 6.93.35 9.66 0 0-1.25 7.53-1.52 9.13-.46 2.7-2.14 10.55 9.24 5.75 11.38-4.79 61.41-36.16 83.79-61.92 15.46-16.95 22.9-34.16 22.9-53.3z"
    />
    <path
      fill="#06C755"
      d="M138.18 121.85h-7.48a2.08 2.08 0 0 0-2.08 2.07v46.47c0 1.14.93 2.07 2.08 2.07h7.48a2.08 2.08 0 0 0 2.08-2.07v-46.47a2.08 2.08 0 0 0-2.08-2.07zm51.5 0h-7.49a2.07 2.07 0 0 0-2.07 2.07v27.6l-21.29-28.75-.16-.21-.13-.13-.04-.04-.11-.09-.06-.04-.11-.07-.07-.04-.11-.06-.07-.03-.12-.05-.07-.02-.12-.04-.08-.02-.12-.02-.09-.01-.11-.01h-7.61a2.07 2.07 0 0 0-2.07 2.07v46.47c0 1.14.93 2.07 2.07 2.07h7.49a2.07 2.07 0 0 0 2.07-2.07v-27.6l21.32 28.79c.15.21.33.38.53.51l.02.02.13.07.06.03.1.04.1.04.07.02.14.04h.01c.18.04.36.07.55.07h7.45a2.07 2.07 0 0 0 2.07-2.07v-46.47a2.07 2.07 0 0 0-2.07-2.07zm-69.54 38.91h-20.32v-36.84a2.07 2.07 0 0 0-2.08-2.07h-7.48a2.07 2.07 0 0 0-2.08 2.07v46.47c0 .55.22 1.06.57 1.43l.03.04.04.03c.37.36.88.58 1.44.58h29.88a2.07 2.07 0 0 0 2.07-2.07v-7.48a2.07 2.07 0 0 0-2.07-2.07zm111.92-27.28a2.07 2.07 0 0 0 2.07-2.07v-7.49a2.07 2.07 0 0 0-2.07-2.07h-29.88c-.56 0-1.07.22-1.45.58l-.03.03-.04.04c-.36.37-.58.88-.58 1.44v46.47c0 .56.22 1.07.57 1.43l.04.04.04.03c.37.37.88.58 1.45.58h29.88a2.07 2.07 0 0 0 2.07-2.07v-7.48a2.07 2.07 0 0 0-2.07-2.07h-20.32v-7.85h20.32a2.07 2.07 0 0 0 2.07-2.07v-7.49a2.07 2.07 0 0 0-2.07-2.07h-20.32v-7.85z"
    />
  </svg>
);

const channels = [
  {
    icon: CalendarClock,
    label: "ONLINE MEETING",
    value: "オンラインMTGを予約する",
    href: site.contact.meetingUrl,
    note: "打合せをご希望の方はこちら",
    primary: true,
    external: true,
    customIcon: false,
  },
  {
    icon: LineIcon,
    label: "LINE",
    value: "LINEでお問合せ",
    href: site.contact.lineUrl,
    note: "気軽に相談したい方はこちら",
    primary: false,
    external: true,
    customIcon: true,
  },
  {
    icon: Phone,
    label: "PHONE",
    value: site.contact.phone,
    href: `tel:${site.contact.phone.replaceAll("-", "")}`,
    note: "お急ぎの方はこちら",
    primary: false,
    external: false,
    customIcon: false,
  },
  {
    icon: Mail,
    label: "EMAIL",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    note: "メールをご希望の方はこちら",
    primary: false,
    external: false,
    customIcon: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-border bg-surface">
      <div className="container-wide">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              お問合せ
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
              まずはお気軽にお問合せください。
              <br />
              現在のご状況・目的・ご予算に応じて、最適なプランをご提案いたします。
            </p>
            <p className="mt-3 text-xs leading-relaxed text-subtle">
              ※ {site.contact.replyNote}
              <br />
              ※ 内容によってはお請けできない場合があります。
            </p>
          </div>

          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background">
            {channels.map(({ icon: Icon, label, value, href, note, primary, external, customIcon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-5 px-6 py-6 transition-colors hover:bg-accent-soft/50 ${
                    primary ? "bg-accent-soft/30" : ""
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 flex-none items-center justify-center overflow-hidden rounded-full transition-colors ${
                      customIcon
                        ? ""
                        : primary
                          ? "border border-accent bg-accent text-background"
                          : "border border-border bg-background text-foreground group-hover:border-accent group-hover:text-accent"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <div className="flex-1">
                    <p className="font-display text-[11px] uppercase tracking-[0.2em] text-subtle">
                      {label}
                    </p>
                    <p className="mt-1 text-base font-semibold text-foreground md:text-lg">
                      {value}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">{note}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.8}
                    className="text-subtle transition-colors group-hover:text-accent"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
