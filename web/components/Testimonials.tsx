"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHead from "./SectionHead";

// Textos de EXEMPLO até chegarem depoimentos de clientes reais.
// Quando trocar por depoimentos verdadeiros, remova o aviso "ilustrativos" lá embaixo.
const depoimentos = [
  { nome: "Dra. Mariana Lopes", cargo: "Dermatologista", txt: "O site ficou com a cara do consultório. As pacientes já chegam sabendo do procedimento e agendam direto pelo WhatsApp." },
  { nome: "Rafael Costa", cargo: "Dono de barbearia", txt: "A agenda que vivia no WhatsApp agora se resolve sozinha. O cliente escolhe o serviço, o barbeiro e o horário." },
  { nome: "Juliana Prado", cargo: "Joalheria autoral", txt: "Minhas peças finalmente têm uma vitrine à altura. O site é rápido e lindo no celular, que é onde minhas clientes compram." },
  { nome: "Marcos Ribeiro", cargo: "Gestor de transportadora", txt: "A cotação online acabou com as ligações para pedir preço. Ganhamos tempo e o cliente recebe o valor na hora." },
  { nome: "Camila Andrade", cargo: "Restaurante italiano", txt: "Cardápio com foto, reserva e pedido no mesmo lugar. O movimento de sexta à noite agora começa pelo site." },
  { nome: "Dr. Paulo Mendes", cargo: "Clínica odontológica", txt: "Entrega no prazo e atenção aos detalhes. A avaliação gratuita pelo site virou nossa principal porta de entrada." },
];
const iniciais = (n: string) => n.replace(/^(Dra?\.)\s/, "").split(" ").map((p) => p[0]).slice(0, 2).join("");

export default function Testimonials() {
  const [posBruta, setPos] = useState(0);
  const [porTela, setPorTela] = useState(3);
  const max = Math.max(0, depoimentos.length - porTela);
  const pos = Math.min(posBruta, max); // ao alargar a tela, não passa do último grupo

  useEffect(() => {
    const ajusta = () => setPorTela(window.innerWidth < 768 ? 1 : window.innerWidth < 1100 ? 2 : 3);
    ajusta();
    window.addEventListener("resize", ajusta);
    return () => window.removeEventListener("resize", ajusta);
  }, []);
  const vai = (d: number) => setPos(pos + d < 0 ? max : pos + d > max ? 0 : pos + d);

  return (
    <section id="depoimentos" className="mx-auto max-w-7xl scroll-mt-16 px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto mb-10 max-w-2xl text-center [&>div]:mx-auto">
        <SectionHead eyebrow="depoimentos" title="O que dizem sobre a DuffCODE" sub="Negócios de verdade, sites que trabalham por eles." />
      </div>

      <div className="relative">
        <button type="button" onClick={() => vai(-1)} aria-label="Depoimento anterior"
          className="absolute -left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-line bg-surface transition hover:border-accent sm:grid lg:-left-5">
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button type="button" onClick={() => vai(1)} aria-label="Próximo depoimento"
          className="absolute -right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-line bg-surface transition hover:border-accent sm:grid lg:-right-5">
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="overflow-hidden">
          <ul className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${(pos * 100) / porTela}%)` }}>
            {depoimentos.map((d) => (
              <li key={d.nome} className="shrink-0 px-2.5" style={{ width: `${100 / porTela}%` }}>
                <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition hover:border-accent/50">
                  <Quote className="mb-4 h-8 w-8 text-accent/60" aria-hidden="true" />
                  <span className="mb-4 flex gap-1 text-accent-2" aria-label="5 estrelas">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </span>
                  <blockquote className="mb-7 flex-1 leading-relaxed text-text/85">&ldquo;{d.txt}&rdquo;</blockquote>
                  <figcaption className="flex items-center gap-3.5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-[#a855f7] text-sm font-bold text-white">{iniciais(d.nome)}</span>
                    <span>
                      <span className="block font-semibold">{d.nome}</span>
                      <span className="block text-sm text-muted">{d.cargo}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: max + 1 }, (_, i) => (
            <button key={i} type="button" onClick={() => setPos(i)} aria-label={`Ir para o grupo ${i + 1}`}
              className={`h-2.5 cursor-pointer rounded-full transition-all ${i === pos ? "w-8 bg-accent" : "w-2.5 bg-white/20 hover:bg-white/40"}`} />
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-muted/70">Depoimentos ilustrativos</p>
      </div>
    </section>
  );
}
