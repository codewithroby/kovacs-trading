import Head from "next/head";
import TitleAndDescriptionComponent from "@/components/page/titleAndDescription";
import TradingTerminologyCardComponent from "@/pages/trading-terminology/tradingTerminologyCard";

const metaData = {
  title: "Trading Terminology - Kovacs Trading",
  description:
    "Learning the terminology of trading can help you understand the specific terms used in trading, which can improve your comprehension of trading materials and communication with other traders.",
  thumbnail:
    "https://kovacstrading.com/images/thumbnails/trading-terminology.jpg",
};

export default function TradingTerminologyPage() {
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
          title="Trading Terminology"
          description="Learning the terminology of trading can help you understand the specific terms used in trading, which can improve your comprehension of trading materials and communication with other traders."
        />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 items-start">
          <div className="col-span-1 grid grid-cols-1 gap-4 items-start">
            <TradingTerminologyCardComponent
              title="Support"
              link="https://www.investopedia.com/trading/support-and-resistance-basics/"
            >
              A <b>price level</b> at which <b>buying pressure</b> is expected
              to <b>increase</b>.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Resistance"
              link="https://www.investopedia.com/trading/support-and-resistance-basics/"
            >
              A <b>price level</b> at which <b>selling pressure</b> is expected
              to <b>increase</b>.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Volume"
              link="https://www.investopedia.com/terms/v/volumeoftrade.asp"
            >
              The <b>amount</b> of a particular asset{" "}
              <b>traded over a given time</b>.
            </TradingTerminologyCardComponent>

            <TradingTerminologyCardComponent
              title="Market Order"
              link="https://www.investopedia.com/terms/m/marketorder.asp"
            >
              An order to buy or sell at the <b>current market price</b>.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Limit Order"
              link="https://www.investopedia.com/terms/l/limitorder.asp"
            >
              An order to buy or sell at a <b>specific price</b>.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Take Profit"
              link="https://www.investopedia.com/terms/t/take-profitorder.asp"
            >
              An order <b>to sell an asset</b> at a predetermined price{" "}
              <b>to lock in profits</b>.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Stop Loss"
              link="https://www.investopedia.com/terms/s/stop-lossorder.asp"
            >
              An order <b>to sell an asset</b> at a predetermined price to{" "}
              <b>limit losses</b>.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Liquidity"
              link="https://www.investopedia.com/terms/l/liquidity.asp"
            >
              The <b>ease</b> with which an asset can be <b>bought</b> or{" "}
              <b>sold without impacting</b> the market price.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="FOMO"
              link="https://www.investopedia.com/deal-with-crypto-fomo-6455103"
            >
              <b>Fear Of Missing Out</b>, a phenomenon where traders{" "}
              <b>buy an asset</b> out of <b>fear of missing</b> a{" "}
              <b>potential profit</b>.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="FUD"
              link="https://www.bots.io/news/what-does-fud-mean-in-investing"
            >
              <b>Fear</b>, <b>Uncertainty</b>, and <b>Doubt</b>,{" "}
              <b>negative sentiments</b> that can <b>affect market sentiment</b>
              .
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Order Book"
              link="https://www.investopedia.com/terms/o/order-book.asp"
            >
              A list of <b>buy</b> and <b>sell orders </b>for a particular
              asset.
            </TradingTerminologyCardComponent>
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-4 items-start">
            <TradingTerminologyCardComponent
              title="RSI"
              link="https://www.investopedia.com/terms/r/rsi.asp"
            >
              <b>Relative Strength Index</b>, is a technical indicator used in
              trading to measure the strength of a{" "}
              <b>security's price action</b> by comparing its upward and
              downward movements over a specific period of time. The RSI
              oscillates <b>between 0 and 100</b> and is considered{" "}
              <b>overbought</b> when above <b>70</b> and <b>oversold</b> when
              below <b>30</b>. Traders use RSI to identify{" "}
              <b>potential trend reversals</b> and confirm
              <b>price trends</b>.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="HODL"
              link="https://www.nerdwallet.com/article/investing/hodl-a-typo-takes-hold-as-a-sound-cryptocurrency-strategy"
            >
              <b>Hold On for Dear Life</b>, a strategy where investors hold
              their positions for a <b>long period</b> of time.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Pump And Dump"
              link="https://www.investopedia.com/terms/p/pumpanddump.asp"
            >
              A <b>market manipulation strategy</b> where traders{" "}
              <b>artificially inflate</b> the <b>price of an asset</b> and then
              sell it at a profit.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Whale"
              link="https://www.investopedia.com/terms/b/bitcoin-whale.asp"
            >
              A trader or investor with a <b>large amount of capital</b> who can{" "}
              <b>influence</b> market prices.
            </TradingTerminologyCardComponent>

            <TradingTerminologyCardComponent
              title="Satoshis"
              link="https://www.investopedia.com/terms/s/satoshi.asp"
            >
              The smallest unit of <b>Bitcoin</b>, named after the pseudonymous
              creator of Bitcoin, Satoshi Nakamoto. Example: <b>1 Bitcoin</b>{" "}
              equals to <b>100 million satoshis</b>
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="ICO"
              link="https://www.investopedia.com/terms/i/initial-coin-offering-ico.asp"
            >
              <b>Initial Coin Offering</b>, a fundraising method used by
              startups to <b>issue new cryptocurrencies</b>.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Airdrop"
              link="https://www.investopedia.com/terms/a/airdrop-cryptocurrency.asp"
            >
              A <b>distribution</b> of <b>free tokens</b> or coins to holders of
              a particular cryptocurrency.
            </TradingTerminologyCardComponent>

            <TradingTerminologyCardComponent
              title="Candlestick"
              link="https://www.investopedia.com/terms/c/candlestick.asp"
            >
              Candlestick is a chart used in trading that{" "}
              <b>displays the opening and closing prices</b>, as well as{" "}
              <b>the highest and lowest prices</b> reached during a{" "}
              <b>certain period of time</b>. It is used{" "}
              <b>to identify price patterns</b> and trends, and make buy and
              sell decisions based on technical analysis.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Spread"
              link="https://www.investopedia.com/terms/s/spread.asp"
            >
              The <b>difference</b> between the <b>highest</b> bid and{" "}
              <b>lowest</b> ask prices.
            </TradingTerminologyCardComponent>

            <TradingTerminologyCardComponent
              title="Slippage"
              link="https://www.investopedia.com/terms/s/slippage.asp"
            >
              The <b>difference</b> between the <b>expected price</b> of a trade
              and the <b>actual executed price</b>.
            </TradingTerminologyCardComponent>
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-4 items-start">
            <TradingTerminologyCardComponent
              title="Altcoin"
              link="https://www.investopedia.com/terms/a/altcoin.asp"
            >
              Any cryptocurrency that <b>is not</b> Bitcoin.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Market Cap"
              link="https://www.investopedia.com/terms/m/marketcapitalization.asp"
            >
              The <b>total value</b> of all coins or tokens{" "}
              <b>in circulation</b>.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Wallet"
              link="https://www.investopedia.com/terms/b/bitcoin-wallet.asp"
            >
              A <b>digital storage space</b> for your assets.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Cold Storage"
              link="https://www.investopedia.com/terms/c/cold-storage.asp"
            >
              A method of storing cryptocurrency <b>offline</b> to{" "}
              <b>protect it</b> from <b>hacking or theft</b>.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Gas"
              link="https://www.investopedia.com/terms/g/gas-ethereum.asp"
            >
              The <b>fee</b> paid to miners to <b>process transactions</b> on
              the blockchain.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Whitepaper"
              link="https://coinmarketcap.com/alexandria/glossary/whitepaper"
            >
              A document that <b>outlines </b>the <b>technical details</b> and
              goals of a particular cryptocurrency.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Mining"
              link="https://www.coinbase.com/learn/crypto-basics/what-is-mining"
            >
              The process of <b>generating new cryptocurrencies</b> by solving{" "}
              <b>complex mathematical problems</b>.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Hashrate"
              link="https://www.investopedia.com/hash-rate-6746261"
            >
              The <b>measure</b> of the <b>computational power</b> used to mine
              cryptocurrencies.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Fork"
              link="https://www.coinbase.com/learn/crypto-basics/what-is-a-fork"
            >
              A <b>change</b> in <b>the rules of a blockchain</b> that{" "}
              <b>creates</b> a new cryptocurrency.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Smart Contract"
              link="https://www.investopedia.com/terms/s/smart-contracts.asp#:~:text=Smart%20contracts%20are%20code%20written,parties%20to%20trust%20each%20other."
            >
              <b>Self-executing contracts</b> with the terms of the agreement
              directly <b>written into code</b>.
            </TradingTerminologyCardComponent>
            <TradingTerminologyCardComponent
              title="Coming Soon"
              link="https://twitter.com/robert_cfx"
            >
              New trading terminology will be added soon. Thank you for visiting
              our website!
            </TradingTerminologyCardComponent>
          </div>
        </div>
      </div>
    </>
  );
}
