import Header from "./layout/header";
import Footer from "./layout/footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center py-[5vh] sm:py-[10vh] px-4 sm:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
