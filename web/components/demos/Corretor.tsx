"use client";

import { useState } from "react";
import Image from "next/image";
import { Bath, BedDouble, Calculator, Car, Heart, KeyRound, MapPin, MessageCircle, Ruler, Search, ShieldCheck } from "lucide-react";
import type { Template } from "@/data/templates";
import { DemoShell } from "./DemoShell";

const NOME = "Lucas Ferreira";
const CRECI = "Corretor de imóveis · CRECI 12345-F";
const WA = "#25d366";
const F = (n: string) => `/modelos/corretor/${n}.webp`;

type Imovel = { id: string; titulo: string; bairro: string; tipo: "Casa" | "Apartamento"; negocio: "Comprar" | "Alugar"; preco: number; q: number; b: number; v: number; area: number; foto: string; selo?: string };
const imoveis: Imovel[] = [
  { id: "a", titulo: "Casa com piscina e vista", bairro: "Praia Brava", tipo: "Casa", negocio: "Comprar", preco: 2890000, q: 4, b: 5, v: 3, area: 320, foto: F("casa-piscina"), selo: "Destaque" },
  { id: "b", titulo: "Casa moderna em condomínio", bairro: "Ariribá", tipo: "Casa", negocio: "Comprar", preco: 1950000, q: 3, b: 4, v: 2, area: 240, foto: F("casa-moderna") },
  { id: "c", titulo: "Apartamento frente mar", bairro: "Centro", tipo: "Apartamento", negocio: "Comprar", preco: 1380000, q: 3, b: 3, v: 2, area: 138, foto: F("sala"), selo: "Novo" },
  { id: "d", titulo: "Casa contemporânea com jardim", bairro: "Nações", tipo: "Casa", negocio: "Comprar", preco: 2240000, q: 4, b: 4, v: 3, area: 280, foto: F("casa-jardim") },
  { id: "e", titulo: "Apartamento decorado", bairro: "Pioneiros", tipo: "Apartamento", negocio: "Alugar", preco: 6800, q: 2, b: 2, v: 1, area: 96, foto: F("cozinha") },
  { id: "f", titulo: "Casa alto padrão", bairro: "Estaleirinho", tipo: "Casa", negocio: "Alugar", preco: 14500, q: 5, b: 6, v: 4, area: 410, foto: F("casa-branca"), selo: "Exclusivo" },
];
const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export default function Corretor({ t }: { t: Template }) {
  const [negocio, setNegocio] = useState<"Comprar" | "Alugar">("Comprar");
  const [tipo, setTipo] = useState<"Todos" | "Casa" | "Apartamento">("Todos");
  const [quartos, setQuartos] = useState(0);
  const [fav, setFav] = useState<string[]>(["c"]);
  const [valor, setValor] = useState(1200000);
  const [entrada, setEntrada] = useState(30);
  const lista = imoveis.filter((i) => i.negocio === negocio && (tipo === "Todos" || i.tipo === tipo) && i.q >= quartos);
  // estimativa simples: 30 anos, taxa de 0,85% ao mês (Price)
  const financiado = valor * (1 - entrada / 100), taxa = 0.0085, n = 360;
  const parcela = (financiado * taxa) / (1 - Math.pow(1 + taxa, -n));

  return (
    <DemoShell t={t} className="font-[family-name:var(--font-manrope)]">
      <nav className="sticky top-0 z-20 flex items-center justify-between bg-[var(--c3)] px-6 py-3.5 text-white">
        <span className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--c2)] text-[var(--c3)]"><KeyRound className="h-4 w-4" aria-hidden="true" /></span>
          <span className="leading-tight"><span className="block text-sm font-extrabold tracking-wide">{NOME.toUpperCase()}</span><span className="block text-[10px] opacity-60">{CRECI}</span></span>
        </span>
        <span className="hidden gap-6 text-xs opacity-75 @3xl:flex"><a>Imóveis</a><a>Simulador</a><a>Sobre</a><a>Contato</a></span>
        <button type="button" className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-full px-4 text-xs font-bold text-white" style={{ background: WA }}><MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />WhatsApp</button>
      </nav>

      {/* hero com busca */}
      <header className="relative overflow-hidden text-white">
        <Image src={F("casa-piscina")} alt="Casa moderna com piscina" fill priority sizes="1000px" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[var(--c3)]/80 via-[var(--c3)]/30 to-[var(--c3)]/85" />
        <div className="relative px-6 pb-10 pt-16 @3xl:pt-24">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[.3em] text-[var(--c2)]">Balneário Camboriú e região</p>
          <h3 className="mb-4 max-w-xl text-[2.6rem] font-extrabold leading-[1.02] tracking-tight @xl:text-[3.4rem]">O imóvel certo, <span className="font-serif font-normal italic text-[var(--c2)]">sem complicação.</span></h3>
          <p className="mb-8 max-w-md text-sm leading-relaxed opacity-85">Casas e apartamentos selecionados, visitas no seu horário e acompanhamento até a entrega das chaves.</p>
          <div className="max-w-2xl rounded-2xl bg-white p-2 text-[var(--c3)] shadow-[0_30px_70px_rgba(0,0,0,.35)]">
            <div className="mb-2 flex gap-1 p-1">
              {(["Comprar", "Alugar"] as const).map((x) => (
                <button key={x} type="button" aria-pressed={negocio === x} onClick={() => setNegocio(x)}
                  className={`min-h-9 flex-1 cursor-pointer rounded-xl text-sm font-bold transition ${negocio === x ? "bg-[var(--c3)] text-white" : "hover:bg-black/5"}`}>{x}</button>
              ))}
            </div>
            <div className="grid gap-2 @xl:grid-cols-[1fr_1fr_auto]">
              <select value={tipo} onChange={(e) => setTipo(e.target.value as typeof tipo)} aria-label="Tipo de imóvel" className="min-h-11 cursor-pointer rounded-xl border border-black/10 px-3 text-sm">
                <option>Todos</option><option>Casa</option><option>Apartamento</option>
              </select>
              <select value={quartos} onChange={(e) => setQuartos(+e.target.value)} aria-label="Quartos" className="min-h-11 cursor-pointer rounded-xl border border-black/10 px-3 text-sm">
                <option value={0}>Qualquer nº de quartos</option><option value={2}>2+ quartos</option><option value={3}>3+ quartos</option><option value={4}>4+ quartos</option>
              </select>
              <button type="button" className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[var(--c2)] px-6 text-sm font-bold text-[var(--c3)]"><Search className="h-4 w-4" aria-hidden="true" />{lista.length} imóveis</button>
            </div>
          </div>
        </div>
      </header>

      {/* imóveis */}
      <section className="px-6 py-14">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[.3em] text-[var(--c2)]">Imóveis selecionados</p>
            <h4 className="text-3xl font-extrabold tracking-tight">Para {negocio.toLowerCase()} {tipo !== "Todos" ? `· ${tipo.toLowerCase()}` : ""}</h4>
          </div>
          <span className="text-sm opacity-60">{lista.length} resultado{lista.length === 1 ? "" : "s"}</span>
        </div>
        {lista.length === 0 && <p className="rounded-2xl bg-white p-6 text-sm opacity-70">Nenhum imóvel com esses filtros agora. Me chama que eu busco para você 😉</p>}
        <ul className="grid gap-5 @xl:grid-cols-2 @3xl:grid-cols-3">
          {lista.map((i) => {
            const on = fav.includes(i.id);
            return (
              <li key={i.id} className="group overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(11,37,69,.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,37,69,.15)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={i.foto} alt={i.titulo} fill sizes="(max-width: 768px) 90vw, 320px" className="object-cover transition duration-700 group-hover:scale-105" />
                  {i.selo && <span className="absolute left-3 top-3 rounded-full bg-[var(--c2)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--c3)]">{i.selo}</span>}
                  <button type="button" aria-label={on ? "Remover dos favoritos" : "Favoritar"} aria-pressed={on} onClick={() => setFav((f) => (on ? f.filter((x) => x !== i.id) : [...f, i.id]))}
                    className="absolute right-3 top-3 grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-white/90 transition hover:scale-110">
                    <Heart className={`h-4 w-4 ${on ? "fill-[#e11d48] text-[#e11d48]" : ""}`} aria-hidden="true" />
                  </button>
                  <span className="absolute bottom-3 left-3 rounded-lg bg-[var(--c3)]/90 px-3 py-1.5 text-sm font-extrabold text-white">{brl(i.preco)}{i.negocio === "Alugar" ? "/mês" : ""}</span>
                </div>
                <div className="p-5">
                  <p className="mb-1 flex items-center gap-1 text-xs opacity-60"><MapPin className="h-3.5 w-3.5" aria-hidden="true" />{i.bairro} · {i.tipo}</p>
                  <p className="mb-4 font-bold">{i.titulo}</p>
                  <div className="flex justify-between border-t border-black/5 pt-4 text-xs opacity-75">
                    <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" aria-hidden="true" />{i.q}</span>
                    <span className="flex items-center gap-1"><Bath className="h-4 w-4" aria-hidden="true" />{i.b}</span>
                    <span className="flex items-center gap-1"><Car className="h-4 w-4" aria-hidden="true" />{i.v}</span>
                    <span className="flex items-center gap-1"><Ruler className="h-4 w-4" aria-hidden="true" />{i.area} m²</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* simulador */}
      <section className="px-6 pb-14">
        <div className="grid overflow-hidden rounded-[28px] bg-[var(--c3)] text-white @3xl:grid-cols-[1.2fr_1fr]">
          <div className="p-7">
            <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.3em] text-[var(--c2)]"><Calculator className="h-4 w-4" aria-hidden="true" />Simulador</p>
            <h4 className="mb-6 text-3xl font-extrabold tracking-tight">Quanto fica a parcela?</h4>
            <label className="mb-5 flex flex-col gap-2 text-sm">
              <span className="flex justify-between"><span className="opacity-75">Valor do imóvel</span><b>{brl(valor)}</b></span>
              <input type="range" min={300000} max={3000000} step={50000} value={valor} onChange={(e) => setValor(+e.target.value)} className="cursor-pointer accent-[var(--c2)]" />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="flex justify-between"><span className="opacity-75">Entrada</span><b>{entrada}% · {brl(valor * entrada / 100)}</b></span>
              <input type="range" min={20} max={70} step={5} value={entrada} onChange={(e) => setEntrada(+e.target.value)} className="cursor-pointer accent-[var(--c2)]" />
            </label>
          </div>
          <div className="flex flex-col justify-center gap-4 bg-[var(--c2)] p-7 text-[var(--c3)]">
            <span className="text-[11px] font-bold uppercase tracking-[.25em] opacity-70">Parcela estimada</span>
            <span className="text-4xl font-extrabold">{brl(parcela)}<span className="text-base font-semibold">/mês</span></span>
            <span className="text-xs opacity-75">Estimativa em 360 meses. O valor real depende do banco e da sua análise de crédito.</span>
            <button type="button" className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--c3)] text-sm font-bold text-white"><MessageCircle className="h-4 w-4" aria-hidden="true" />Simular com o corretor</button>
          </div>
        </div>
      </section>

      {/* por que */}
      <section className="grid gap-4 px-6 pb-14 @3xl:grid-cols-3">
        {[[KeyRound, "Visitas no seu horário", "Inclusive à noite e aos fins de semana."], [ShieldCheck, "Documentação conferida", "Cada imóvel com matrícula e certidões checadas."], [MessageCircle, "Atendimento direto", "Você fala comigo, do início ao fim."]].map(([I, a, b]) => {
          const Icon = I as typeof KeyRound;
          return (
            <div key={a as string} className="rounded-3xl border border-[var(--c3)]/10 bg-white p-6">
              <Icon className="mb-3 h-6 w-6 text-[var(--c2)]" aria-hidden="true" />
              <p className="mb-1 font-bold">{a as string}</p><p className="text-sm opacity-65">{b as string}</p>
            </div>
          );
        })}
      </section>

      <footer className="bg-[var(--c3)] px-6 py-7 text-xs text-white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span><b className="tracking-wide">{NOME.toUpperCase()}</b><span className="ml-2 opacity-60">{CRECI}</span></span>
          <span className="flex items-center gap-1.5 opacity-70"><MapPin className="h-3.5 w-3.5" aria-hidden="true" />Balneário Camboriú/SC</span>
        </div>
      </footer>
    </DemoShell>
  );
}
