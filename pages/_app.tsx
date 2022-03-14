import Link from "next/link";
import "../styles/globals.css";
// import type { AppProps } from 'next/app'
import type { AppPropsType, LayoutPropsType } from "../types/App.type";

const EmptyLayout = ({ children }: LayoutPropsType) => <>{children}</>;

// function MyApp({ Component, pageProps }: AppProps) {
function MyApp({ Component, pageProps }: AppPropsType) {
  const Layout = Component.Layout || EmptyLayout;

  return (
    <>
      <h1>Demo Navigation</h1>
      <nav>
        <Link href="/">
          <a>Next.js Home</a>
        </Link>
        <Link href="/file-based-routing">
          <a>File Based Routing</a>
        </Link>
        <Link href="/pre-rendering">
          <a>Pre-rendering</a>
        </Link>
        <Link href="/api-routes">
          <a>API routes</a>
        </Link>
      </nav>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
