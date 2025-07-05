import { useEffect, useState, Suspense } from "react";
import "@/styles/globals.css";
import { Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store"
import Head from "next/head";
import Script from "next/script";
import 'react-toastify/dist/ReactToastify.css';
import Loader from "@/components/loader/Loader";
import { useRouter } from "next/router";
import { ThemeProvider } from 'next-themes';
import MetaData from "@/components/metadata-component/MetaData";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Show loader on route change start
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    // Cleanup event listeners
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  const googleMapApikey = process.env.NEXT_PUBLIC_MAP_API
  return (
    <div >
      {/* <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
      </Head> */}
      <MetaData pageName="/" title={`${process.env.NEXT_PUBLIC_META_TITLE}`} />
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${googleMapApikey}&libraries=places&loading=async`}
        async
        defer
      />
      <Provider store={store}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Suspense fallback={<Loader screen="full" />}>
            <PersistGate loading={null} persistor={persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Suspense>
        </ThemeProvider >
      </Provider>

    </div>

  );
}
