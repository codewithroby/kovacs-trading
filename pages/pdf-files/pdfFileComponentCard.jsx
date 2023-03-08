export default function PdfFileCardComponent({
  link = null,
  title,
  creator,
  description,
}) {
  return (
    <div className="bg-white rounded-lg shadow col-span-1">
      <div className="flex flex-col items-center">
        <div className="pt-8 px-4">
          <h2 className="text-2xl text-kt-black uppercase font-semibold text-center">
            {title}
          </h2>
        </div>
        <span className="w-[75px] my-4 border-b-2 border-kt-yellow"></span>
        <div
          className={
            `w-full p-6 pt-0` + (link ? " border-b border-gray-200" : "")
          }
        >
          <p className="text-lg text-kt-black/75 text-center">{description}</p>
        </div>
        {link ? (
          <div className="p-4 w-full flex flex-col sm:flex-row gap-2">
            <a
              href={link}
              target="_blank"
              alt={`download ${title}`}
              rel="noopener noreferrer"
              className="creatorLinks px-4 uppercase font-semibold flex-1"
            >
              Download PDF
            </a>
            <a
              href={creator}
              alt="creator profile"
              target="_blank"
              className="creatorLinks px-4 uppercase font-semibold flex-1"
            >
              Author
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
