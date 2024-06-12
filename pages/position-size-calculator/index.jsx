import TitleAndDescriptionComponent from "@/components/page/titleAndDescription";
import Head from "next/head";
import PositionSizeCalculatorComponent from "./positionSizeCalculator";

const metaData = {
  title: "Position Size Calculator - Kovacs Trading",
  description:
    "Calculate your trade's position size quickly and easily with our free online calculator. Our user-friendly tool simplifies the process of determining your trade's lot size, making trading more efficient and less stressful. Try it now!",
  thumbnail:
    "https://kovacs-trading.hermesnova.com/images/thumbnails/position-size-calculator.jpg",
};

export default function PositionSizeCalculatorPage() {
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
      <div className="px-4 sm:px-8 py-[7.5vh] sm:py-[10vh] max-w-5xl flex flex-col justify-center items-center">
        <TitleAndDescriptionComponent
          title="Position Size Calculator"
          description="Calculate your trade's position size quickly and easily with our free
          online calculator."
        />
        <PositionSizeCalculatorComponent />
      </div>
    </>
  );
}
