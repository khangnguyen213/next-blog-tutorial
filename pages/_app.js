import "../styles/globals.css";
import DefaultLayout from "../components/layout";

export default function App({ Component, pageProps }) {
  const isHome = Component.isHome || false;
  const Layout = Component.Layout || DefaultLayout;
  return (
    <Layout home={isHome}>
      <Component {...pageProps} />
    </Layout>
  );
}
