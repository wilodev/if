import type { AppProps } from "next/app";
import "../../styles/globals.css";
// Importamos lo layouts
import { Landing } from "@/layouts/Landing";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Landing>
      <Component {...pageProps} />
    </Landing>
  );
}

export default MyApp;
