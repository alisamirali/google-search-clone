import Image from "next/image";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="flex justify-end items-center p-5 text-md">
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 cursor-pointer" />
        <Link
          href="https://linktr.ee/AliSamir"
          target="_blank"
          className="bg-blue-500 text-white px-4 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow"
        >
          Follow Me
        </Link>
      </div>
    </header>
  );
}
