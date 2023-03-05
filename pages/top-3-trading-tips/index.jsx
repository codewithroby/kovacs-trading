import Head from "next/head";
import Link from "next/link";
import TitleAndDescriptionComponent from "@/components/page/titleAndDescription";
import CardForGridComponent from "@/components/page/cardForGrid";

const metaData = {
  title: "Top 3 Trading Tips - Kovacs Trading",
  description:
    "Boost your trading results with our top 3 trading tips for beginners. Our expert tips cover essential strategies such as risk management and technical analysis to help you succeed in the market.",
  thumbnail:
    "https://kovacstrading.com/images/thumbnails/top-3-trading-tips.jpg",
};

export default function Top3TradingTipsPage() {
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
          title="Top 3 Trading Tips"
          description="Learn these three fundamental tips to instantly become a more
            profitable Trader."
        />
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:auto-rows-fr">
          <CardForGridComponent title="Risk Management">
            <div className="py-3 px-6">
              <p className="text-lg py-2">
                Always set an appropriate position size for your trades to
                minimize losses and maximize gains. You should never risk more
                than 3-5% of your portfolio on each trade. As a complete
                beginner you should aim for a maximum of 1% per trade.
              </p>
              <p className="text-lg py-2">
                If you want to calculate the correct position size for your
                trades easily, feel free to use our{" "}
                <b>
                  <Link
                    href="/position-size-calculator"
                    className="text-yellow-700 underline underline-offset-2 hover:text-kt-yellow"
                  >
                    Position Size Calculator
                  </Link>
                </b>
                .
              </p>
              <p className="text-lg py-2">
                Always use a stop-loss at your trade's invalidation point.
                Trading without a stop-loss is a recipe for disaster.
              </p>
              <p className="text-lg py-2">
                Keep your emotions in check while trading. If you are feeling
                stressed or not thinking clearly, you may be at a higher risk of
                making impulsive decisions that can negatively impact your
                trades.
              </p>
            </div>
          </CardForGridComponent>
          <CardForGridComponent title="Fundamentals First">
            <div className="py-3 px-6">
              <p className="text-lg py-2">
                A common mistake that beginners make is trying out too many
                different strategies and using too many indicators on their
                charts before mastering the basics of trading. This approach can
                be overwhelming and ultimately useless.
              </p>
              <p className="text-lg py-2">
                Using indicators and different strategies is not bad, but you
                must not skip the fundamentals. Master support / resistance
                levels, volume and learn about trading terminology first. You
                should start using more advanced trading techniques only after
                you master the fundamentals.
              </p>
              <p className="text-lg py-2">
                A great place where you can find complete, beginner to advanced
                guides is{" "}
                <b>
                  <a
                    href="https://t.me/EmperorbtcTA"
                    className="text-yellow-700 underline underline-offset-2 hover:text-kt-yellow"
                    target="_blank"
                  >
                    EmperorBTC's Technical Analysis
                  </a>
                </b>{" "}
                telegram channel. I started learning how to trade using his
                tutorials and they are the most useful I found so far.
              </p>
            </div>
          </CardForGridComponent>
          <CardForGridComponent title="Exchange Selection">
            <div className="py-3 px-6">
              <p className="text-lg py-2">
                When you're ready to switch from a demo account to a real
                trading account, aim for a secure, low-fee exchange that offers
                a diverse range of coins.
              </p>
              <p className="text-lg py-2">
                If you're looking for a low-fee exchange that offers high
                privacy and leveraged trading without KYC verification, then{" "}
                <b>
                  <a
                    href={process.env.NEXT_PUBLIC_BYBIT_REFERRAL_LINK}
                    className="text-yellow-700 underline underline-offset-2 hover:text-kt-yellow"
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
                    className="text-yellow-700 underline underline-offset-2 hover:text-kt-yellow"
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
                    className="text-yellow-700 underline underline-offset-2 hover:text-kt-yellow"
                    target="_blank"
                  >
                    a list of the top crypto exchanges
                  </a>
                </b>{" "}
                out there.
              </p>
            </div>
          </CardForGridComponent>
        </div>
      </div>
    </>
  );
}
