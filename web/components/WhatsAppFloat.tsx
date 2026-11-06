import { WhatsAppIcon } from "./BrandIcons";
import { waLink } from "@/lib/contato";

/** Botão flutuante de WhatsApp, fixo no canto da tela. */
export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-[#25d366] p-3.5 text-[#062b14] shadow-[0_12px_34px_rgba(37,211,102,.45)] transition hover:-translate-y-0.5 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366] opacity-30" aria-hidden="true" />
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden pr-1.5 text-sm font-bold group-hover:inline">Falar no WhatsApp</span>
    </a>
  );
}
