import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

export const CategoryDropdown = ({
  selectedCategory,
  handleCategoryChange,
  clearCategory,
  categories,
}) => {
  return (
    <div className="w-80">
      <Listbox value={selectedCategory} onChange={handleCategoryChange}>
        <div className="flex justify-between items-center gap-x-4">
          <ListboxButton className="flex rounded-xl justify-between min-w-72 items-center p-2 border-2">
            <span
              className={clsx(
                "text-sm font-medium",
                !selectedCategory && "text-gray-400",
              )}
            >
              {selectedCategory || "Select Category"}
            </span>
            <ChevronDownIcon className="size-8 fill-black/60" />
          </ListboxButton>
          {selectedCategory && (
            <div
              onClick={clearCategory}
              className="text-sm font-medium underline cursor-pointer"
            >
              Clear
            </div>
          )}
        </div>
        <ListboxOptions className="absolute h-96 overflow-scroll z-10 border-2 rounded-lg w-72 bg-white">
          {categories.map((category) => (
            <ListboxOption
              className={clsx(
                "cursor-pointer",
                "py-1 px-4",
                selectedCategory === category.name && "bg-gray-900 text-white",
                "hover:bg-gray-200",
              )}
              value={category}
              key={category.slug}
            >
              {category.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};
