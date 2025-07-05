import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" version={process.env.NEXT_PUBLIC_VERSION} >
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
      </Head>
      {/* <Script src={`https://maps.googleapis.com/maps/api/js?key=${googleMapApikey}&libraries=places`}
        async
        defer /> */}

      <body className="antialiased !pointer-events-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
