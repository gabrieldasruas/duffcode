import type { Metadata } from "next";
import FloreSer from "@/components/prototipos/FloreSer";

// Protótipo enviado só para a cliente: fora da biblioteca e fora do Google.
export const metadata: Metadata = {
  title: "FloreSer · Psicologia & Cuidado Humano (protótipo)",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <FloreSer />;
}
