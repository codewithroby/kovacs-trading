export default function TitleAndDescriptionComponent({ title, description }) {
  return (
    <div className="flex flex-col text-center">
      <h1 className="headingDark big uppercase">{title}</h1>
      <p className="mt-5 text-lg sm:text-xl text-gray-800">{description}</p>
      <span className="self-center w-32 my-8 border-b-2 border-kt-yellow"></span>
    </div>
  );
}
