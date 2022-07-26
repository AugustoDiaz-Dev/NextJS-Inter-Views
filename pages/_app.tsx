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
      <nav >
        <Link href="/">
          <>
            <p style={{ display: "flex", justifyContent: "end", alignItems: "center" }} className="navBtn">
              Home&nbsp;
              <AiFillHome size={32} color="var(--myBlue)" />
            </p>
          </>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
