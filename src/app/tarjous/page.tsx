import TarjousContent from "./TarjousContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maksuton arvio ja tarjous kotisivuista | Sivumaakarit",
  description: "Pyydä maksuton arvio tai tarjous nettisivuista. Rakennamme yrittäjälle myyvät ja nopeat kotisivut avaimet käteen -periaatteella.",
  alternates: {
    canonical: "/tarjous",
  },
  other: {
    "datePublished": "2026-05-28T09:00:00Z",
    "dateModified": new Date().toISOString(),
  }
};

export default function Page() {
  return <TarjousContent />;
}
