import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "love film",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antiliased`}
      >
        {children}
      </body>
    </html>
  );
}
