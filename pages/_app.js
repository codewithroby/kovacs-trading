import Layout from "@/components/layout";
import Head from "next/head";
import Script from "next/script";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="text/html; charset=UTF-8" name="Content-Type" />
        <meta
          property="og:site_name"
          content="Kovacs Trading - Your Guide to Successful Trading"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@robert_cfx" />
        <meta name="twitter:creator" content="@robert_cfx" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f3ba2f" />
        <meta name="msapplication-TileColor" content="#f3ba2f" />
        <meta name="theme-color" content="#f3ba2f" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_CODE}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_CODE}', {
            page_path: window.location.pathname,
        });

        `}
      </Script>
    </>
  );
}
