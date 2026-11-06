"use client";

import { useState, type ComponentType } from "react";
import {
  ArrowLeft, ArrowRight, Bot, Building2, CalendarClock, Check, CreditCard, Globe, LayoutDashboard, Mail, MessageCircle,
  Palette, Rocket, Search, ShoppingCart, Sparkles, Stethoscope, Truck, UtensilsCrossed, Gem, Scissors, Smile, Briefcase, Users,
} from "lucide-react";
import SectionHead from "./SectionHead";
import { EMAIL, mailLink, waLink } from "@/lib/contato";

type Op = { id: string; t: string; d?: string; icon: ComponentType<{ className?: string }> };

const cenarios: Op[] = [
  { id: "Site ou landing page", t: "Site ou Landing Page", d: "Presença online, páginas institucionais", icon: Globe },
  { id: "Loja virtual", t: "Loja Virtual / E-commerce", d: "Venda produtos online com pagamento", icon: ShoppingCart },
  { id: "Sistema ou plataforma", t: "Sistema ou Plataforma", d: "Automatize processos e dashboards", icon: LayoutDashboard },
];
const nichos: Op[] = [
  { id: "Médico", t: "Médico", icon: Stethoscope }, { id: "Dentista", t: "Dentista", icon: Smile },
  { id: "Barbearia", t: "Barbearia", icon: Scissors }, { id: "Restaurante", t: "Restaurante", icon: UtensilsCrossed },
  { id: "Joalheria", t: "Joalheria / loja", icon: Gem }, { id: "Logística", t: "Transportadora", icon: Truck },
  { id: "Serviços", t: "Prestador de serviço", icon: Briefcase }, { id: "Outro", t: "Outro nicho", icon: Building2 },
];
const recursos: Op[] = [
  { id: "Agendamento online", t: "Agendamento online", icon: CalendarClock }, { id: "Botão de WhatsApp", t: "WhatsApp integrado", icon: MessageCircle },
  { id: "Pagamento online", t: "Pagamento online", icon: CreditCard }, { id: "Área do cliente", t: "Área do cliente / login", icon: Users },
  { id: "SEO no Google", t: "Aparecer no Google (SEO)", icon: Search }, { id: "Identidade visual", t: "Logo e identidade visual", icon: Palette },
  { id: "Automações", t: "Automações / chatbot", icon: Bot }, { id: "Painel administrativo", t: "Painel para editar o site", icon: LayoutDashboard },
];
const prazos = ["O quanto antes", "Em até 30 dias", "Em 1 a 3 meses", "Sem pressa"];
const verbas = ["Até R$ 1.500", "R$ 1.500 a R$ 3.000", "R$ 3.000 a R$ 6.000", "Acima de R$ 6.000", "Ainda não sei"];
const passos = ["Cenário", "Nicho", "Recursos", "Prazo", "Contato"];

const card = (on: boolean) =>
  `group relative flex cursor-pointer flex-col gap-2 rounded-2xl border p-5 text-left transition ${
    on ? "border-accent bg-accent/12 shadow-[0_0_0_1px_var(--accent),0_12px_40px_rgba(109,74,255,.25)]" : "border-line bg-surface hover:border-white/30"
  }`;
const chip = (on: boolean) =>
  `min-h-11 cursor-pointer rounded-full border px-5 text-sm font-medium transition ${on ? "border-accent bg-accent text-white" : "border-line bg-surface hover:border-white/30"}`;
const field = "min-h-12 w-full rounded-xl border border-line bg-surface px-4 text-text outline-offset-1 placeholder:text-muted/60 focus:outline-2 focus:outline-accent-2";

