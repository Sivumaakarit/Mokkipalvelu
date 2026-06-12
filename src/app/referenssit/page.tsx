import ReferenssitContent from "./ReferenssitContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenssit ja työnäytteet | Sivumaakarit",
  description: "Katso tekemämme kotisivut ja referenssit. Suunnittelemme ja toteutamme korkealaatuisia, nopeita ja selkeitä nettisivuja yrittäjille.",
  alternates: {
    canonical: "/referenssit",
  },
};

export default function Page() {
  return <ReferenssitContent />;
}
