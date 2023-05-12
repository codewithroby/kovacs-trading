import Head from "next/head";
import Link from "next/link";
import TitleAndDescriptionComponent from "@/components/page/titleAndDescription";
import CryptoExchangeCardComponent from "@/pages/best-crypto-exchange/cryptoExchangeCard";

const metaData = {
  title: "Best Crypto Exchange - Kovacs Trading",
  description:
    "You are starting your trading journey but you are not sure which crypto exchange to use? After testing over 20 crypto exchanges, here are the top 3 picks from us.",
  thumbnail:
    "https://kovacstrading.com/images/thumbnails/best-crypto-exchange.jpg",
};

export default function BestCryptoExchangePage() {
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
          title="Best Crypto Exchange"
          description={`You are starting your trading journey but you are not sure which crypto exchange to use? After testing over 20 crypto exchanges, here are the top 3 picks from us. By clicking "Create Account" and using our Referral Code, you will support this project and benefit from reduced Transaction Fees on your trades.`}
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:auto-rows-fr">
          <CryptoExchangeCardComponent
            logo="bybit-logo"
            link="https://www.bybit.com/invite?ref=JOKW3R"
          >
            <b>
              <a
                href="https://www.bybit.com/invite?ref=JOKW3R"
                target="_blank"
                className="underline text-kt-yellow hover:text-kt-darkYellow"
              >
                Bybit
              </a>
            </b>{" "}
            is a great exchange to use because it often lists newly released
            coins, and it has very low transaction fees.
          </CryptoExchangeCardComponent>
          <CryptoExchangeCardComponent
            logo="mexc-logo"
            link="https://www.mexc.com/register?inviteCode=1bDFL"
          >
            <b>
              <a
                href="https://www.mexc.com/register?inviteCode=1bDFL"
                target="_blank"
                className="underline text-kt-yellow hover:text-kt-darkYellow"
              >
                MEXC
              </a>
            </b>{" "}
            is a low fees exchange that allows you to trade using leverage{" "}
            <b>
              <u>without KYC verification</u>
            </b>{" "}
            - which makes it the perfect exchange for privacy-focused users.
          </CryptoExchangeCardComponent>
          <CryptoExchangeCardComponent
            logo="binance-logo"
            link="https://accounts.binance.com/register?ref=DD1CK7PV"
          >
            If you want the access to a{" "}
            <b>
              <u>wider range</u>
            </b>{" "}
            of coins and tokens while paying the lowest fees possible, then{" "}
            <b>
              <a
                href="https://accounts.binance.com/register?ref=DD1CK7PV"
                target="_blank"
                className="underline text-kt-yellow hover:text-kt-darkYellow"
              >
                Binance
              </a>
            </b>{" "}
            is the ideal choice for you.
          </CryptoExchangeCardComponent>
        </div>
      </div>
    </>
  );
}