function Marca({ on }: { on: boolean }) {
  return (
    <span className={`absolute right-4 top-4 grid h-6 w-6 place-items-center rounded-full border transition ${on ? "border-accent bg-accent text-white" : "border-white/25"}`}>
      {on && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
    </span>
  );
}

export default function QuoteWizard() {
  const [passo, setPasso] = useState(0);
  const [cen, setCen] = useState<string[]>([]);
  const [nicho, setNicho] = useState("");
  const [rec, setRec] = useState<string[]>([]);
  const [prazo, setPrazo] = useState("");
  const [verba, setVerba] = useState("");
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [tel, setTel] = useState("");
  const [msg, setMsg] = useState("");
  const [enviado, setEnviado] = useState<"" | "whatsapp" | "email">("");

  const alterna = (lista: string[], set: (v: string[]) => void, v: string) => set(lista.includes(v) ? lista.filter((x) => x !== v) : [...lista, v]);
  const pode = [cen.length > 0, nicho !== "", true, prazo !== "" && verba !== "", nome.trim().length > 1 && tel.replace(/\D/g, "").length >= 10][passo];

  const resumo = [
    `*Novo orçamento pelo site DuffCODE*`,
    ``,
    `👤 Nome: ${nome}${empresa ? ` (${empresa})` : ""}`,
    `📱 WhatsApp: ${tel}`,
    ``,
    `🧩 Projeto: ${cen.join(", ")}`,
    `🏷️ Nicho: ${nicho}`,
    `⚙️ Recursos: ${rec.length ? rec.join(", ") : "a definir"}`,
    `⏱️ Prazo: ${prazo}`,
    `💰 Investimento: ${verba}`,
    msg.trim() ? `\n📝 Detalhes: ${msg.trim()}` : "",
  ].join("\n");

  return (
    <section id="contato" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto mb-10 max-w-2xl text-center [&>div]:mx-auto">
        <SectionHead eyebrow="orçamento" title="Solicite seu orçamento" sub="Responda 5 perguntas rápidas e receba uma proposta sob medida em até 1 dia útil." />
      </div>

      {/* barra de passos */}
      <ol className="mb-8 flex items-center" aria-label="Etapas do orçamento">
        {passos.map((p, i) => (
          <li key={p} className="flex flex-1 items-center last:flex-none">
            <span className="flex flex-col items-center gap-1.5">
              <span className={`grid h-11 w-11 place-items-center rounded-full text-sm font-bold transition ${
                i < passo ? "bg-accent/25 text-accent-2" : i === passo ? "bg-accent text-white shadow-[0_0_24px_rgba(109,74,255,.6)]" : "bg-surface-2 text-muted"}`}>
                {i < passo ? <Check className="h-4 w-4" aria-hidden="true" /> : i + 1}
              </span>
              <span className={`hidden text-xs sm:block ${i === passo ? "text-text" : "text-muted"}`}>{p}</span>
            </span>
            {i < passos.length - 1 && <span className={`mx-2 mb-0 h-0.5 flex-1 rounded-full sm:mb-5 ${i < passo ? "bg-accent" : "bg-surface-2"}`} />}
          </li>
        ))}
      </ol>

      <div className="rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur sm:p-9">
        {enviado ? (
          <div className="py-10 text-center" aria-live="polite">
            <span className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-accent text-white shadow-[0_0_40px_rgba(109,74,255,.6)]">
              <Rocket className="h-7 w-7" aria-hidden="true" />
            </span>
            <h3 className="mb-2 font-display text-3xl font-extrabold">Pedido pronto para envio!</h3>
            <p className="mx-auto mb-7 max-w-md text-muted">
              {enviado === "whatsapp" ? "Abrimos o WhatsApp com o seu resumo. É só tocar em enviar." : `Abrimos o seu e-mail com o resumo para ${EMAIL}. É só enviar.`} Respondemos em até 1 dia útil.
            </p>
            <button type="button" onClick={() => { setEnviado(""); setPasso(0); }} className="cursor-pointer text-sm font-semibold text-accent-2 hover:underline">
              Fazer outro orçamento
            </button>
          </div>
        ) : (
          <>
            {passo === 0 && (
              <fieldset>
                <legend className="mb-1 text-2xl font-bold">Qual cenário descreve melhor seu projeto?</legend>
                <p className="mb-6 text-sm text-muted">Selecione quantas opções quiser</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {cenarios.map((o) => {
                    const on = cen.includes(o.id);
                    return (
                      <button key={o.id} type="button" aria-pressed={on} onClick={() => alterna(cen, setCen, o.id)} className={card(on)}>
                        <Marca on={on} />
                        <o.icon className={`mb-2 h-8 w-8 ${on ? "text-accent-2" : "text-muted group-hover:text-text"}`} />
                        <span className="pr-6 font-bold">{o.t}</span>
                        <span className="text-sm text-muted">{o.d}</span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            )}

            {passo === 1 && (
              <fieldset>
                <legend className="mb-1 text-2xl font-bold">Qual é o seu tipo de negócio?</legend>
                <p className="mb-6 text-sm text-muted">Já temos modelos prontos para vários nichos</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {nichos.map((o) => {
                    const on = nicho === o.id;
                    return (
                      <button key={o.id} type="button" aria-pressed={on} onClick={() => setNicho(o.id)} className={`${card(on)} items-center !p-4 text-center`}>
                        <o.icon className={`h-7 w-7 ${on ? "text-accent-2" : "text-muted group-hover:text-text"}`} />
                        <span className="text-sm font-semibold">{o.t}</span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            )}

            {passo === 2 && (
              <fieldset>
                <legend className="mb-1 text-2xl font-bold">O que o seu site precisa ter?</legend>
                <p className="mb-6 text-sm text-muted">Opcional: marque o que for importante para você</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {recursos.map((o) => {
                    const on = rec.includes(o.id);
                    return (
                      <button key={o.id} type="button" aria-pressed={on} onClick={() => alterna(rec, setRec, o.id)}
                        className={`flex min-h-14 cursor-pointer items-center gap-3.5 rounded-2xl border px-4 text-left transition ${on ? "border-accent bg-accent/12" : "border-line bg-surface hover:border-white/30"}`}>
                        <o.icon className={`h-5 w-5 shrink-0 ${on ? "text-accent-2" : "text-muted"}`} />
                        <span className="flex-1 text-sm font-medium">{o.t}</span>
                        <span className={`grid h-5 w-5 place-items-center rounded-md border ${on ? "border-accent bg-accent text-white" : "border-white/25"}`}>{on && <Check className="h-3 w-3" />}</span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            )}

            {passo === 3 && (
              <div className="flex flex-col gap-8">
                <fieldset>
                  <legend className="mb-4 text-2xl font-bold">Para quando você precisa?</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {prazos.map((p) => <button key={p} type="button" aria-pressed={prazo === p} onClick={() => setPrazo(p)} className={chip(prazo === p)}>{p}</button>)}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="mb-4 text-2xl font-bold">Quanto pretende investir?</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {verbas.map((v) => <button key={v} type="button" aria-pressed={verba === v} onClick={() => setVerba(v)} className={chip(verba === v)}>{v}</button>)}
                  </div>
                </fieldset>
              </div>
            )}

            {passo === 4 && (
              <div>
                <h3 className="mb-1 text-2xl font-bold">Para onde enviamos a proposta?</h3>
                <p className="mb-6 text-sm text-muted">Seus dados são usados só para responder o seu orçamento</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-sm text-muted">Seu nome *
                    <input value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="name" placeholder="Como podemos te chamar?" className={field} /></label>
                  <label className="flex flex-col gap-1.5 text-sm text-muted">Empresa ou negócio
                    <input value={empresa} onChange={(e) => setEmpresa(e.target.value)} autoComplete="organization" placeholder="Opcional" className={field} /></label>
                  <label className="flex flex-col gap-1.5 text-sm text-muted sm:col-span-2">WhatsApp *
                    <input value={tel} onChange={(e) => setTel(e.target.value)} type="tel" inputMode="tel" autoComplete="tel" placeholder="(47) 99999-9999" className={field} /></label>
                  <label className="flex flex-col gap-1.5 text-sm text-muted sm:col-span-2">Conte um pouco sobre a sua ideia
                    <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} placeholder="Ex.: quero um site para minha clínica com agendamento e fotos dos tratamentos" className={`${field} py-3`} /></label>
                </div>
                <div className="mt-6 rounded-2xl border border-line bg-bg/60 p-4 text-sm">
                  <p className="mb-2 flex items-center gap-2 font-semibold"><Sparkles className="h-4 w-4 text-accent-2" aria-hidden="true" />Resumo do seu pedido</p>
                  <p className="text-muted">{cen.join(", ")} · {nicho} · {rec.length ? `${rec.length} recursos` : "recursos a definir"} · {prazo} · {verba}</p>
                </div>
              </div>
            )}

            {/* navegação */}
            <div className="mt-9 flex flex-wrap items-center justify-between gap-3">
              <button type="button" onClick={() => setPasso((p) => Math.max(0, p - 1))} disabled={passo === 0}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 px-2 font-semibold text-muted transition hover:text-text disabled:cursor-default disabled:opacity-30">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />Anterior
              </button>
              {passo < 4 ? (
                <button type="button" disabled={!pode} onClick={() => setPasso((p) => p + 1)}
                  className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-accent to-[#a855f7] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(109,74,255,.5)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0">
                  Próximo<ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : (
                <div className="flex flex-wrap gap-3">
                  <a href={pode ? mailLink(`Orçamento DuffCODE: ${nome}`, resumo.replace(/\*/g, "")) : undefined} onClick={(e) => (pode ? setEnviado("email") : e.preventDefault())} aria-disabled={!pode}
                    className={`inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-6 font-semibold transition ${pode ? "cursor-pointer hover:border-white/40" : "pointer-events-none opacity-40"}`}>
                    <Mail className="h-4 w-4" aria-hidden="true" />Enviar por e-mail
                  </a>
                  <a href={pode ? waLink(resumo) : undefined} target="_blank" rel="noopener noreferrer" onClick={(e) => (pode ? setEnviado("whatsapp") : e.preventDefault())} aria-disabled={!pode}
                    className={`inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25d366] px-7 font-bold text-[#062b14] transition ${pode ? "cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,211,102,.45)]" : "pointer-events-none opacity-40"}`}>
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />Enviar pelo WhatsApp
                  </a>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
