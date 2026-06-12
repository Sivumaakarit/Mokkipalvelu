import TilaaPerusContent from "./TilaaPerusContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tilaa Perus-paketti | Sivumaakarit",
  description: "Tilaa yrittäjän Perus-kotisivupaketti. Me hoidamme kaiken tekniikan, ylläpidon ja päivitykset avaimet käteen -periaatteella.",
  alternates: {
    canonical: "/tilaa-perus",
  },
  other: {
    "datePublished": "2026-05-28T09:00:00Z",
    "dateModified": new Date().toISOString(),
  }
};

export default function Page() {
  return <TilaaPerusContent />;
}
