"use client";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function NavPopup() {
  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-12 z-20">
      <Popover className="relative">
        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
          Producto
          <ChevronDownIcon
            aria-hidden="true"
            className="size-5 flex-none text-gray-400"
          />
        </PopoverButton>

        <PopoverPanel
          transition
          className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
        >
          <div className="p-4">
            {products.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
              >
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                  />
                </div>
                <div className="flex-auto">
                  <a
                    href={item.href}
                    className="block font-semibold text-gray-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
              >
                <item.icon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                />
                {item.name}
              </a>
            ))}
          </div>
        </PopoverPanel>
      </Popover>

      <a href="#" className="text-sm font-semibold text-gray-900">
        Menú
      </a>
      <a href="#" className="text-sm font-semibold text-gray-900">
        Tienda
      </a>
      <a href="#" className="text-sm font-semibold text-gray-900">
        Nosotros
      </a>
    </PopoverGroup>
  );
}
