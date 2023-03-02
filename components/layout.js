import Header from "./layout/header";
import Footer from "./layout/footer";

export default function Layout({ children }) {
  return (
    <div className={"min-h-screen flex flex-col justify-center"}>
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center py-[10vh] sm:py-[5vh] px-4 sm:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
