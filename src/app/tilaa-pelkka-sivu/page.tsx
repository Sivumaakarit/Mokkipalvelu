import TilaaPelkkaSivuContent from "./TilaaPelkkaSivuContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tilaa Pelkkä Sivu | Sivumaakarit",
  description: "Tilaa yrittäjän kotisivu ilman kuukausittaista ylläpitosopimusta. Saat valmiin sivuston nopeasti avaimet käteen -toteutuksena.",
  alternates: {
    canonical: "/tilaa-pelkka-sivu",
  },
};

export default function Page() {
  return <TilaaPelkkaSivuContent />;
}
