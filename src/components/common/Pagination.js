import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

export const Pagination = ({ currentPage, totalPages, goToPage }) => {
  return (
    <div className="flex items-center gap-x-2">
      {/* Previous Page button */}
      <button
        className={clsx(
          "bg-gray-200 p-2 disabled:opacity-50",
          currentPage === 1 && "opacity-50 cursor-not-allowed",
        )}
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        <ChevronLeftIcon className="size-6" />
      </button>
      {/* Previous Page number */}
      {currentPage > 1 && totalPages > 1 && (
        <span
          onClick={() => goToPage(currentPage - 1)}
          className="text-gray-500 border px-4 py-2 cursor-pointer"
        >
          {currentPage - 1}
        </span>
      )}
      {/* Current Page number */}
      <span className="bg-black text-white border px-4 py-2">
        {currentPage}
      </span>
      {currentPage < totalPages - 1 && totalPages > 1 && (
        <span
          onClick={() => goToPage(currentPage + 1)}
          className="text-gray-500 border px-4 py-2 cursor-pointer"
        >
          {currentPage + 1}
        </span>
      )}
      {/* Ellipsis */}
      {currentPage < totalPages - 2 && totalPages > 1 && (
        <span className="text-gray-500 border px-4 py-2">...</span>
      )}
      {/* Last Page number */}
      {totalPages > currentPage && (
        <span
          onClick={() => goToPage(totalPages)}
          className="text-gray-500 border px-4 py-2 cursor-pointer"
        >
          {totalPages}
        </span>
      )}
      {/* Next Page button */}
      <button
        className={clsx(
          "bg-gray-200 p-2 disabled:opacity-50",
          currentPage === totalPages && "opacity-50 cursor-not-allowed",
        )}
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
      >
        <ChevronRightIcon className="size-6" />
      </button>
    </div>
  );
};
