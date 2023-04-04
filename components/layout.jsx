import Header from "./layout/header";
import Footer from "./layout/footer";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center">
        {children}
      </main>
      <Footer />
      <a
        className="fixed bottom-5 right-5 h-11 w-11 md:bottom-8 md:right-8 md:h-14 md:w-14 bg-kt-darkYellow shadow flex justify-center items-center rounded-full"
        href="#"
        aria-label="Back to Top"
      >
        <BsFillArrowUpCircleFill
          className="w-6 h-6 md:w-7 md:h-7 text-white
      "
        />
      </a>
    </div>
  );
}
