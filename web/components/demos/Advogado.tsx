"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, BookOpen, Briefcase, Building2, CalendarDays, Check, ChevronDown, FileText, HeartHandshake, Landmark, MapPin, MessageCircle, Scale, Users } from "lucide-react";
import type { Template } from "@/data/templates";
import { DemoShell } from "./DemoShell";

const ESC = "Ribeiro & Lima";
const OAB = "Advocacia · OAB/SC 0000";

const areas = [
  { id: "Trabalhista", icon: Briefcase, txt: "Orientação a empregados e empresas em contratos, rescisões, horas extras e acordos.", itens: ["Rescisão e verbas", "Horas extras e adicionais", "Assédio no trabalho", "Consultoria para empresas"] },
  { id: "Família", icon: HeartHandshake, txt: "Atendimento sensível e reservado em momentos delicados da vida familiar.", itens: ["Divórcio e partilha", "Guarda e convivência", "Pensão alimentícia", "Inventário"] },
  { id: "Civil", icon: Scale, txt: "Contratos, indenizações e relações de consumo, com foco em soluções seguras.", itens: ["Contratos", "Indenizações", "Direito do consumidor", "Cobranças"] },
  { id: "Empresarial", icon: Building2, txt: "Assessoria jurídica preventiva para quem empreende e quer crescer com segurança.", itens: ["Abertura de empresa", "Contratos societários", "Assessoria mensal", "Recuperação de crédito"] },
  { id: "Previdenciário", icon: Landmark, txt: "Planejamento e pedidos junto ao INSS, com análise cuidadosa de cada caso.", itens: ["Aposentadorias", "Auxílios e benefícios", "Revisões", "Planejamento previdenciário"] },
];
const passos = [
  { t: "Primeiro contato", d: "Você conta brevemente sua situação pelo WhatsApp ou pelo formulário." },
  { t: "Consulta", d: "Analisamos documentos e explicamos, em linguagem clara, os caminhos possíveis." },
  { t: "Acompanhamento", d: "Você recebe atualizações de cada etapa, sem precisar ficar perguntando." },
];
const artigos = [
  { tag: "Trabalhista", t: "Fui demitido: quais verbas devo receber?" },
  { tag: "Família", t: "Como funciona o divórcio em cartório" },
  { tag: "Previdenciário", t: "O que mudou nas regras de aposentadoria" },
];
const faq = [
  { q: "A primeira consulta precisa ser presencial?", a: "Não. Atendemos presencialmente em Joinville e também por videochamada, em todo o Brasil." },
  { q: "Quais documentos devo levar?", a: "Depende do caso. No primeiro contato enviamos uma lista do que separar." },
  { q: "Vocês atendem empresas?", a: "Sim, com assessoria pontual ou mensal, conforme a necessidade." },
];

const eyebrow = "mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.3em] text-[var(--c2)]";
const line = <span className="h-px w-8 bg-[var(--c2)]" />;

