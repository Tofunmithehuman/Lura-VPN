import "@/styles/globals.css";
import Layout from "@/layout/Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return <Component {...pageProps} />;
}
