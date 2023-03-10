import Head from "next/head";
import Link from "next/link";
import TitleAndDescriptionComponent from "@/components/page/titleAndDescription";
import TradingTipCardComponent from "@/pages/getting-started/tradingTipCard";

const metaData = {
  title: "Getting Started - Kovacs Trading",
  description:
    "Here's a beginner's guide that contains the essential information you need to start trading.",
  thumbnail: "https://kovacstrading.com/images/thumbnails/getting-started.jpg",
};

export default function GettingStartedPage() {
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
          title="Getting Started"
          description="Here's a beginner's guide that contains the essential information you need to start trading."
        />
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:auto-rows-fr">
          <TradingTipCardComponent title="Fundamentals First">
            <p className="text-lg pb-2">
              A common mistake that beginners make is trying out too many
              different strategies and using too many indicators on their charts
              before mastering the basics of trading. This approach can be
              overwhelming and ultimately useless.
            </p>
            <p className="text-lg py-2">
              Using indicators and different strategies is not bad, but you must
              not skip the fundamentals. Master
              <b>
                {" "}
                <a
                  target="_blank"
                  href="https://www.investopedia.com/trading/support-and-resistance-basics/"
                  className="text-kt-black underline underline-offset-2 hover:text-kt-yellow"
                >
                  support / resistance
                </a>
              </b>{" "}
              levels, how{" "}
              <b>
                {" "}
                <a
                  target="_blank"
                  href="https://www.investopedia.com/terms/v/volumeoftrade.asp"
                  className="text-kt-black underline underline-offset-2 hover:text-kt-yellow"
                >
                  volume
                </a>
              </b>{" "}
              works and learn about{" "}
              <b>
                {" "}
                <Link
                  href="/trading-terminology"
                  className="text-kt-black underline underline-offset-2 hover:text-kt-yellow"
                >
                  trading terminology
                </Link>
              </b>{" "}
              first. You should start using more advanced trading techniques
              only after you master the fundamentals.
            </p>
            <p className="text-lg py-2">
              Check out{" "}
              <b>
                <Link
                  href="/pdf-files"
                  className="text-kt-black underline underline-offset-2 hover:text-kt-yellow"
                >
                  this page
                </Link>
              </b>{" "}
              to find complete, beginner to advanced trading guides made by the
              most experienced traders.
            </p>
          </TradingTipCardComponent>
          <TradingTipCardComponent title="Risk Management">
            <p className="text-lg pb-2">
              Always set an appropriate position size for your trades to
              minimize losses and maximize gains. You should never risk more
              than 3-5% of your portfolio on each trade. As a complete beginner
              you should not risk more than 1% per trade.
            </p>
            <p className="text-lg py-2">
              If you want to calculate the correct position size for your trades
              easily, feel free to use our{" "}
              <b>
                <Link
                  href="/position-size-calculator"
                  className="text-kt-black underline underline-offset-2 hover:text-kt-yellow"
                >
                  Position Size Calculator
                </Link>
              </b>
              .
            </p>
            <p className="text-lg py-2">
              Always use a stop-loss at your trade's invalidation point. Trading
              without a stop-loss is a recipe for disaster.
            </p>
            <p className="text-lg py-2">
              Keep your emotions in check while trading. If you are feeling
              stressed or not thinking clearly, you may be at a higher risk of
              making impulsive decisions that can negatively impact your trades.
            </p>
          </TradingTipCardComponent>

          <TradingTipCardComponent title="Where To Trade">
            <p className="text-lg pb-2">
              When you're ready to switch from a demo account to a real trading
              account, aim for a secure, low-fee exchange that offers a diverse
              range of coins.
            </p>
            <p className="text-lg py-2">
              If you're looking for a low-fee exchange that offers high privacy
              and leveraged trading without KYC verification, then{" "}
              <b>
                <a
                  href={process.env.NEXT_PUBLIC_BYBIT_REFERRAL_LINK}
                  className="text-kt-black underline underline-offset-2 hover:text-kt-yellow"
                  target="_blank"
                >
                  ByBit
                </a>
              </b>{" "}
              is the perfect choice for you.
            </p>
            <p className="text-lg py-2">
              If you don't mind completing the KYC verification and prefer a
              wider variety of altcoins to trade, then{" "}
              <b>
                <a
                  href={process.env.NEXT_PUBLIC_BINANCE_REFERRAL_LINK}
                  className="text-kt-black underline underline-offset-2 hover:text-kt-yellow"
                  target="_blank"
                >
                  Binance
                </a>
              </b>{" "}
              is the perfect choice for you.
            </p>
            <p className="text-lg py-2">
              If you don't feel like using the exchanges above, here is{" "}
              <b>
                <a
                  href="https://coinmarketcap.com/rankings/exchanges/"
                  className="text-kt-black underline underline-offset-2 hover:text-kt-yellow"
                  target="_blank"
                >
                  a list of the top crypto exchanges
                </a>
              </b>{" "}
              out there.
            </p>
          </TradingTipCardComponent>
        </div>
      </div>
    </>
  );
}
