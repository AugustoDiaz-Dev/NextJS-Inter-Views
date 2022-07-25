import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";
import { AiFillHome } from 'react-icons/ai'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Inter-Views</title>
      </Head>
      <nav>
        <Link href="/">
          <AiFillHome size={32} color="var(--myBlue)" />
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
