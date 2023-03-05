import Head from "next/head";
import Link from "next/link";
import TitleAndDescriptionComponent from "@/components/page/titleAndDescription";
import TradingCreatorCardComponent from "@/pages/best-trading-creators/tradingCreatorCard";

const metaData = {
  title: "Best Trading Creators - Kovacs Trading",
  description:
    "Learn more about trading from these creators who post daily about their trading experiences.",
  thumbnail:
    "https://kovacstrading.com/images/thumbnails/best-trading-creators.jpg",
};

export default function BestTradingCreatorsPage() {
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
          title="Best Trading Creators"
          description="Learn more about trading from these creators who post daily about their trading experiences."
        />
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:auto-rows-fr">
          <TradingCreatorCardComponent
            creator="EmperorBTC"
            avatar="emperor-btc"
            description="EmperorBTC has created a large, comprehensive collection of free tutorials about technical analysis, risk management, and trading tips. Personally, I learned most of what I know about trading thanks to his content."
            twitter="https://twitter.com/EmperorBTC"
            telegram="https://t.me/EmperorbtcTA"
          />
          <TradingCreatorCardComponent
            creator="Muro"
            avatar="muro-crypto"
            description="Muro is a crypto trader who has uploaded numerous YouTube videos covering technical analysis, market updates, risk management, and other helpful trading topics. He also shares his daily trades to assist you on your trading journey."
            twitter="https://twitter.com/MuroCrypto"
            youtube="https://www.youtube.com/c/murocrypto"
          />
          <TradingCreatorCardComponent
            creator="CryptoSoulz"
            avatar="crypto-soulz"
            description="CryptoSoulz is a cryptocurrency trader who has made a helpful Trading PDF specifically designed for beginners. He provides both free and VIP trading materials. You can explore his content and join the expanding Discord community 'Soulz Crime Family' to gain more knowledge about trading."
            twitter="https://twitter.com/_Soulz"
            discord="https://discord.gg/umVkVHbcfe"
          />
        </div>
      </div>
    </>
  );
}
