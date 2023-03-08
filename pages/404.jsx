import Head from "next/head";
import Image from "next/image";
import TitleAndDescriptionComponent from "@/components/page/titleAndDescription";
import errorImage from "../public/images/illustrations/server-down.svg";

const metaData = {
  title: "Page Not Found - Kovacs Trading",
  description:
    "We're sorry, but the page you were looking for seems to have gone on an unscheduled vacation. Perhaps it's sipping cocktails on a beach somewhere, or maybe it just needed a break from all the internet traffic.",
  thumbnail: "https://kovacstrading.com/images/brand/thumbnail.jpg",
};

export default function Error404Page() {
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
      <div className="w-full max-w-7xl flex flex-col justify-center items-center">
        <Image
          src={errorImage}
          width={350}
          height="auto"
          alt="Error Image"
          className="pb-9"
        />
        <TitleAndDescriptionComponent
          title="Page Not Found"
          description={metaData.description}
        />
        <a
          href="/"
          alt="Go Back Home"
          className="creatorLinks uppercase font-semibold text-lg py-3"
        >
          Go Back Home
        </a>
      </div>
    </>
  );
}
