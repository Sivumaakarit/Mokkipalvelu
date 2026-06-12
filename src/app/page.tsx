import TarjousContent from "./tarjous/TarjousContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kotisivut yrittäjälle | Sivumaakarit",
  description: "Löydy Googlesta ja tekoälystä. Kotisivut yrittäjälle 100/100-suorituskyvyllä. Valmis nopeasti – ammattitaidolla.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <TarjousContent />;
}
