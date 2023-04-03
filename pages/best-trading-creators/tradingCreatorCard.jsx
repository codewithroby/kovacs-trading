import Image from "next/image";
import {
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function TradingCreatorCardComponent({
  creator,
  avatar,
  description,
  twitter = null,
  telegram = null,
  discord = null,
  youtube = null,
  instagram = null,
}) {
  return (
    <div className="bg-white rounded-lg shadow col-span-1 flex flex-col">
      <div className="flex-1 pt-8 px-8 flex flex-col items-center border-b border-gray-100">
        <Image
          src={`/images/creators/` + avatar + `.jpg`}
          height={80}
          width={80}
          className="rounded-full shadow-md"
          alt={creator + ` Avatar`}
        />
        <h2 className="mt-3 text-2xl font-semibold text-kt-black text-center">
          {creator}
        </h2>
        <span className="w-[75px] mt-3 border-b-2 border-kt-yellow"></span>
        <p className="py-4 text-kt-black/75 text-center">{description}</p>
      </div>
      <div className="p-4">
        <p className="text-center font-semibold pb-3 uppercase">Check It Out</p>
        <div className="rounded-lg w-full flex justify-center text-white space-x-2">
          {twitter ? (
            <a
              href={twitter}
              target="_blank"
              className="btnLight"
              aria-label="Twitter Link"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          ) : (
            ""
          )}
          {telegram ? (
            <a
              href={telegram}
              target="_blank"
              className="btnLight"
              aria-label="Telegram Link"
            >
              <FaTelegramPlane className="h-5 w-5" />
            </a>
          ) : (
            ""
          )}
          {discord ? (
            <a
              href={discord}
              target="_blank"
              className="btnLight"
              aria-label="Discord Link"
            >
              <FaDiscord className="h-5 w-5" />
            </a>
          ) : (
            ""
          )}
          {youtube ? (
            <a
              href={youtube}
              target="_blank"
              className="btnLight"
              aria-label="Youtube Link"
            >
              <FaYoutube className="h-5 w-5" />
            </a>
          ) : (
            ""
          )}
          {instagram ? (
            <a
              href={instagram}
              target="_blank"
              className="btnLight"
              aria-label="Instagram Link"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
