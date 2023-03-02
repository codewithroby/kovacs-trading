import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useRef, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalculatorIcon,
  XMarkIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import iconImage from "../../public/images/brand/icon-only-light.png";

const utilities = [
  {
    name: "POSITION SIZE CALCULATOR",
    description:
      "Calculate your trade's position size quickly and easily with our free online calculator.",
    href: "/position-size-calculator",
    icon: CalculatorIcon,
  },
];

const callsToAction = [
  { name: "Trading Tutorial Video", href: "#", icon: PlayCircleIcon },
  { name: "Contact Coming Soon", href: "#", icon: EnvelopeIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const utilitiesRef = useRef();

  return (
    <header className="bg-kt-black">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="lg:flex-1">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Image
              src={iconImage}
              width={54}
              height={30}
              alt="Kovacs Trading"
              placeholder="blur"
            />
          </Link>
        </div>
        <div className=" flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-kt-yellow"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-6">
          <Link
            href="/"
            className={
              `text-sm font-semibold leading-6 hover:text-gray-50 ` +
              (pathname === "/" ? "text-gray-50" : "text-gray-300")
            }
          >
            HOME
          </Link>
          <Popover className="relative">
            <Popover.Button
              ref={utilitiesRef}
              className={
                `flex items-center gap-x-1 text-sm font-semibold leading-6 hover:text-gray-50 focus:outline-none ` +
                (pathname === "/position-size-calculator"
                  ? "text-gray-50"
                  : "text-gray-300")
              }
            >
              UTILITIES
              <ChevronDownIcon
                className="h-5 w-5 flex-none"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-kt-black/5">
                <div className="p-4">
                  {utilities.map((item) => (
                    <Link
                      href={item.href}
                      key={item.name}
                      className={
                        `group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6  ` +
                        (pathname === "/" ? "hover:bg-gray-50" : "bg-gray-50")
                      }
                      onClick={() => utilitiesRef.current?.click()}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-kt-yellow">
                        <item.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <div className="block font-semibold text-gray-900">
                          <span className="text-kt-black">{item.name}</span>
                          <span className="absolute inset-0" />
                        </div>
                        <p className="mt-1 text-gray-500">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      onClick={() => utilitiesRef.current?.click()}
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* <!--<Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-300 hover:text-gray-50"
          >
            Features
          </Link>--> */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://instagram.com/robert.cfx"
            target="_blank"
            className="text-sm font-semibold leading-6 text-gray-300 hover:text-gray-50"
          >
            COMING SOON <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white">
          <div className="flex items-center justify-between px-6 py-6 bg-gray-900">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src={iconImage}
                width={54}
                height={30}
                alt="Kovacs Trading"
                placeholder="blur"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-kt-yellow"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="my-6 flow-root px-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="-mx-3">
                  <Link
                    href="/"
                    className={
                      `flex w-full rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 ` +
                      (pathname === "/" ? "bg-gray-50" : "")
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    HOME
                  </Link>
                </div>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        UTILITIES
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>

                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...utilities /*, ...callsToAction*/].map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {/*<Link
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </Link> */}
              </div>
              <div className="py-6">
                <a
                  href="https://instagram.com/robert.cfx"
                  target="_blank"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  COMING SOON
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
