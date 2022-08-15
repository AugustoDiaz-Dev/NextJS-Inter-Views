import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Inter-Views</title>
      </Head>
      <Navbar />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          }
        }}
      >
        <Component {...pageProps} />
      </motion.div>
      <Footer />
    </div>
  );
}

export default MyApp;
