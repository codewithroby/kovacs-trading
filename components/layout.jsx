import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("./layout/header"), {
  loading: () => "Loading...",
});
const DynamicFooter = dynamic(() => import("./layout/footer"), {
  loading: () => "Loading...",
});

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center">
      <DynamicHeader />
      <main className="flex-1 flex flex-col justify-center items-center py-[5vh] sm:py-[10vh] px-4 sm:px-8">
        {children}
      </main>
      <DynamicFooter />
    </div>
  );
}
