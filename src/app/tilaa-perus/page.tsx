import TilaaPerusContent from "./TilaaPerusContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tilaa Perus-paketti | Sivumaakarit",
  description: "Tilaa yrittäjän Perus-kotisivupaketti. Me hoidamme kaiken tekniikan, ylläpidon ja päivitykset avaimet käteen -periaatteella.",
  alternates: {
    canonical: "/tilaa-perus",
  },
};

export default function Page() {
  return <TilaaPerusContent />;
}
