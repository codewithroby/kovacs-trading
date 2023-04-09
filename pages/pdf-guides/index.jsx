import Head from "next/head";
import TitleAndDescriptionComponent from "@/components/page/titleAndDescription";
import PdfCreatorCardComponentAvatarLeft, {
  PdfCreatorCardComponentAvatarRight,
  PdfCardComponentLeft,
  PdfCardComponentRight,
} from "@/pages/pdf-guides/pdfCreatorCard";

const metaData = {
  title: "PDF Guides - Kovacs Trading",
  description:
    "The best PDF guides created by experienced traders. Access their knowledge and expertise to take your trading to the next level. Start learning today!",
  thumbnail: "https://kovacstrading.com/images/thumbnails/pdf-guides.jpg",
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
      <div className="px-4 sm:px-8 py-[7.5vh] sm:py-[15vh] w-full max-w-7xl flex flex-col justify-center items-center">
        <TitleAndDescriptionComponent
          title="PDF Guides"
          description="The best PDF guides created by experienced traders. Access their knowledge and expertise to take your trading to the next level."
        />
        <div className="w-full flex flex-col gap-8">
          <PdfCreatorCardComponentAvatarLeft
            creator="Soulz"
            avatar="crypto-soulz"
            twitter="https://twitter.com/SoulzBTC"
            discord="https://discord.gg/umVkVHbcfe"
            count={3}
          >
            <PdfCardComponentRight
              title={`Soulz's Playbook`}
              description={`A complete trading guide, great especially for beginners, as
                  it teaches you the key points to becoming a profitable trader.`}
              url={`soulz-playbook-trading-material`}
            />
            <PdfCardComponentRight
              title={`Supply & Demand`}
              description={`A complete guide to supply and demand in trading.`}
              url={`soulz-supply-and-demand`}
            />
            <PdfCardComponentRight
              title={`Building A Diversified Crypto Portfolio`}
              description={`A complete guide on building a diversified Cryptocurrencies Portfolio.`}
              url={`soulz-building-a-diversified-portfolio`}
            />
          </PdfCreatorCardComponentAvatarLeft>
          <PdfCreatorCardComponentAvatarRight
            creator="Emperor👑"
            avatar="emperor-btc"
            twitter="https://twitter.com/EmperorBTC"
            telegram="https://t.me/EmperorbtcTA"
            count={4}
          >
            <PdfCardComponentLeft
              title={`Trading For Extreme Beginners`}
              description={`Created specifically for absolute beginners, this PDF file is
                  useful because it contains learning materials that will help
                  you learn the basics of trading.`}
              url={`emperorbtc-trading-for-extreme-beginners`}
            />

            <PdfCardComponentLeft
              title={`Support and Resistance MasterClass`}
              description={`This is the most comprehensive real-world guide to Support and
                  Resistance. With real world examples from Bitcoin price
                  movements.`}
              url={`emperorbtc-support-and-resistance-masterclass`}
            />

            <PdfCardComponentLeft
              title={`Bitcoin Trading Masterclass (Part 1)`}
              description={`This is the most comprehensive real-world guide to Support and
                  Resistance. With real world examples from Bitcoin price
                  movements.`}
              url={`emperorbtc-trading-bitcoin-masterclass-part-one`}
            />

            <PdfCardComponentLeft
              title={`Bitcoin Trading Masterclass (Part 2)`}
              description={`This is the most comprehensive real-world guide to Support and
                  Resistance. With real world examples from Bitcoin price
                  movements.`}
              url={`emperorbtc-trading-bitcoin-masterclass-part-two`}
            />
          </PdfCreatorCardComponentAvatarRight>
        </div>
      </div>
    </>
  );
}
