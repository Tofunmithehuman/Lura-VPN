import { Html, Head, Main, NextScript } from "next/document";

export default function Document() { 
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Domine:wght@500;600;700&family=Red+Hat+Text:wght@500;600;700&family=Rubik:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/recoleta" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/axiforma" rel="stylesheet" />
        <link
          href="https://fonts.cdnfonts.com/css/anglecia-pro-display"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
