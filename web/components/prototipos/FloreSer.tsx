"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight, Baby, Brain, CalendarDays, Check, ChevronDown, ClipboardList, CreditCard, Flower2, GraduationCap, HeartHandshake,
  Lightbulb, MapPin, MessageCircle, Monitor, Puzzle, Sofa, Sparkles, UserRound, Users,
} from "lucide-react";

// Protótipo para a FloreSer. Textos, CRP e fotos são ilustrativos até a cliente aprovar e enviar os dados reais.
const IMG = (n: string) => `/prototipos/floreser/${n}.webp`;
const NOME = "Silvia Rejane Andrade de Arruda";
const CRP = "Psicóloga · CRP 00/00000";
const WA = "#25d366";

const atendimentos = [
  { icon: HeartHandshake, t: "Psicoterapia", d: "Um espaço de escuta para adolescentes e adultos, com base na psicanálise, para compreender sentimentos, padrões e escolhas.", tags: ["Ansiedade", "Burnout", "Autoestima", "Relacionamentos"] },
  { icon: Brain, t: "Avaliação Neuropsicológica", d: "Investigação detalhada de atenção, memória, linguagem e comportamento, com relatório e devolutiva para a família e a escola.", tags: ["TDAH", "TEA", "Dificuldades de aprendizagem", "Memória"] },
  { icon: Puzzle, t: "Crianças atípicas", d: "Acompanhamento de crianças neurodivergentes com recursos lúdicos, e orientação próxima aos pais e à escola.", tags: ["Ludoterapia", "Orientação parental", "Escola", "Desenvolvimento"] },
];
const etapas = [
  { t: "Entrevista inicial", d: "Conversa com a família ou com o paciente para entender a queixa e a história." },
  { t: "Sessões de testagem", d: "Aplicação de instrumentos e atividades lúdicas, no ritmo de cada pessoa." },
  { t: "Análise", d: "Integração dos resultados com a observação clínica e informações da escola." },
  { t: "Devolutiva e laudo", d: "Encontro para explicar os resultados com clareza, com relatório e orientações." },
];
const temas = [
  { id: "Burnout", txt: "Quando o trabalho consome toda a energia. Vamos olhar para limites, rotina e o que realmente importa para você." },
  { id: "Sentimentos", txt: "Dar nome ao que se sente é o primeiro passo para cuidar. A terapia é um lugar seguro para isso." },
  { id: "Motivação", txt: "Desânimo e falta de propósito merecem atenção. Juntos, buscamos o que te move." },
  { id: "Ansiedade", txt: "Preocupação constante, aperto no peito, mente acelerada. É possível viver com mais leveza." },
  { id: "Família", txt: "Para pais que querem compreender e apoiar melhor o desenvolvimento dos filhos." },
];
const menu = [
  { icon: HeartHandshake, t: "Psicoterapia" },
  { icon: Brain, t: "Avaliação Neuropsicológica" },
  { icon: CreditCard, t: "Valores e formas de pagamento" },
  { icon: CalendarDays, t: "Agendamento" },
  { icon: UserRound, t: "Já sou paciente" },
  { icon: Users, t: "Falar com a equipe" },
];
const faq = [
  { q: "Atende online ou só presencial?", a: "As duas modalidades. A psicoterapia pode ser online; a avaliação neuropsicológica é feita presencialmente no consultório." },
  { q: "Quanto tempo dura a avaliação neuropsicológica?", a: "Em geral de 6 a 10 sessões, incluindo entrevista, testagem e devolutiva. O número exato depende de cada caso." },
  { q: "Atende crianças a partir de que idade?", a: "Crianças, adolescentes e adultos. Para os pequenos, as sessões usam recursos lúdicos adequados à idade." },
  { q: "Aceita convênio?", a: "O atendimento é particular, com recibo para solicitar reembolso junto ao seu plano de saúde." },
];

