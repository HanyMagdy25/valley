import "../styles/globals.css";

import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["latin"],
  variable: "--font-cairo",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${cairo.variable} font-cairo`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
