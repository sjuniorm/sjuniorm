import type { Metadata } from "next";
import Hub from "@/components/Hub";

export const metadata: Metadata = {
  title: "Stef Junior Mylle — Links",
  alternates: { canonical: "/links" },
};

export default function Links() {
  return <Hub showAbout={false} />;
}
