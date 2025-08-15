import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

import ThemeProvider from "@/app/ui/ThemeProvider";

export const metadata: Metadata = {
  title: {
    template: "%s | Aljaffarsyah",
    default: "Aljaffarsyah",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
