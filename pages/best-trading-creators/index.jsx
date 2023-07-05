import Head from "next/head";
import TitleAndDescriptionComponent from "@/components/page/titleAndDescription";
import TradingCreatorCardComponent from "@/pages/best-trading-creators/tradingCreatorCard";

const metaData = {
  title: "Best Trading Creators - Kovacs Trading",
  description:
    "Learn more about trading from these creators who post daily about their trading experiences.",
  thumbnail:
    "https://kovacs-trading.robycodes.com/images/thumbnails/best-trading-creators.jpg",
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
      <div className="px-4 sm:px-8 py-[7.5vh] sm:py-[15vh] w-full max-w-7xl flex flex-col justify-center items-center">
        <TitleAndDescriptionComponent
          title="Best Trading Creators"
          description="Learn more about trading from these creators who post daily about their trading experiences."
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:auto-rows-fr">
          <TradingCreatorCardComponent
            creator="Emperor👑"
            avatar="emperor-btc"
            description="EmperorBTC has created a large, comprehensive collection of free tutorials about technical analysis, risk management, and trading tips. Personally, I learned most of what I know about trading thanks to his content."
            twitter="https://twitter.com/EmperorBTC"
            telegram="https://t.me/EmperorbtcTA"
          />
          <TradingCreatorCardComponent
            creator="Muro"
            avatar="muro-crypto"
            description="Muro is an early Crypto Trader who has uploaded numerous YouTube videos covering technical analysis, market updates, risk management, and other helpful trading topics. He also shares his personal trades daily, giving updates whenever the market status changes."
            twitter="https://twitter.com/MuroCrypto"
            youtube="https://www.youtube.com/c/murocrypto"
          />
          <TradingCreatorCardComponent
            creator="CryptoSoulz"
            avatar="crypto-soulz"
            description="CryptoSoulz is a Crypto Trader who has made a helpful Trading PDF specifically designed for beginners. He provides both free and VIP trading material. You can join his expanding Discord community 'Soulz Crime Family' to talk and connect with like-minded people."
            twitter="https://twitter.com/SoulzBTC"
            discord="https://discord.gg/umVkVHbcfe"
          />
          <TradingCreatorCardComponent
            creator="Bloodgood"
            avatar="bloodgood"
            description="Bloodgood is a Crypto Trader who shares valuable advice to help you become a better trader. With a ton of information available, ranging from technical analysis to managing emotions and risks, his content will help you enhance your trading skills significantly."
            twitter="https://twitter.com/bloodgoodBTC"
            telegram="https://t.me/bloodgoodBTC"
            discord="https://discord.gg/bloodgang"
          />
          <TradingCreatorCardComponent
            creator="Crypto Chase"
            avatar="crypto-chase"
            description="Crypto Chase is a knowledgeable Crypto Trader who shares clearly comunicated videos on technical analysis, emotions handling, risk management and market updates to help traders of all levels enhance their skills and understanding."
            twitter="https://twitter.com/Crypto_Chase"
            youtube="https://www.youtube.com/@CryptoChase"
          />
          <TradingCreatorCardComponent
            creator="Koroush AK"
            avatar="koroush-ak"
            description="Koroush AK, a successful Crypto Trader, offers simplified and free Trading and Investing guides to help traders and investors profit more with less effort. His clear and concise approach makes the complex world of trading accessible to all. You can follow his advice for a greater success in the market."
            twitter="https://twitter.com/KoroushAK"
            telegram="https://t.me/koroushakcrypto"
          />
        </div>
      </div>
    </>
  );
}
