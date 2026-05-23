import { ArrowUpRight, CalendarClock, Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "../data/site";

const channels = [
  {
    icon: CalendarClock,
    label: "Online Meeting",
    value: "オンラインミーティングを予約する",
    href: site.contact.meetingUrl,
    note: "Jicooで希望の日時をその場で予約",
    primary: true,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    note: "ご相談・お見積もり依頼はこちら",
    primary: false,
    external: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.contact.phone,
    href: `tel:${site.contact.phone.replaceAll("-", "")}`,
    note: "急ぎのご連絡はこちらへ",
    primary: false,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "LINE",
    value: "LINEで連絡する",
    href: site.contact.lineUrl,
    note: "テンポよくやり取りしたい方向け",
    primary: false,
    external: true,
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
              お問合せ・ご連絡
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
              「相談していいのか分からない」段階でも、まずは気軽にお声がけください。
              <br />
              事業フェーズや現状を伺った上で、最適な関わり方を一緒に考えます。
            </p>
            <p className="mt-6 text-xs leading-relaxed text-subtle">
              ※ {site.contact.replyNote}
              <br />
              ※ 内容によってはお請けできない場合があります。
            </p>
          </div>

          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background">
            {channels.map(({ icon: Icon, label, value, href, note, primary, external }) => (
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
                    className={`flex h-11 w-11 flex-none items-center justify-center rounded-full border transition-colors ${
                      primary
                        ? "border-accent bg-accent text-background"
                        : "border-border bg-background text-foreground group-hover:border-accent group-hover:text-accent"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <div className="flex-1">
                    <p className="font-display text-[11px] uppercase tracking-[0.2em] text-subtle">
                      {label}
                      {primary && (
                        <span className="ml-2 rounded-full bg-foreground px-2 py-0.5 text-[9px] tracking-wider text-background">
                          RECOMMEND
                        </span>
                      )}
                    </p>
                    <p
                      className={`mt-1 text-sm font-medium ${
                        primary ? "text-foreground" : "text-foreground"
                      }`}
                    >
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
