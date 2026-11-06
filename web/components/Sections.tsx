import { MessageCircle, LayoutTemplate, PenTool, Rocket, Globe, ShoppingBag, MousePointerClick, LayoutDashboard, Gauge } from "lucide-react";
import Link from "next/link";
import { Code2, Mail } from "lucide-react";
import SectionHead from "./SectionHead";
import { InstagramIcon, WhatsAppIcon } from "./BrandIcons";
import { EMAIL, INSTAGRAM, INSTAGRAM_USER, WHATSAPP_TXT, waLink } from "@/lib/contato";

const steps = [
  { icon: MessageCircle, title: "Conversa rápida", text: "Entendemos seu negócio, público e o que você quer que o site faça." },
  { icon: LayoutTemplate, title: "Escolha do modelo", text: "Você escolhe um modelo da biblioteca ou pede algo do zero." },
  { icon: PenTool, title: "Design e código", text: "Montamos o site com a sua identidade, rápido e responsivo." },
  { icon: Rocket, title: "Publicação", text: "Domínio, hospedagem e ajustes finais. Você recebe tudo pronto." },
];

export function Process() {
  return (
    <section id="processo" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 md:py-28">
      <SectionHead eyebrow="processo" title="Do primeiro contato ao site no ar" />
      <ol className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-line bg-surface p-6 transition hover:border-white/25">
            <div className="mb-4 flex items-center justify-between">
              <s.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mb-1.5 text-lg font-semibold">{s.title}</h3>
            <p className="text-[.94rem] text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const solutions = [
  { icon: Globe, title: "Sites institucionais", text: "Sua marca, serviços e contatos em um site rápido, bonito e profissional." },
  { icon: ShoppingBag, title: "Lojas virtuais", text: "Catálogo, carrinho e pagamento para você vender online com segurança." },
  { icon: MousePointerClick, title: "Landing pages", text: "Páginas focadas em conversão para campanhas, lançamentos e captação de clientes." },
  { icon: LayoutDashboard, title: "Sistemas e painéis web", text: "Agendamentos, áreas do cliente, dashboards e automações feitos sob medida." },
  { icon: PenTool, title: "Design de interfaces", text: "Layouts pensados para o seu público, no celular e no computador." },
  { icon: Gauge, title: "Performance, SEO e suporte", text: "Site rápido, bem posicionado no Google e com manutenção contínua." },
];

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 md:py-28">
      <SectionHead
        eyebrow="sobre a duffcode"
        title="Somos uma empresa especializada em soluções web"
        sub="Cuidamos de todo o caminho: da ideia ao site no ar, e depois dele. Planejamento, design, desenvolvimento, publicação e suporte, com atenção ao detalhe e ao resultado do seu negócio."
      />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <li key={s.title} className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/60">
            <s.icon className="mb-2 h-6 w-6 text-accent" aria-hidden="true" />
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="text-[.94rem] text-muted">{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
export function Footer() {
  const links = [
    ["Início", "/#"], ["Modelos", "/#modelos"], ["Como funciona", "/#processo"], ["Depoimentos", "/#depoimentos"], ["Orçamento", "/#contato"],
  ];
  const servicos = ["Sites institucionais", "Landing pages", "Lojas virtuais", "Sistemas e painéis", "Identidade visual"];
  const social = "grid h-12 w-12 place-items-center rounded-2xl border border-line bg-surface text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-text";
  return (
    <footer className="mt-auto border-t border-line bg-[radial-gradient(ellipse_at_50%_0%,rgba(109,74,255,.12),transparent_60%)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="mb-4 inline-flex items-center gap-2.5 font-display text-2xl font-extrabold tracking-[-.03em]">
            <Code2 className="h-6 w-6 text-accent" aria-hidden="true" /><span>Duff<span className="text-accent-2">CODE</span></span>
          </Link>
          <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted">Transformamos ideias em sites que trabalham por você. Design premium, desenvolvimento sob medida e foco em resultado.</p>
          <div className="flex gap-3">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${INSTAGRAM_USER}`} className={social}><InstagramIcon /></a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={social}><WhatsAppIcon /></a>
            <a href={`mailto:${EMAIL}`} aria-label={`E-mail ${EMAIL}`} className={social}><Mail className="h-5 w-5" aria-hidden="true" /></a>
          </div>
        </div>
        <nav aria-label="Links rápidos">
          <h3 className="mb-4 font-semibold">Links rápidos</h3>
          <ul className="flex flex-col gap-3 text-sm text-muted">
            {links.map(([l, h]) => <li key={l}><Link href={h} className="transition hover:text-text">{l}</Link></li>)}
          </ul>
        </nav>
        <div>
          <h3 className="mb-4 font-semibold">Serviços</h3>
          <ul className="flex flex-col gap-3 text-sm text-muted">{servicos.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">Contato</h3>
          <ul className="flex flex-col gap-3 text-sm text-muted">
            <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-text"><WhatsAppIcon className="h-4 w-4" />{WHATSAPP_TXT}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 break-all transition hover:text-text"><Mail className="h-4 w-4 shrink-0" aria-hidden="true" />{EMAIL}</a></li>
            <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-text"><InstagramIcon className="h-4 w-4" />{INSTAGRAM_USER}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-4 py-6 pr-24 text-sm text-muted sm:px-8 sm:pr-28">
          <span>© {new Date().getFullYear()} DuffCODE · Todos os direitos reservados</span>
          <span className="font-mono">duffcode.dev</span>
        </div>
      </div>
    </footer>
  );
}
