import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import Navbar from "@/src/components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Inter-Views</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
