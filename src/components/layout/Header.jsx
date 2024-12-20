import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { HEADER_NAVIGATION_ITEMS } from "../../constants/navigation-items";

export const Header = ({ searchText, setSearchText, updateSearchText }) => {
  return (
    <div className="flex justify-between items-center py-4">
      {/* Logo */}
      <div className="flex items-center w-72">
        <h1 className="text-2xl font-extrabold text-gray-900">
          <span className="text-pink-500">M</span>
          oBoo
          <span className="text-pink-500">M</span>
        </h1>
      </div>
      <div className="flex flex-1 items-center gap-x-8">
        {/* Search bar */}
        <div className="flex-1 relative">
          <input
            className="w-full p-2 rounded-xl border-2 outline-none"
            type="text"
            placeholder="What do you want to buy today?"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <MagnifyingGlassIcon
            onClick={() => updateSearchText(searchText)}
            className="size-6 absolute right-3 top-1/2 -translate-y-1/2 text-black cursor-pointer"
          />
        </div>
        {/* Navigation */}
        <div className="hidden sm:flex sm:space-x-8">
          {HEADER_NAVIGATION_ITEMS.map((item) => (
            <div key={item.name} className="flex items-center">
              <span className="text-gray-500 hover:text-gray-900 px-3 py-2 font-medium">
                {item.name}
              </span>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
