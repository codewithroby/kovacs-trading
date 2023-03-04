"use client";
export default function CardForGridComponent(props) {
  return (
    <div className="bg-white rounded-lg shadow col-span-1">
      <div className="p-6 bg-kt-black rounded-t-lg">
        <h2 className="articleHeadingH2 text-center text-white">
          {props.title}
        </h2>
      </div>
      {props.children}
    </div>
  );
}