const eyebrow = "mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.28em] text-[var(--g)]";
const h2 = "font-serif text-3xl leading-[1.1] text-[var(--n)] md:text-[2.6rem]";
const waBtn = "inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm font-bold text-white shadow-[0_10px_30px_rgba(37,211,102,.3)] transition hover:-translate-y-0.5";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--g)] text-white"><Flower2 className="h-5 w-5" aria-hidden="true" /></span>
      <span className="leading-tight">
        <span className={`block font-serif text-xl ${light ? "text-white" : "text-[var(--n)]"}`}>Flore<span className="text-[var(--g)]">Ser</span></span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[.22em] ${light ? "text-white/60" : "text-[var(--n)]/55"}`}>Psicologia & Cuidado Humano</span>
      </span>
    </span>
  );
}

export default function FloreSer() {
  const [tema, setTema] = useState(temas[0].id);
  const [faqOpen, setFaq] = useState<number | null>(0);
  const [opcao, setOpcao] = useState<string | null>(null);
  const [modo, setModo] = useState<"Online" | "Presencial">("Online");
  const atual = temas.find((x) => x.id === tema)!;

  return (
    <div style={{ ["--g" as string]: "#d4931b", ["--n" as string]: "#1f2a44", ["--c" as string]: "#fbf7ee" }} className="min-h-screen bg-[var(--c)] font-[family-name:var(--font-manrope)] text-[var(--n)]">
      {/* faixa do protótipo */}
      <div className="bg-[#120c1c] px-4 py-2 text-center text-[11px] font-medium text-white/80">
        Protótipo criado pela <b className="text-[#c4b5fd]">DuffCODE</b> · fotos e textos ilustrativos, substituídos pelos seus na versão final
      </div>

      <nav className="sticky top-0 z-30 border-b border-[var(--n)]/8 bg-[var(--c)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <Logo />
          <span className="hidden gap-7 text-sm font-medium opacity-70 md:flex"><a href="#atendimentos">Atendimentos</a><a href="#avaliacao">Avaliação</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></span>
          <a href="#contato" className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-[var(--n)] px-5 text-sm font-semibold text-white transition hover:bg-[var(--g)]"><CalendarDays className="h-4 w-4" aria-hidden="true" />Agendar</a>
        </div>
      </nav>

      {/* hero */}
      <header className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[var(--g)]/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[1.05fr_.95fr] md:py-20">
          <div>
            <p className={eyebrow}><Sparkles className="h-4 w-4" aria-hidden="true" />Psicologia · Neuropsicologia · Psicanálise</p>
            <h1 className="mb-6 font-serif text-[2.8rem] leading-[1.03] md:text-[4rem]">
              Cuidar da mente é deixar a vida <em className="text-[var(--g)]">florescer.</em>
            </h1>
            <p className="mb-8 max-w-lg text-[1.05rem] leading-relaxed opacity-75">
              Atendimento humano e acolhedor para crianças, adolescentes e adultos, com psicoterapia, avaliação neuropsicológica e um olhar especial para crianças atípicas e suas famílias.
            </p>
            <div className="mb-9 flex flex-wrap gap-3">
              <a href="#contato" className={waBtn} style={{ background: WA }}><MessageCircle className="h-4 w-4" aria-hidden="true" />Agendar pelo WhatsApp</a>
              <a href="#atendimentos" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--n)]/15 bg-white px-6 text-sm font-semibold transition hover:border-[var(--g)] hover:text-[var(--g)]">Conheça os atendimentos <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Online e presencial", "Crianças, adolescentes e adultos", "Recibo para reembolso"].map((x) => (
                <span key={x} className="inline-flex items-center gap-1.5 rounded-full bg-[var(--g)]/12 px-3.5 py-1.5 text-xs font-semibold text-[#9a6a0f]"><Check className="h-3.5 w-3.5" aria-hidden="true" />{x}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px]">
            <div aria-hidden="true" className="absolute -left-5 -top-5 h-full w-full rounded-[220px_220px_32px_32px] border-2 border-[var(--g)]/40" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[220px_220px_32px_32px] shadow-[0_40px_90px_rgba(31,42,68,.25)]">
              <Image src="/modelos/psicologo/sala.webp" alt="Consultório acolhedor iluminado pelo sol" fill priority sizes="(max-width: 768px) 90vw, 460px" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--n)]/60 to-transparent" />
            </div>
            <div className="absolute -right-3 top-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_45px_rgba(31,42,68,.18)] md:-right-8">
              <span className="relative h-12 w-12 overflow-hidden rounded-full"><Image src={IMG("girassol")} alt="" fill sizes="48px" className="object-cover object-top" /></span>
              <span className="leading-tight"><span className="block font-serif text-lg">FloreSer</span><span className="block text-[11px] opacity-60">cuidado que acolhe</span></span>
            </div>
            <div className="absolute -left-4 bottom-8 rounded-2xl bg-[var(--n)] px-5 py-3.5 text-white shadow-[0_20px_45px_rgba(31,42,68,.35)]">
              <span className="block text-[10px] uppercase tracking-[.2em] text-white/60">Atendimento</span>
              <span className="block font-semibold">Online e presencial</span>
            </div>
          </div>
        </div>
      </header>

      {/* atendimentos */}
      <section id="atendimentos" className="scroll-mt-20 bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 max-w-2xl">
            <p className={eyebrow}><Flower2 className="h-4 w-4" aria-hidden="true" />Atendimentos</p>
            <h2 className={h2}>Como posso <em className="text-[var(--g)]">te ajudar</em></h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {atendimentos.map((a) => (
              <article key={a.t} className="group flex flex-col rounded-[28px] border border-[var(--n)]/8 bg-[var(--c)] p-7 transition hover:-translate-y-1 hover:border-[var(--g)]/50 hover:shadow-[0_24px_60px_rgba(31,42,68,.1)]">
                <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[var(--g)] text-white shadow-[0_10px_24px_rgba(212,147,27,.35)]"><a.icon className="h-7 w-7" aria-hidden="true" /></span>
                <h3 className="mb-3 font-serif text-2xl">{a.t}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed opacity-70">{a.d}</p>
                <div className="flex flex-wrap gap-1.5">{a.tags.map((t) => <span key={t} className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold">{t}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* avaliação neuropsicológica */}
      <section id="avaliacao" className="scroll-mt-20 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1fr_1.1fr]">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]"><Image src={IMG("blocos")} alt="Blocos de madeira coloridos usados nas sessões" fill sizes="(max-width: 768px) 90vw, 480px" className="object-cover" /></div>
            <div className="absolute -bottom-6 right-6 rounded-3xl bg-white p-5 shadow-[0_24px_60px_rgba(31,42,68,.18)]">
              <ClipboardList className="mb-2 h-6 w-6 text-[var(--g)]" aria-hidden="true" />
              <span className="block font-serif text-lg leading-tight">Relatório e<br />devolutiva</span>
            </div>
          </div>
          <div>
            <p className={eyebrow}><Brain className="h-4 w-4" aria-hidden="true" />Avaliação Neuropsicológica</p>
            <h2 className={`${h2} mb-5`}>Entender como a mente funciona, <em className="text-[var(--g)]">passo a passo</em></h2>
            <p className="mb-8 leading-relaxed opacity-75">Indicada quando há dúvidas sobre atenção, memória, aprendizagem ou comportamento. O resultado orienta a família, a escola e os outros profissionais que acompanham o caso.</p>
            <ol className="flex flex-col gap-4">
              {etapas.map((e, i) => (
                <li key={e.t} className="flex gap-4 rounded-2xl border border-[var(--n)]/8 bg-white p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--n)] font-serif text-lg text-white">{i + 1}</span>
                  <span><span className="block font-semibold">{e.t}</span><span className="block text-sm opacity-65">{e.d}</span></span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* crianças atípicas */}
      <section className="relative overflow-hidden bg-[var(--n)] py-20 text-white">
        <div aria-hidden="true" className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[var(--g)]/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className={`${eyebrow} !text-[#f4c869]`}><Baby className="h-4 w-4" aria-hidden="true" />Crianças atípicas</p>
            <h2 className="mb-5 font-serif text-3xl leading-[1.1] md:text-[2.6rem]">Cada criança floresce <em className="text-[#f4c869]">no seu tempo</em></h2>
            <p className="mb-8 leading-relaxed text-white/75">Um espaço pensado para crianças neurodivergentes, com brinquedos e atividades que tornam a sessão leve. A família participa do processo e recebe orientação para o dia a dia em casa e na escola.</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {["Recursos lúdicos e brinquedos", "Orientação aos pais", "Contato com a escola", "Plano individual"].map((x) => (
                <li key={x} className="flex items-center gap-2.5 text-sm"><span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--g)]"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>{x}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[28px]"><Image src={IMG("crianca-desenho")} alt="Criança desenhando com a psicóloga" fill sizes="(max-width: 768px) 90vw, 460px" className="object-cover" /></div>
            <div className="relative aspect-square overflow-hidden rounded-[28px]"><Image src={IMG("brincar")} alt="Crianças brincando com blocos de letras" fill sizes="220px" className="object-cover" /></div>
            <div className="relative aspect-square overflow-hidden rounded-[28px]"><Image src={IMG("girassol-por-do-sol")} alt="Girassol ao pôr do sol" fill sizes="220px" className="object-cover" /></div>
          </div>
        </div>
      </section>

      {/* temas */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className={eyebrow}><Lightbulb className="h-4 w-4" aria-hidden="true" />O que você está vivendo</p>
          <h2 className={`${h2} mb-8 max-w-xl`}>Nenhum sentimento <em className="text-[var(--g)]">é pequeno demais</em></h2>
          <div className="mb-6 flex flex-wrap gap-2">
            {temas.map((x) => (
              <button key={x.id} type="button" aria-pressed={tema === x.id} onClick={() => setTema(x.id)}
                className={`min-h-11 cursor-pointer rounded-full border px-6 text-sm font-semibold transition ${tema === x.id ? "border-[var(--n)] bg-[var(--n)] text-white" : "border-[var(--n)]/15 bg-white hover:border-[var(--g)]"}`}>{x.id}</button>
            ))}
          </div>
          <div key={atual.id} className="grid items-center gap-8 rounded-[32px] bg-white p-8 md:grid-cols-[1.4fr_1fr] md:p-10">
            <div>
              <h3 className="mb-3 font-serif text-3xl">{atual.id}</h3>
              <p className="mb-7 max-w-lg leading-relaxed opacity-75">{atual.txt}</p>
              <a href="#contato" className={waBtn} style={{ background: WA }}><MessageCircle className="h-4 w-4" aria-hidden="true" />Quero conversar sobre isso</a>
            </div>
            <p className="border-l-2 border-[var(--g)] pl-6 font-serif text-2xl italic leading-snug opacity-85">“Florescer é um processo. Não precisa ser sozinho.”</p>
          </div>
        </div>
      </section>

      {/* sobre */}
      <section id="sobre" className="scroll-mt-20 bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[.9fr_1.1fr]">
          <div className="relative mx-auto w-full max-w-[400px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-[var(--g)]/15">
              <Image src={IMG("girassol")} alt="Girassol, símbolo da FloreSer" fill sizes="(max-width: 768px) 90vw, 400px" className="object-cover" />
              <span className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 px-4 py-3 text-xs backdrop-blur">📸 Aqui entra a sua foto profissional</span>
            </div>
          </div>
          <div>
            <p className={eyebrow}><GraduationCap className="h-4 w-4" aria-hidden="true" />Sobre mim</p>
            <h2 className={`${h2} mb-2`}>{NOME}</h2>
            <p className="mb-6 text-sm font-semibold text-[var(--g)]">{CRP}</p>
            <p className="mb-6 leading-relaxed opacity-75">
              Psicóloga com atuação em neuropsicologia e psicanálise. Acredito num cuidado humano, que acolhe a história de cada pessoa e respeita o seu tempo. A FloreSer nasceu desse propósito: ajudar crianças, adolescentes, adultos e famílias a florescerem.
            </p>
            <ul className="mb-8 grid gap-3">
              {["Formação em Psicologia", "Especialização em Neuropsicologia", "Formação em Psicanálise", "Experiência com crianças atípicas"].map((x) => (
                <li key={x} className="flex items-center gap-3 rounded-2xl bg-[var(--c)] px-4 py-3 text-sm font-semibold"><Check className="h-4 w-4 text-[var(--g)]" aria-hidden="true" />{x}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--n)]/12 px-4 py-2"><Sofa className="h-4 w-4 text-[var(--g)]" aria-hidden="true" />Consultório acolhedor</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--n)]/12 px-4 py-2"><GraduationCap className="h-4 w-4 text-[var(--g)]" aria-hidden="true" />Cursos e palestras</span>
            </div>
          </div>
        </div>
      </section>

      {/* contato: o menu do WhatsApp vira botões */}
      <section id="contato" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="overflow-hidden rounded-[36px] bg-[var(--n)] text-white md:grid md:grid-cols-[1fr_1.2fr]">
            <div className="relative p-9 md:p-12">
              <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--g)]/30 blur-3xl" />
              <p className="relative mb-3 text-[11px] font-bold uppercase tracking-[.28em] text-[#f4c869]">Contato</p>
              <h2 className="relative mb-4 font-serif text-4xl leading-tight">Vamos começar <em className="text-[#f4c869]">a conversa?</em></h2>
              <p className="relative mb-6 text-white/70">Escolha o assunto e você já cai no WhatsApp com a mensagem pronta. Respondemos com carinho e o mais rápido possível.</p>
              <div className="relative inline-flex rounded-full bg-white/10 p-1">
                {(["Online", "Presencial"] as const).map((m) => (
                  <button key={m} type="button" aria-pressed={modo === m} onClick={() => setModo(m)}
                    className={`inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full px-5 text-sm font-semibold transition ${modo === m ? "bg-white text-[var(--n)]" : "text-white/75"}`}>
                    {m === "Online" ? <Monitor className="h-4 w-4" aria-hidden="true" /> : <MapPin className="h-4 w-4" aria-hidden="true" />}{m}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-3 bg-white/5 p-6 sm:grid-cols-2 md:p-9">
              {menu.map((m) => {
                const on = opcao === m.t;
                return (
                  <button key={m.t} type="button" onClick={() => setOpcao(m.t)}
                    className={`flex min-h-16 cursor-pointer items-center gap-3 rounded-2xl border px-4 text-left text-sm font-semibold transition ${on ? "border-[#f4c869] bg-[#f4c869] text-[var(--n)]" : "border-white/15 hover:border-white/40"}`}>
                    <m.icon className="h-5 w-5 shrink-0" aria-hidden="true" />{m.t}
                  </button>
                );
              })}
              <div className="sm:col-span-2" aria-live="polite">
                <button type="button" className={`${waBtn} mt-2 w-full`} style={{ background: WA }}>
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {opcao ? `Falar sobre: ${opcao} (${modo.toLowerCase()})` : "Escolha um assunto acima"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* dúvidas */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-5">
          <p className={`${eyebrow} justify-center`}>Dúvidas frequentes</p>
          <h2 className={`${h2} mb-8 text-center`}>Antes de <em className="text-[var(--g)]">começar</em></h2>
          <div className="flex flex-col gap-3">
            {faq.map((f, i) => {
              const open = faqOpen === i;
              return (
                <div key={f.q} className={`rounded-2xl border bg-white transition ${open ? "border-[var(--g)]/50" : "border-[var(--n)]/8"}`}>
                  <button type="button" aria-expanded={open} onClick={() => setFaq(open ? null : i)} className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-semibold">
                    {f.q}<ChevronDown className={`h-5 w-5 shrink-0 text-[var(--g)] transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {open && <p className="px-6 pb-5 leading-relaxed opacity-70">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-[var(--n)] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-5 py-10">
          <Logo light />
          <div className="text-sm text-white/65">
            <p>{NOME} · {CRP}</p>
            <p className="mt-1 flex items-center gap-1.5"><MapPin className="h-4 w-4" aria-hidden="true" />Endereço do consultório · atendimento online</p>
          </div>
        </div>
        <p className="border-t border-white/10 px-5 py-5 text-center text-[11px] text-white/45">© 2026 FloreSer · Psicologia & Cuidado Humano · Site desenvolvido por DuffCODE</p>
      </footer>
    </div>
  );
}
