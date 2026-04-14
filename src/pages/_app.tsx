import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const LiquidCursor = dynamic(() => import("@/components/liquid-cursor"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LiquidCursor />
      <Component {...pageProps} />
    </>
  );
}
