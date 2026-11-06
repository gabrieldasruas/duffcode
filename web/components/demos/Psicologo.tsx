"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, ChevronDown, Clock, Heart, Leaf, MapPin, MessageCircle, Monitor, Sofa } from "lucide-react";
import type { Template } from "@/data/templates";
import { DemoShell } from "./DemoShell";

const NOME = "Dra. Ana Beatriz Moraes";
const CRP = "Psicóloga · CRP 12/34567";
const WA = "#25d366";

const temas = [
  { id: "Ansiedade", txt: "Quando a preocupação toma conta do dia. Vamos entender de onde ela vem e construir formas mais leves de lidar com ela." },
  { id: "Depressão", txt: "Desânimo, cansaço e falta de sentido merecem cuidado. A terapia é um espaço para reencontrar o que faz bem." },
  { id: "Relacionamentos", txt: "Conflitos no casal, na família ou no trabalho. Um lugar para compreender padrões e se comunicar melhor." },
  { id: "Autoestima", txt: "Para quem se cobra demais ou se sente insuficiente. Um caminho para se olhar com mais gentileza." },
  { id: "Luto", txt: "Perdas pedem tempo e acolhimento. Caminhamos juntos no seu ritmo." },
  { id: "Burnout", txt: "Esgotamento pelo trabalho não é fraqueza. Vamos rever limites, rotina e prioridades." },
];
const sessao = [
  { t: "Primeiro contato", d: "Uma conversa breve pelo WhatsApp para tirar dúvidas e combinar o melhor horário." },
  { t: "Acolhimento", d: "Na primeira sessão, conhecemos sua história e o que te trouxe até aqui." },
  { t: "Acompanhamento", d: "Sessões semanais de 50 minutos, no seu ritmo, com sigilo absoluto." },
];
const faq = [
  { q: "As sessões são online ou presenciais?", a: "As duas opções. O atendimento online tem a mesma qualidade e sigilo, por videochamada." },
  { q: "Quanto tempo dura cada sessão?", a: "50 minutos, normalmente uma vez por semana. A frequência é combinada com você." },
  { q: "Atende por convênio?", a: "O atendimento é particular, com recibo para reembolso no seu plano de saúde." },
  { q: "Tudo o que eu falar fica em sigilo?", a: "Sim. O sigilo é um compromisso ético da psicologia, previsto no Código de Ética Profissional." },
];
const horas = ["08:00", "10:00", "14:00", "16:00", "18:00", "19:30"];

const eyebrow = "mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.28em] text-[var(--c2)]";
const h2 = "font-serif text-3xl leading-[1.1] @xl:text-4xl";
const waBtn = "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 active:scale-95";

