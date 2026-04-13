import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="min-h-screen bg-[#050508] text-zinc-100 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
