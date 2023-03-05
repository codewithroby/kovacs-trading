import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-kt-black px-4 py-8 text-gray-300 text-center">
      <p className="text-kt-yellow text-md sm:text-lg font-bold">
        JOIN THE COMMUNITY
      </p>
      <div className="flex justify-center gap-4 pt-4">
        <a
          href="https://discord.gg/XJNbamktFD"
          target="_blank"
          className="hover:text-gray-50"
          aria-label="Discord Server"
        >
          <FaDiscord className="h-6 w-6" />
        </a>
        <a
          href="https://twitter.com/robert_cfx"
          target="_blank"
          className="hover:text-gray-50"
          aria-label="Twitter Profile"
        >
          <FaTwitter className="h-6 w-6" />
        </a>
        <a
          href="https://instagram.com/kovacstrading"
          target="_blank"
          className="hover:text-gray-50"
          aria-label="Instagram Profile"
        >
          <FaInstagram className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}
