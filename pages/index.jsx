import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logoFit from "../public/images/brand/logo-fit-dark.png";
import biblioPhile from "../public/images/illustrations/bibliophile.svg";
import teamAvatarSvg from "../public/images/illustrations/educator.svg";
import folderFilesSvg from "../public/images/illustrations/folder-files.svg";
import cryptoExchangeSvg from "../public/images/illustrations/crypto-exchange.svg";

const metaData = {
  title: "Kovacs Trading - Your Guide to Successful Trading",
  description:
    "Learn how to trade for free with our comprehensive tutorials and access useful tools that enhance your trading experience. Our platform provides everything you need to become a successful trader.",
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
      <section className="w-full px-4 sm:px-8 py-[10vh] sm:py-[15vh] flex flex-col items-center justify-center max-w-7xl">
        <Image
          src={logoFit}
          alt="Kovacs Trading Logo"
          width={300}
          height="auto"
          priority={true}
        />
        <p className="text-center mt-10 text-lg sm:text-xl text-gray-800 pb-10">
          Learn how to trade for free with our comprehensive tutorials and
          access useful tools that enhance your trading experience. <br />
          Our platform provides everything you need to become a successful
          trader.
        </p>
        <a
          className="btnLight text-lg font-bold px-6 py-3"
          href="#startLearning"
        >
          GET STARTED
        </a>
      </section>
      <section
        className="w-full py-[10vh] sm:py-[15vh] bg-white flex justify-center"
        id="startLearning"
      >
        <div className="flex-1 px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-center max-w-7xl">
          <Image
            src={folderFilesSvg}
            alt="PDF Files Illustration"
            width={300}
            height="auto"
            className="mb-8 lg:mb-0"
          />
          <div className="lg:pl-12 flex-1 flex flex-col text-center lg:text-left">
            <h1 className="headingDark big uppercase">PDF Guides</h1>
            <span className="w-32 my-6 border-b-2 border-kt-yellow self-center lg:self-start"></span>
            <p className="mb-6 text-lg sm:text-xl text-gray-800">
              The best PDF guides created by experienced traders. Access their
              knowledge and expertise to take your trading to the next level.
            </p>
            <Link
              href="/pdf-guides"
              className="self-center lg:self-start max-w-[180px] btnLight px-6 py-3 font-bold"
            >
              PDF COLLECTION
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-[10vh] sm:py-[15vh] flex justify-center">
        <div className="flex-1 px-4 sm:px-8 flex flex-col-reverse lg:flex-row items-center justify-center max-w-7xl">
          <div className="lg:pr-12 flex-1 flex flex-col text-center lg:text-right">
            <h1 className="headingDark big uppercase">Best Trading Creators</h1>
            <span className="w-32 my-6 border-b-2 border-kt-yellow self-center lg:self-end"></span>
            <p className="mb-6 text-lg sm:text-xl text-gray-800">
              We conducted extensive research on various social media and
              content sharing platforms, and discovered some outstanding
              creators who generously share their extensive trading knowledge
              and experience without any cost.
            </p>
            <Link
              href="/best-trading-creators"
              className="self-center lg:self-end max-w-[180px] btnLight px-6 py-3 font-bold"
            >
              CREATORS LIST
            </Link>
          </div>
          <Image
            src={teamAvatarSvg}
            alt="Trading Creators Illustration"
            width={300}
            height="auto"
            className="mb-8 lg:mb-0"
          />
        </div>
      </section>
      <section
        className="w-full py-[10vh] sm:py-[15vh] bg-white flex justify-center"
        id="startLearning"
      >
        <div className="flex-1 px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-center max-w-7xl">
          <Image
            src={biblioPhile}
            alt="Trading Terminology Illustration"
            width={200}
            height="auto"
            className="mb-8 lg:mb-0"
          />
          <div className="lg:pl-12 flex-1 flex flex-col text-center lg:text-left">
            <h1 className="headingDark big uppercase">Trading Terminology</h1>
            <span className="w-32 my-6 border-b-2 border-kt-yellow self-center lg:self-start"></span>
            <p className="mb-6 text-lg sm:text-xl text-gray-800">
              Learning the terminology of trading can help you understand the
              specific terms used in trading, which can improve your
              comprehension of trading materials and communication with other
              traders.
            </p>
            <Link
              href="/trading-terminology"
              className="self-center lg:self-start max-w-[140px] btnLight px-6 py-3 font-bold"
            >
              LEARN NOW
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-[10vh] sm:py-[15vh] flex justify-center">
        <div className="flex-1 px-4 sm:px-8 flex flex-col-reverse lg:flex-row items-center justify-center max-w-7xl">
          <div className="lg:pr-12 flex-1 flex flex-col text-center lg:text-right">
            <h1 className="headingDark big uppercase">Best Crypto Exchanges</h1>
            <span className="w-32 my-6 border-b-2 border-kt-yellow self-center lg:self-end"></span>
            <p className="mb-6 text-lg sm:text-xl text-gray-800">
              You are starting your trading journey but you are not sure which
              crypto exchange to use? After testing over 20 crypto exchanges,
              here are the top 3 picks from us.
            </p>
            <Link
              href="/best-crypto-exchange"
              className="self-center lg:self-end max-w-[170px] btnLight px-6 py-3 font-bold"
            >
              REGISTER NOW
            </Link>
          </div>
          <Image
            src={cryptoExchangeSvg}
            alt="Crypto Exchanges Illustration"
            width={300}
            height="auto"
            className="mb-8 lg:mb-0"
          />
        </div>
      </section>
    </>
  );
}
