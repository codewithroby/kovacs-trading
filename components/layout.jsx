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
        className="fixed bottom-8 right-8 h-14 w-14 bg-kt-darkYellow shadow flex justify-center items-center rounded-full"
        href="#"
        aria-label="Back to Top"
      >
        <BsFillArrowUpCircleFill
          className="w-7 h-7 text-white
      "
        />
      </a>
    </div>
  );
}