export default function Advogado({ t }: { t: Template }) {
  const [area, setArea] = useState(areas[0].id);
  const [faqOpen, setFaq] = useState<number | null>(0);
  const [enviado, setEnviado] = useState(false);
  const atual = areas.find((a) => a.id === area)!;

  return (
    <DemoShell t={t} className="font-[family-name:var(--font-manrope)]">
      <nav className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--c3)]/10 bg-[var(--c1)]/90 px-6 py-4 backdrop-blur-md">
        <span className="flex items-center gap-3">
          <Scale className="h-6 w-6 text-[var(--c2)]" aria-hidden="true" />
          <span className="leading-tight"><span className="block font-serif text-lg">{ESC}</span><span className="block text-[10px] uppercase tracking-[.25em] opacity-55">{OAB}</span></span>
        </span>
        <span className="hidden gap-6 text-xs opacity-70 @3xl:flex"><a>Áreas</a><a>Atendimento</a><a>Equipe</a><a>Artigos</a></span>
        <button type="button" className="min-h-9 cursor-pointer border border-[var(--c2)] px-4 text-[11px] font-semibold uppercase tracking-[.18em] text-[var(--c2)] transition hover:bg-[var(--c2)] hover:text-[var(--c1)]">Agendar consulta</button>
      </nav>

      {/* hero */}
      <header className="relative min-h-[460px] overflow-hidden">
        <Image src="/modelos/advogado/biblioteca.webp" alt="Biblioteca jurídica com estantes de livros" fill priority sizes="1000px" className="object-cover object-[30%_50%]" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[var(--c1)] via-[var(--c1)]/85 to-[var(--c1)]/30" />
        <div className="relative flex min-h-[460px] flex-col justify-center px-6 py-16">
          <p className={eyebrow}>{line}Joinville · atendimento em todo o Brasil</p>
          <h3 className="mb-5 max-w-lg font-serif text-[2.8rem] leading-[1.04] @xl:text-[3.5rem]">Direito com <em className="text-[var(--c2)]">clareza</em> e proximidade.</h3>
          <p className="mb-8 max-w-md text-sm leading-relaxed opacity-75">Orientação jurídica explicada em linguagem simples, para você entender seus direitos e decidir com segurança.</p>
          <div className="flex flex-wrap gap-3">
            <button type="button" className="inline-flex min-h-11 cursor-pointer items-center gap-2 bg-[var(--c2)] px-6 text-xs font-bold uppercase tracking-[.15em] text-[var(--c1)] transition hover:brightness-110"><CalendarDays className="h-4 w-4" aria-hidden="true" />Agendar consulta</button>
            <button type="button" className="inline-flex min-h-11 cursor-pointer items-center gap-2 border border-[var(--c3)]/30 px-6 text-xs font-bold uppercase tracking-[.15em] transition hover:border-[var(--c2)]">Áreas de atuação <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
          </div>
        </div>
      </header>

      {/* áreas */}
      <section className="px-6 py-14">
        <p className={eyebrow}>{line}Áreas de atuação</p>
        <h4 className="mb-7 font-serif text-3xl @xl:text-4xl">Como podemos te <em className="text-[var(--c2)]">orientar</em></h4>
        <div className="grid gap-4 @3xl:grid-cols-[240px_1fr]">
          <div className="flex flex-wrap gap-2 @3xl:flex-col" role="tablist" aria-label="Áreas de atuação">
            {areas.map((a) => (
              <button key={a.id} type="button" role="tab" aria-selected={area === a.id} onClick={() => setArea(a.id)}
                className={`flex min-h-12 cursor-pointer items-center gap-3 border px-4 text-left text-sm transition ${area === a.id ? "border-[var(--c2)] bg-[var(--c2)]/12 text-[var(--c2)]" : "border-[var(--c3)]/12 hover:border-[var(--c3)]/35"}`}>
                <a.icon className="h-4 w-4 shrink-0" aria-hidden="true" />{a.id}</button>
            ))}
          </div>
          <div key={atual.id} className="border border-[var(--c3)]/12 bg-[var(--c3)]/[.03] p-7">
            <atual.icon className="mb-4 h-8 w-8 text-[var(--c2)]" aria-hidden="true" />
            <h5 className="mb-3 font-serif text-3xl">Direito {atual.id}</h5>
            <p className="mb-6 max-w-lg text-sm leading-relaxed opacity-75">{atual.txt}</p>
            <ul className="mb-7 grid gap-3 @xl:grid-cols-2">
              {atual.itens.map((i) => <li key={i} className="flex items-center gap-2.5 text-sm"><Check className="h-4 w-4 text-[var(--c2)]" aria-hidden="true" />{i}</li>)}
            </ul>
            <button type="button" className="inline-flex min-h-11 cursor-pointer items-center gap-2 border border-[var(--c2)] px-5 text-xs font-bold uppercase tracking-[.15em] text-[var(--c2)] transition hover:bg-[var(--c2)] hover:text-[var(--c1)]"><MessageCircle className="h-4 w-4" aria-hidden="true" />Falar sobre meu caso</button>
          </div>
        </div>
      </section>

      {/* atendimento */}
      <section className="bg-[var(--c3)]/[.04] px-6 py-14">
        <p className={eyebrow}>{line}Como funciona o atendimento</p>
        <ol className="mt-6 grid gap-6 @3xl:grid-cols-3">
          {passos.map((p, i) => (
            <li key={p.t} className="border-t border-[var(--c2)]/40 pt-5">
              <span className="mb-2 block font-serif text-5xl italic text-[var(--c2)]">{i + 1}</span>
              <span className="mb-2 block font-semibold">{p.t}</span>
              <span className="block text-sm leading-relaxed opacity-70">{p.d}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* equipe */}
      <section className="grid items-center gap-10 px-6 py-14 @3xl:grid-cols-[.9fr_1.1fr]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden">
          <Image src="/modelos/advogado/retrato.webp" alt="Advogado de camisa social branca" fill sizes="(max-width: 768px) 90vw, 360px" className="object-cover object-[50%_25%]" />
          <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
            <span className="block font-serif text-xl text-white">Dr. Rafael Ribeiro</span>
            <span className="text-[11px] uppercase tracking-[.2em] text-[var(--c2)]">OAB/SC 0000 · sócio</span>
          </span>
        </div>
        <div>
          <p className={eyebrow}>{line}O escritório</p>
          <h4 className="mb-4 font-serif text-3xl @xl:text-4xl">Atendimento <em className="text-[var(--c2)]">próximo</em> e transparente</h4>
          <p className="mb-6 text-sm leading-relaxed opacity-75">
            Fundado em Joinville, o escritório reúne advogados com atuação nas áreas trabalhista, de família, civil, empresarial e previdenciária. Cada caso é acompanhado de perto por um advogado responsável.
          </p>
          <div className="relative aspect-[16/8] overflow-hidden">
            <Image src="/modelos/advogado/reuniao.webp" alt="Reunião de atendimento no escritório" fill sizes="(max-width: 768px) 90vw, 520px" className="object-cover" />
          </div>
        </div>
      </section>

      {/* artigos */}
      <section className="px-6 pb-14">
        <p className={eyebrow}>{line}Artigos</p>
        <h4 className="mb-6 font-serif text-3xl">Informação para <em className="text-[var(--c2)]">decidir melhor</em></h4>
        <div className="grid gap-4 @3xl:grid-cols-3">
          {artigos.map((a) => (
            <article key={a.t} className="group cursor-pointer border border-[var(--c3)]/12 p-6 transition hover:border-[var(--c2)]">
              <span className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[.2em] text-[var(--c2)]"><BookOpen className="h-3.5 w-3.5" aria-hidden="true" />{a.tag}</span>
              <p className="mb-5 font-serif text-xl leading-snug">{a.t}</p>
              <span className="inline-flex items-center gap-1.5 text-xs opacity-60 transition group-hover:gap-2.5 group-hover:opacity-100">Ler artigo <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></span>
            </article>
          ))}
        </div>
      </section>

      {/* contato + faq */}
      <section className="grid gap-8 px-6 pb-14 @3xl:grid-cols-2">
        <div className="border border-[var(--c2)]/40 p-7">
          <p className={eyebrow}><FileText className="h-4 w-4" aria-hidden="true" />Agendar consulta</p>
          <h4 className="mb-5 font-serif text-2xl">Conte brevemente sua situação</h4>
          <div className="flex flex-col gap-3 text-sm">
            <span className="flex min-h-11 items-center border border-[var(--c3)]/15 px-4 opacity-60">Seu nome</span>
            <span className="flex min-h-11 items-center border border-[var(--c3)]/15 px-4 opacity-60">WhatsApp</span>
            <span className="flex min-h-11 items-center justify-between border border-[var(--c3)]/15 px-4 opacity-60">Área: {area}<Users className="h-4 w-4" aria-hidden="true" /></span>
            <button type="button" onClick={() => setEnviado(true)} className="mt-1 min-h-12 cursor-pointer bg-[var(--c2)] text-xs font-bold uppercase tracking-[.15em] text-[var(--c1)]">
              {enviado ? "✓ Recebido! Retornamos em breve" : "Enviar"}
            </button>
          </div>
        </div>
        <div>
          <p className={eyebrow}>{line}Dúvidas frequentes</p>
          <div className="mt-4 flex flex-col">
            {faq.map((f, i) => {
              const open = faqOpen === i;
              return (
                <div key={f.q} className="border-b border-[var(--c3)]/12">
                  <button type="button" aria-expanded={open} onClick={() => setFaq(open ? null : i)} className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-sm font-semibold">
                    {f.q}<ChevronDown className={`h-4 w-4 shrink-0 text-[var(--c2)] transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {open && <p className="pb-4 text-sm leading-relaxed opacity-70">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--c3)]/10 px-6 py-7 text-xs">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span><span className="font-serif text-base">{ESC}</span><span className="ml-2 opacity-55">{OAB}</span></span>
          <span className="flex items-center gap-1.5 opacity-65"><MapPin className="h-3.5 w-3.5" aria-hidden="true" />Rua do Príncipe, 400 · Joinville/SC</span>
        </div>
      </footer>
    </DemoShell>
  );
}
