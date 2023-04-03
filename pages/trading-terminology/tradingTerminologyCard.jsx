export default function TradingTerminologyCardComponent({
  link = null,
  title,
  children,
}) {
  return (
    <div className="bg-white rounded-lg shadow col-span-1">
      <div className="flex flex-col items-center">
        <div className="pt-8 px-4">
          <h2 className="text-2xl text-kt-black uppercase font-semibold">
            {title}
          </h2>
        </div>
        <span className="w-[75px] my-4 border-b-2 border-kt-yellow"></span>
        <div
          className={
            `w-full p-6 pt-0` + (link ? " border-b border-gray-200" : "")
          }
        >
          <p className="text-lg text-kt-black/75 text-center">{children}</p>
        </div>
        {link ? (
          <div className="p-4">
            <a
              href={link}
              target="_blank"
              className="btnLight px-4 uppercase font-semibold"
            >
              Read More
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
