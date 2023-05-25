"use client";
import {
  ExclamationCircleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import React, { useState, Fragment } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
type Props = {};
const items: {
  id: number;
  name: string;
  description: string;
  url: string;
  color: string;
  icon: any;
}[] = [
  {
    id: 1,
    name: "Inicio",
    description: "Dashboard",
    url: "/dashboard",
    color: "bg-indigo-500",
    icon: PencilSquareIcon,
  },
  {
    id: 2,
    name: "Cuenta",
    description: "Mi información",
    url: "/dashboard/account/profile",
    color: "bg-indigo-500",
    icon: PencilSquareIcon,
  },
  {
    id: 3,
    name: "Tarjeta",
    description: " Actualizar tarjeta de crédito",
    url: "/dashboard",
    color: "bg-indigo-500",
    icon: PencilSquareIcon,
  },
  {
    id: 4,
    name: "Plan",
    description: "Actualizar plan",
    url: "/dashboard/account/plan",

    color: "bg-indigo-500",
    icon: PencilSquareIcon,
  },
  {
    id: 5,
    name: "Privacidad",
    description: "Política de privacidad y términos",
    url: "/dashboard/term",
    color: "bg-indigo-500",
    icon: PencilSquareIcon,
  },
];
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const SearchBar = (props: Props) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const filteredItems =
    query === ""
      ? []
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  const openModal = () => {
    console.log("open");
    setOpen(true);
  };

  return (
    <>
      <button
        className=" z-40 w-full h-full flex items-center justify-center   px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none space-x-2 "
        onClick={openModal}
      >
        <MagnifyingGlassIcon className="h-5 w-5 z-40 " aria-hidden="true" />
        <span className="text-gray-700 z-40">buscar</span>
      </button>

      <Transition.Root
        show={open}
        as={Fragment}
        afterLeave={() => setQuery("")}
        appear
      >
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <Combobox
                  onChange={(item: any) => (window.location = item.url)}
                >
                  <div className="relative">
                    <MagnifyingGlassIcon
                      className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <Combobox.Input
                      className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                      placeholder="Search..."
                      onChange={(event) => setQuery(event.target.value)}
                    />
                  </div>

                  {filteredItems.length > 0 && (
                    <Combobox.Options
                      static
                      className="max-h-96 scroll-py-3 overflow-y-auto p-3"
                    >
                      {filteredItems.map((item) => (
                        <Combobox.Option
                          key={item.id}
                          value={item}
                          className={({ active }) =>
                            classNames(
                              "flex cursor-default select-none rounded-xl p-3",
                              active && "bg-gray-100"
                            )
                          }
                        >
                          {({ active }) => (
                            <>
                              <div
                                className={classNames(
                                  "flex h-10 w-10 flex-none items-center justify-center rounded-lg",
                                  item.color
                                )}
                              >
                                <item.icon
                                  className="h-6 w-6 text-white"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4 flex-auto">
                                <p
                                  className={classNames(
                                    "text-sm font-medium",
                                    active ? "text-gray-900" : "text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </p>
                                <p
                                  className={classNames(
                                    "text-sm",
                                    active ? "text-gray-700" : "text-gray-500"
                                  )}
                                >
                                  {item.description}
                                </p>
                              </div>
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}

                  {query !== "" && filteredItems.length === 0 && (
                    <div className="px-6 py-14 text-center text-sm sm:px-14">
                      <ExclamationCircleIcon
                        type="outline"
                        name="exclamation-circle"
                        className="mx-auto h-6 w-6 text-gray-400"
                      />
                      <p className="mt-4 font-semibold text-gray-900">
                        No hay resultados
                      </p>
                      <p className="mt-2 text-gray-500">
                        Prueba con otra palabra
                      </p>
                    </div>
                  )}
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SearchBar;
