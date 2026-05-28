"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export function Canonical() {
    const pathname = usePathname();
    const canonicalUrl = `${siteConfig.url}${pathname}`;

    return <link rel="canonical" href={canonicalUrl} />;
}
