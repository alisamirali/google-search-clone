"use client";

import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("searchValue");

  function selectTab(tab) {
    if (tab === "Images") {
      router.push(`/search/image?searchValue=${searchValue}`);
    } else if (tab === "All") {
      router.push(`/search/web?searchValue=${searchValue}`);
    } else if (tab === "Videos") {
      router.push(`/search/video?searchValue=${searchValue}`);
    }
  }

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/web" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>

      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/image" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>

      <div
        onClick={() => selectTab("Videos")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/video" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <MdOndemandVideo className="text-md" />
        <p>Videos</p>
      </div>
    </div>
  );
}
