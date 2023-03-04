import Head from "next/head";
import Image from "next/image";
import logoFit from "../public/images/brand/logo-fit-dark.png";

const metaData = {
  title: "Kovacs Trading - Your Guide to Successful Trading",
  description:
    "Learn how to trade for free with our comprehensive tutorials and access useful tools that enhance your trading experience. Our platform provides everything you need to become a successful trader. Start trading now!",
  thumbnail: "https://kovacstrading.com/images/brand/thumbnail.jpg",
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.thumbnail} />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.thumbnail} />
      </Head>
      <div className="sm:min-h-[60vh] flex flex-col items-center justify-center max-w-7xl">
        <Image
          src={logoFit}
          alt="Kovacs Trading Logo"
          width={300}
          height="auto"
          priority={true}
        />
        <p className="text-center mt-10 text-xl sm:text-2xl text-gray-800">
          Learn how to trade for free with our comprehensive tutorials and
          access useful tools that enhance your trading experience. <br />
          Our platform provides everything you need to become a successful
          trader.
        </p>
      </div>
    </>
  );
}
