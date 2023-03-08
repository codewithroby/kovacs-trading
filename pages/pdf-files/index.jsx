import Head from "next/head";
import TitleAndDescriptionComponent from "@/components/page/titleAndDescription";
import PdfFileCardComponent from "@/pages/pdf-files/pdfFileComponentCard";

const metaData = {
  title: "PDF Files - Kovacs Trading",
  description:
    "The best PDF files created by experienced traders. Access their knowledge and expertise to take your trading to the next level. Start learning today!",
  thumbnail: "https://kovacstrading.com/images/thumbnails/pdf-files.jpg",
};

export default function PdfFilesPage() {
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
        <TitleAndDescriptionComponent
          title="PDF Files"
          description="The best PDF files created by experienced traders. Access their knowledge and expertise to take your trading to the next level."
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:auto-rows-fr">
          <PdfFileCardComponent
            title="Soulz's Playbook - Trading Manual"
            description="This PDF contains a complete trading guide with basic and advanced lessons. The vocabulary used throughout the document is easy to understand, thanks to the clear and concise language used in the initial foundation."
            link="/files/pdf/soulzs-playbook-trading-material.pdf"
            creator="https://twitter.com/_Soulz"
          ></PdfFileCardComponent>
        </div>
      </div>
    </>
  );
}
