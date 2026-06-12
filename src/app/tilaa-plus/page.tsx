import TilaaPlusContent from "./TilaaPlusContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tilaa Plus-paketti | Sivumaakarit",
  description: "Tilaa yrittäjän laaja Plus-kotisivupaketti. Hoidamme sivustosi jatkuvan optimoinnin, ylläpidon ja päivitykset avaimet käteen -periaatteella.",
  alternates: {
    canonical: "/tilaa-plus",
  },
  other: {
    "datePublished": "2026-05-28T09:00:00Z",
    "dateModified": new Date().toISOString(),
  }
};

export default function Page() {
  return <TilaaPlusContent />;
}
