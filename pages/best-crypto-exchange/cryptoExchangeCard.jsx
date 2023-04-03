import Image from "next/image";

const referralLinks = {
  bybit: {
    code: "JOKW3R",
    link: "https://www.bybit.com/invite?ref=JOKW3R",
  },
  mexc: {
    code: "1bDFL",
    link: "https://www.mexc.com/register?inviteCode=1bDFL",
  },
  binance: {
    code: "DD1CK7PV",
    link: "https://accounts.binance.com/register?ref=DD1CK7PV",
  },
};

export default function CryptoExchangeCardComponent({
  exchange,
  logo,
  children,
  link,
}) {
  return (
    <div className="bg-white rounded-lg shadow col-span-1 flex flex-col">
      <div className="flex-1 pt-16 px-6 flex flex-col items-center border-b border-gray-100">
        <Image
          src={`/images/logos/` + logo + `.png`}
          width={250}
          height={100}
          className="mb-2"
          alt={exchange + ` Logo`}
        />
        <span className="w-[75px] mt-3 border-b-2 border-kt-yellow"></span>
        <p className="py-8 text-kt-black/75 text-center text-lg">{children}</p>
      </div>
      <div className="p-8">
        <div className="rounded-lg w-full flex justify-center text-white space-x-2">
          <a
            href={link}
            target="_blank"
            className="btnLight font-semibold text-base sm:text-lg"
            aria-label="Twitter Link"
          >
            CREATE ACCOUNT
          </a>
        </div>
      </div>
    </div>
  );
}
