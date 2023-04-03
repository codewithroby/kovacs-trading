import Image from "next/image";
import {
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
  FaYoutube,
  FaInstagram,
  FaFilePdf,
} from "react-icons/fa";

export default function PdfCreatorCardComponentAvatarLeft({
  creator,
  avatar,
  twitter = null,
  telegram = null,
  discord = null,
  youtube = null,
  instagram = null,
  children = null,
  count = 0,
}) {
  return (
    <div className="bg-white rounded-lg shadow col-span-1 flex flex-col lg:flex-row items-stretch">
      <div className="p-12 w-full lg:w-auto flex flex-col items-center justify-center bg-kt-black rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg">
        <Image
          src={`/images/creators/` + avatar + `.jpg`}
          height={80}
          width={80}
          className="rounded-full shadow-md shadow-white"
          alt={creator + ` Avatar`}
        />
        <h2 className="mt-3 text-2xl font-semibold text-white text-center">
          {creator}
        </h2>
        <h2 className="text-sm text-white text-center">FILES : {count}</h2>
        <div className="pt-4 w-full flex justify-center text-white space-x-2">
          {twitter ? (
            <a
              href={twitter}
              target="_blank"
              className="btnWhite"
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
              className="btnWhite"
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
              className="btnWhite"
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
              className="btnWhite"
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
              className="btnWhite"
              aria-label="Instagram Link"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col justify-center gap-6">{children}</div>
    </div>
  );
}

export function PdfCreatorCardComponentAvatarRight({
  creator,
  avatar,
  twitter = null,
  telegram = null,
  discord = null,
  youtube = null,
  instagram = null,
  children = null,
  count = 0,
}) {
  return (
    <div className="bg-white rounded-lg shadow col-span-1 flex flex-col lg:flex-row-reverse items-stretch">
      <div className="p-12 w-full lg:w-auto flex flex-col items-center justify-center bg-kt-black rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg">
        <Image
          src={`/images/creators/` + avatar + `.jpg`}
          height={80}
          width={80}
          className="rounded-full shadow-md shadow-white"
          alt={creator + ` Avatar`}
        />
        <h2 className="mt-3 text-2xl font-semibold text-white text-center">
          {creator}
        </h2>
        <h2 className="text-sm text-white text-center">FILES : {count}</h2>
        <div className="pt-4 w-full flex justify-center text-white space-x-2">
          {twitter ? (
            <a
              href={twitter}
              target="_blank"
              className="btnWhite"
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
              className="btnWhite"
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
              className="btnWhite"
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
              className="btnWhite"
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
              className="btnWhite"
              aria-label="Instagram Link"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col justify-center gap-6">{children}</div>
    </div>
  );
}

export function PdfCardComponentLeft({ title, description, url }) {
  return (
    <div className="bg-gray-50 rounded-md p-6 flex-1 flex flex-col lg:flex-row-reverse items-center text-center lg:text-left">
      <div className="flex-1 flex flex-col lg:ml-4">
        <span className="flex items-center justify-center lg:justify-end">
          <h1 className="headingDark text-xl font-bold uppercase">{title}</h1>
        </span>
        <p className="my-4 lg:mb-0 text-base sm:text-lg text-gray-800 lg:text-right">
          {description}
        </p>
      </div>
      <a
        target="_blank"
        href={`/files/pdf/${url}.pdf`}
        className="max-w-[180px] btnLight px-4 py-2 font-bold flex items-center"
      >
        <FaFilePdf className="mr-1 text-white h-5 w-5" />
        DOWNLOAD
      </a>
    </div>
  );
}

export function PdfCardComponentRight({ title, description, url }) {
  return (
    <div className="bg-gray-50 rounded-md p-6 flex-1 flex flex-col lg:flex-row items-center text-center lg:text-left">
      <div className="flex-1 flex flex-col lg:mr-4">
        <span className="flex items-center justify-center lg:justify-start">
          <h1 className="headingDark text-xl font-bold uppercase">{title}</h1>
        </span>
        <p className="my-4 lg:mb-0 text-base sm:text-lg text-gray-800">
          {description}
        </p>
      </div>
      <a
        target="_blank"
        href={`/files/pdf/${url}.pdf`}
        className="max-w-[180px] btnLight px-4 py-2 font-bold flex items-center"
      >
        <FaFilePdf className="mr-1 text-white h-5 w-5" />
        DOWNLOAD
      </a>
    </div>
  );
}
