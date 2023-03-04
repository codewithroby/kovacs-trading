"use client";
import { Fragment, useState } from "react";
import { FaCopy, FaDollarSign } from "react-icons/fa";
import { Transition } from "@headlessui/react";

export default function PositionSizeCalculatorComponent() {
  const [positionObj, setPositionObj] = useState({
    risk: 0,
    entry: 0,
    exit: 0,
    size: 0,
  });
  const [copiedPositionSize, setCopiedPositionSize] = useState(false);

  const handlePositionUpdate = (event) => {
    const newPositionObj = positionObj;
    newPositionObj[event.target.name] = event.target.value;
    setPositionObj(() => ({
      ...newPositionObj,
      size:
        newPositionObj.risk > 0 &&
        newPositionObj.entry > 0 &&
        newPositionObj.exit > 0 &&
        newPositionObj.entry !== newPositionObj.exit
          ? Number(
              Math.abs(
                newPositionObj.risk /
                  (newPositionObj.entry - newPositionObj.exit)
              ).toFixed(3)
            )
          : 0,
    }));
  };

  const copyPositionSize = () => {
    navigator.clipboard.writeText(positionObj.size.toString());
    setCopiedPositionSize(() => true);
    setTimeout(() => setCopiedPositionSize(() => false), 3000);
  };

  return (
    <div className="w-full max-w-lg rounded-2xl p-8 bg-kt-black grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col space-y-2 col-span-2">
        <label className="calculatorLabel" htmlFor="risk">
          RISK PER TRADE
        </label>
        <label className="flex calculatorInput items-center" htmlFor="risk">
          <span className="pr-2">
            <FaDollarSign className="h-4 w-4 text-white" />
          </span>
          <input
            className="flex-1 bg-transparent"
            type="number"
            name="risk"
            id="risk"
            value={positionObj.risk}
            onChange={handlePositionUpdate}
          />
        </label>
      </div>
      <div className="flex flex-col space-y-2 col-span-2 sm:col-span-1">
        <label className="calculatorLabel" htmlFor="entry">
          ENTRY PRICE
        </label>
        <label className="flex calculatorInput items-center" htmlFor="entry">
          <span className="pr-2">
            <FaDollarSign className="h-4 w-4 text-white" />
          </span>
          <input
            className="flex-1 bg-transparent"
            type="number"
            name="entry"
            id="entry"
            value={positionObj.entry}
            onChange={handlePositionUpdate}
          />
        </label>
      </div>
      <div className="flex flex-col space-y-2 col-span-2 sm:col-span-1">
        <label className="calculatorLabel" htmlFor="exit">
          STOP LOSS PRICE
        </label>
        <label className="flex calculatorInput items-center" htmlFor="exit">
          <span className="pr-2">
            <FaDollarSign className="h-4 w-4 text-white" />
          </span>
          <input
            className="flex-1 bg-transparent"
            type="number"
            name="exit"
            id="exit"
            value={positionObj.exit}
            onChange={handlePositionUpdate}
          />
        </label>
      </div>
      <div className="col-span-2 border-b border-kt-yellow/10 my-4"></div>
      <div className="flex flex-col space-y-2 col-span-2">
        <label htmlFor="size" className="calculatorLabel">
          POSITION SIZE
        </label>
        <div className="flex calculatorPosition items-center">
          <input
            className="flex-1 text-white font-bold bg-transparent"
            type="number"
            name="size"
            id="size"
            value={positionObj.size}
            readOnly={true}
            onChange={null}
          />
          <span
            className="pr-1 cursor-pointer hover:text-gray-50"
            onClick={copyPositionSize}
          >
            <FaCopy className="h-4 w-4" />
          </span>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-250"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={copiedPositionSize}
      >
        <div className="col-span-2 text-center pt-4">
          <span className="calculatorLabel text-center text-lg sm:text-2xl">
            POSITION SIZE COPIED TO CLIPBOARD
          </span>
        </div>
      </Transition>
    </div>
  );
}
