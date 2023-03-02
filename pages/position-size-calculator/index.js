import Head from "next/head";
import PositionSizeCalculatorComponent from "./positionSizeCalculator";

const metaData = {
  title: "Position Size Calculator - Kovacs Trading",
  description:
    "Calculate your trade's position size quickly and easily with our free online calculator. Our user-friendly tool simplifies the process of determining your trade's lot size, making trading more efficient and less stressful. Try it now!",
  thumbnail: "https://kovacstrading.com/images/brand/thumbnail.jpg",
};

export default function Home() {
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
      <div className="max-w-5xl px-8 sm:p-4 flex flex-col lg:flex-row justify-center items-center sm:space-x-4">
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="heading big">POSITION SIZE CALCULATOR</h1>
          <p className="mt-5 mb-7 text-lg sm:text-xl text-gray-800">
            Calculate your trade's position size quickly and easily with our
            free online calculator.
          </p>
        </div>
        <PositionSizeCalculatorComponent />
      </div>
    </>
  );
}
