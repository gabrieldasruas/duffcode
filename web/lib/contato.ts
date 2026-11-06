// Contatos da DuffCODE, usados no site inteiro. Troque aqui e muda em todos os botões.
export const WHATSAPP = "554799468154"; // +55 47 9946-8154
export const EMAIL = "duffcode.dev@outlook.com";
export const INSTAGRAM = "https://www.instagram.com/byduff.dev";
export const INSTAGRAM_USER = "@byduff.dev";

/** Link do WhatsApp com a mensagem já escrita. */
export const waLink = (msg = "Olá! Vim pelo site da DuffCODE e quero um orçamento.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

/** Link de e-mail com assunto e corpo já preenchidos. */
export const mailLink = (assunto: string, corpo: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