export default function Psicologo({ t }: { t: Template }) {
  const [tema, setTema] = useState(temas[0].id);
  const [faqOpen, setFaq] = useState<number | null>(0);
  const [modo, setModo] = useState<"online" | "presencial">("online");
  const [hora, setHora] = useState(horas[3]);
  const [ok, setOk] = useState(false);
  const atual = temas.find((x) => x.id === tema)!;

  return (
    <DemoShell t={t} className="font-[family-name:var(--font-manrope)]">
      <nav className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--c3)]/8 bg-[var(--c1)]/85 px-6 py-3.5 backdrop-blur-md">
        <span className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--c2)] text-white"><Leaf className="h-4 w-4" aria-hidden="true" /></span>
          <span className="leading-tight">
            <span className="block font-serif text-base">{NOME}</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[.22em] text-[var(--c2)]">{CRP}</span>
          </span>
        </span>
        <span className="hidden gap-6 text-xs opacity-70 @3xl:flex"><a>Como ajudo</a><a>Sessões</a><a>Sobre</a><a>Dúvidas</a></span>
        <button type="button" className="min-h-9 cursor-pointer rounded-full border border-[var(--c3)]/20 px-4 text-xs font-semibold transition hover:border-[var(--c2)] hover:text-[var(--c2)]">Agendar</button>
      </nav>

      {/* hero */}
      <header className="grid items-center gap-10 px-6 py-12 @3xl:grid-cols-[1fr_1fr] @3xl:py-16">
        <div>
          <p className={eyebrow}><Heart className="h-4 w-4" aria-hidden="true" />Psicoterapia para adultos</p>
          <h3 className="mb-5 font-serif text-[2.7rem] leading-[1.05] @xl:text-[3.4rem]">
            Um espaço seguro para você <em className="text-[var(--c2)]">ser ouvido.</em>
          </h3>
          <p className="mb-7 max-w-md text-sm leading-relaxed opacity-70">
            Atendimento online e presencial em Joinville, com escuta sem julgamentos e no seu tempo. Para cuidar da ansiedade, das relações e de você.
          </p>
          <div className="flex flex-wrap gap-3">
            <button type="button" className={waBtn} style={{ background: WA }}><MessageCircle className="h-4 w-4" aria-hidden="true" />Conversar pelo WhatsApp</button>
            <button type="button" className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-5 text-sm font-semibold transition hover:text-[var(--c2)]">
              Como funciona <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-xs">
            {["Online e presencial", "Sigilo absoluto", "Recibo para reembolso"].map((x) => (
              <span key={x} className="inline-flex items-center gap-1.5 rounded-full bg-[var(--c2)]/10 px-3 py-1.5 font-medium text-[var(--c2)]"><Check className="h-3.5 w-3.5" aria-hidden="true" />{x}</span>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[440px]">
          <div aria-hidden="true" className="absolute -right-5 -top-5 h-full w-full rounded-[200px_200px_28px_28px] bg-[#e7d9c6]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[200px_200px_28px_28px]">
            <Image src="/modelos/psicologo/sessao.webp" alt="Psicóloga em sessão de terapia com uma paciente" fill priority sizes="(max-width: 768px) 90vw, 440px" className="object-cover object-[62%_50%]" />
          </div>
          <div className="absolute -left-4 bottom-8 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_40px_rgba(47,42,36,.15)]">
            <span className="block text-[10px] font-semibold uppercase tracking-wider opacity-55">Próximo horário</span>
            <span className="block font-serif text-lg">Quinta, 16:00</span>
          </div>
        </div>
      </header>

      {/* temas */}
      <section className="bg-white px-6 py-14">
        <p className={eyebrow}>Como posso te ajudar</p>
        <h4 className={`${h2} mb-6 max-w-lg`}>O que você está <em className="text-[var(--c2)]">vivendo agora?</em></h4>
        <div className="mb-6 flex flex-wrap gap-2">
          {temas.map((x) => (
            <button key={x.id} type="button" aria-pressed={tema === x.id} onClick={() => setTema(x.id)}
              className={`min-h-10 cursor-pointer rounded-full border px-5 text-sm transition ${tema === x.id ? "border-[var(--c2)] bg-[var(--c2)] text-white" : "border-[var(--c3)]/15 hover:border-[var(--c2)]"}`}>{x.id}</button>
          ))}
        </div>
        <div key={atual.id} className="grid items-center gap-6 rounded-[28px] bg-[var(--c1)] p-7 @3xl:grid-cols-[1.3fr_1fr]">
          <div>
            <h5 className="mb-3 font-serif text-3xl">{atual.id}</h5>
            <p className="mb-6 max-w-md leading-relaxed opacity-75">{atual.txt}</p>
            <button type="button" className={waBtn} style={{ background: WA }}><MessageCircle className="h-4 w-4" aria-hidden="true" />Quero conversar sobre isso</button>
          </div>
          <p className="border-l-2 border-[var(--c2)]/40 pl-5 font-serif text-xl italic leading-snug opacity-80">“Pedir ajuda é um ato de coragem, não de fraqueza.”</p>
        </div>
      </section>

      {/* sessões */}
      <section className="px-6 py-14">
        <p className={eyebrow}>Como funcionam as sessões</p>
        <h4 className={`${h2} mb-8`}>Do primeiro “oi” ao <em className="text-[var(--c2)]">acompanhamento</em></h4>
        <ol className="grid gap-4 @3xl:grid-cols-3">
          {sessao.map((s, i) => (
            <li key={s.t} className="rounded-3xl border border-[var(--c3)]/10 bg-white p-6">
              <span className="mb-3 block font-serif text-4xl italic text-[var(--c2)]">0{i + 1}</span>
              <span className="mb-2 block font-semibold">{s.t}</span>
              <span className="block text-sm leading-relaxed opacity-70">{s.d}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* sobre */}
      <section className="grid items-center gap-10 bg-[#ece3d6] px-6 py-14 @3xl:grid-cols-[1fr_1.1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
          <Image src="/modelos/psicologo/sala.webp" alt="Sala de atendimento iluminada pelo sol" fill sizes="(max-width: 768px) 90vw, 440px" className="object-cover" />
        </div>
        <div>
          <p className={eyebrow}>Sobre mim</p>
          <h4 className={`${h2} mb-4`}>Escuta com <em className="text-[var(--c2)]">tempo e cuidado</em></h4>
          <p className="mb-5 text-sm leading-relaxed opacity-75">
            Sou psicóloga clínica com abordagem na Terapia Cognitivo-Comportamental. Acredito numa terapia próxima, clara e feita junto com você, respeitando sua história e o seu ritmo.
          </p>
          <ul className="grid gap-2 text-sm">
            {["Graduação em Psicologia", "Especialização em Terapia Cognitivo-Comportamental", "Atendimento a adultos e casais"].map((x) => (
              <li key={x} className="flex items-center gap-2.5"><Check className="h-4 w-4 text-[var(--c2)]" aria-hidden="true" />{x}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* agendar */}
      <section className="px-6 py-14">
        <div className="rounded-[28px] bg-[var(--c3)] p-7 text-[var(--c1)] @3xl:grid @3xl:grid-cols-[1fr_1.2fr] @3xl:gap-10">
          <div className="mb-6 @3xl:mb-0">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.28em] opacity-60">Agendamento</p>
            <h4 className="mb-3 font-serif text-3xl leading-tight">Vamos marcar sua <em>primeira sessão?</em></h4>
            <p className="text-sm opacity-70">Escolha como prefere ser atendido e um horário. Eu confirmo pelo WhatsApp.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2">
              {([["online", "Online", Monitor], ["presencial", "Presencial", Sofa]] as const).map(([v, l, I]) => (
                <button key={v} type="button" aria-pressed={modo === v} onClick={() => { setModo(v); setOk(false); }}
                  className={`flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-2xl border text-sm font-semibold transition ${modo === v ? "border-[var(--c1)] bg-[var(--c1)] text-[var(--c3)]" : "border-[var(--c1)]/25 hover:border-[var(--c1)]/60"}`}>
                  <I className="h-4 w-4" aria-hidden="true" />{l}</button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {horas.map((h) => (
                <button key={h} type="button" aria-pressed={hora === h} onClick={() => { setHora(h); setOk(false); }}
                  className={`flex min-h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl border text-sm transition ${hora === h ? "border-[var(--c2)] bg-[var(--c2)] text-white" : "border-[var(--c1)]/20 hover:border-[var(--c1)]/50"}`}>
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />{h}</button>
              ))}
            </div>
            <button type="button" onClick={() => setOk(true)} className={`${waBtn} w-full`} style={{ background: WA }}>
              {ok ? `✓ Pedido enviado: ${modo}, ${hora}` : "Confirmar pelo WhatsApp"}
            </button>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="px-6 pb-14">
        <p className={eyebrow}>Dúvidas frequentes</p>
        <h4 className={`${h2} mb-6`}>Antes de começar</h4>
        <div className="flex flex-col gap-2.5">
          {faq.map((f, i) => {
            const open = faqOpen === i;
            return (
              <div key={f.q} className="rounded-2xl border border-[var(--c3)]/10 bg-white">
                <button type="button" aria-expanded={open} onClick={() => setFaq(open ? null : i)} className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold">
                  {f.q}<ChevronDown className={`h-4 w-4 shrink-0 text-[var(--c2)] transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                {open && <p className="px-5 pb-5 text-sm leading-relaxed opacity-70">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-[var(--c3)]/10 px-6 py-7 text-xs">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span><span className="font-serif text-base">{NOME}</span><span className="ml-2 opacity-60">{CRP}</span></span>
          <span className="flex items-center gap-1.5 opacity-65"><MapPin className="h-3.5 w-3.5" aria-hidden="true" />Centro · Joinville/SC e online</span>
        </div>
      </footer>
    </DemoShell>
  );
}
