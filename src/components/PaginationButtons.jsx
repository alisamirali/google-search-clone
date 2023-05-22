"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("searchValue");
  const startIndex = +searchParams.get("start") || 1;
  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchValue=${searchValue}&start=${
            startIndex - 10
          }`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchValue=${searchValue}&start=${
            startIndex + 10
          }`}
        >
          <div className="flex cursor-pointer items-center gap-2 hover:underline">
            <p>Next</p>
            <BsChevronRight className="h-5" />
          </div>
        </Link>
      )}
    </div>
  );
}
