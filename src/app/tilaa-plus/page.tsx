import TilaaPlusContent from "./TilaaPlusContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tilaa Plus-paketti | Sivumaakarit",
  description: "Tilaa yrittäjän laaja Plus-kotisivupaketti. Hoidamme sivustosi jatkuvan optimoinnin, ylläpidon ja päivitykset avaimet käteen -periaatteella.",
  alternates: {
    canonical: "/tilaa-plus",
  },
};

export default function Page() {
  return <TilaaPlusContent />;
}
