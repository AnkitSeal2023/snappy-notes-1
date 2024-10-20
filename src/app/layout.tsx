import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.scss";
import "../styles/tiptap.scss";

import { ThemeProvider } from "~/components/providers/theme-provider";
import { ClerkClientProvider } from "~/components/providers/clerk-provider";

const poppins = Poppins({
  weight: ["300", "400", "600", "800"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/S_Logo.png",
        href: "/icons/S_Logo.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/S_Logo_dark.png",
        href: "/icons/S_Logo_dark.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkClientProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className="scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full scrollbar-none scrollbar-track-transparent"
      >
        <body className={poppins.className}>
          <ThemeProvider storageKey="snappy-theme">
            <main className="flex bg-default min-w-screen min-h-screen">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkClientProvider>
  );
}
