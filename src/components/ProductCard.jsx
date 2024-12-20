import { StarIcon } from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

export const ProductCard = ({ title, description, price, images, rating }) => {
  return (
    <div className="relative cursor-pointer border-2 rounded-lg shadow-lg">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100 hover:opacity-75 lg:h-80">
        <img
          src={images[0]}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="flex flex-col p-4 justify-between gap-y-2">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <p className="mt-1 text-sm text-gray-500 overflow-hidden line-clamp-2">
          {description}
        </p>
        <p className="flex items-center gap-x-1">
          <StarIcon className="size-4 text-yellow-500" />
          <span className="text-sm text-gray-500">{rating}</span>
        </p>
        <p className="text-lg font-medium text-gray-900">${price}</p>
      </div>
      <div className="absolute p-1 bg-black/50 opacity-50 right-3 top-3">
        <HeartIcon className="size-6 text-white" />
      </div>
    </div>
  );
};
