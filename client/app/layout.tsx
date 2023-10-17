import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foo Foo",
  description: "Note taking app.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.webp",
        href: "/logo.webp",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo.webp",
        href: "/logo.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="foo-foo-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
