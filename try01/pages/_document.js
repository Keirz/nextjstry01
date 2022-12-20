import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
      <meta charset="utf-8" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" 
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
          <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet" />
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <NextScript src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous" />
      </body>
    </Html>
  );
}