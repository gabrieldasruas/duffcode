export type Template = {
  slug: string;
  nome: string;
  categoria: string;
  descricao: string;
  tags: string[];
  /** [fundo, destaque, texto] do modelo */
  cores: [string, string, string];
  variante: "split" | "center" | "grid" | "banner" | "menu";
  secoes: string[];
};

export const templates: Template[] = [
  {
    slug: "medico",
    nome: "Médico",
    categoria: "Saúde",
    descricao: "Site premium para médicos: tratamentos, primeira consulta, agendamento pelo WhatsApp, depoimentos e convênios.",
    tags: ["Agendamento", "WhatsApp", "Depoimentos"],
    cores: ["#f6f8fb", "#1f4fd8", "#0b1b34"],
    variante: "split",
    secoes: [
      "Hero com foto do médico e agendamento pelo WhatsApp",
      "Tratamentos por área, com exames e cuidados",
      "Como funciona a primeira consulta",
      "Sobre o médico, com CRM e formação",
      "Depoimentos e nota no Google",
      "Agendamento: tipo, convênio, dia e horário",
      "Dúvidas frequentes e localização",
    ],
  },
  {
    slug: "psicologo",
    nome: "Psicólogo",
    categoria: "Saúde",
    descricao: "Site acolhedor para psicólogos: temas atendidos, como funcionam as sessões, online ou presencial e agendamento pelo WhatsApp.",
    tags: ["Online e presencial", "Agendamento", "Sigilo"],
    cores: ["#f6f1ea", "#6f8a5e", "#2f2a24"],
    variante: "split",
    secoes: ["Hero acolhedor com foto", "Temas atendidos (ansiedade, luto…)", "Como funcionam as sessões", "Sobre a psicóloga e CRP", "Agendamento online ou presencial", "Dúvidas frequentes"],
  },
  {
    slug: "advogado",
    nome: "Advogado",
    categoria: "Serviços",
    descricao: "Site sóbrio e informativo para advocacia: áreas de atuação, como funciona o atendimento, equipe, artigos e agendamento de consulta.",
    tags: ["Áreas de atuação", "Artigos", "Consulta"],
    cores: ["#10151a", "#b08d57", "#ece6da"],
    variante: "split",
    secoes: ["Hero com biblioteca", "Áreas de atuação em abas", "Como funciona o atendimento", "O escritório e a equipe", "Artigos informativos", "Agendar consulta e dúvidas"],
  },
  {
    slug: "corretor",
    nome: "Corretor de Imóveis",
    categoria: "Imóveis",
    descricao: "Vitrine de imóveis com busca e filtros, favoritos, simulador de parcelas e contato direto pelo WhatsApp.",
    tags: ["Busca de imóveis", "Simulador", "WhatsApp"],
    cores: ["#f4f6f9", "#e3b04b", "#0b2545"],
    variante: "banner",
    secoes: ["Hero com busca (comprar ou alugar)", "Imóveis com filtros e favoritos", "Simulador de parcelas", "Diferenciais do corretor", "CRECI e contato"],
  },
  {
    slug: "barbearia",
    nome: "Barbearia",
    categoria: "Beleza",
    descricao: "Barbearia clássica: hero com foto, serviços com foto, agendamento com barbeiro e horário, e a história da casa.",
    tags: ["Agendamento", "Serviços", "WhatsApp"],
    cores: ["#111111", "#1f6b60", "#f2efe9"],
    variante: "split",
    secoes: ["Hero com foto em tela cheia", "Serviços com foto e preço", "Agendamento: serviços, barbeiro e horário", "A casa, com números", "Endereço e horários"],
  },
  {
    slug: "transportadora",
    nome: "Transportadora",
    categoria: "Logística",
    descricao: "Duff Transportes: hero com foto da frota, rastreio de carga, cotação de frete, soluções logísticas e filiais.",
    tags: ["Cotação", "Rastreio", "Filiais"],
    cores: ["#0a0d12", "#ff6a13", "#f4f6f9"],
    variante: "banner",
    secoes: ["Hero com foto da frota e rastreio", "Números da operação", "Soluções logísticas sob medida", "Cotação de frete online", "Certificações e filiais"],
  },
  {
    slug: "joalheria",
    nome: "Joalheria",
    categoria: "Varejo",
    descricao: "Loja de joias no estilo das grandes marcas: vitrine com filtros, favoritos, sacola, coleções e presentes.",
    tags: ["Vitrine", "Sacola", "Coleções"],
    cores: ["#fbf6f4", "#b4636e", "#1e1a1a"],
    variante: "center",
    secoes: ["Hero editorial com foto", "Benefícios (frete, troca, garantia)", "Vitrine com filtros e favoritos", "Sacola de compras", "Presentes e coleções", "Newsletter"],
  },
  {
    slug: "clinica",
    nome: "Clínica Odontológica",
    categoria: "Saúde",
    descricao: "Clínica premium: avaliação gratuita, tratamentos com foto, convênios, depoimentos e agendamento pelo WhatsApp.",
    tags: ["Avaliação", "Convênios", "Agendamento"],
    cores: ["#f5fafa", "#0d9488", "#0b2530"],
    variante: "grid",
    secoes: ["Hero com foto e avaliação gratuita", "Convênios aceitos", "Tratamentos em abas", "Números da clínica", "Depoimentos", "Agendamento pelo WhatsApp"],
  },
  {
    slug: "restaurante",
    nome: "Restaurante",
    categoria: "Alimentação",
    descricao: "Restaurante elegante: cardápio com fotos e pedido para delivery, ambiente, reserva de mesa e horários.",
    tags: ["Cardápio", "Reservas", "Delivery"],
    cores: ["#120f0d", "#c9a465", "#f5ede3"],
    variante: "menu",
    secoes: ["Hero com prato do dia", "Cardápio com fotos e pedido", "Ambiente e eventos", "Reserva de mesa", "Endereço e horários"],
  },
];

export const categorias = ["Todos", ...Array.from(new Set(templates.map((t) => t.categoria)))];
