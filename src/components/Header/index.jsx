import { Text, Img } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col justify-between items-center gap-5 px-10 py-3 sm:px-5 border-gray-200 border-b border-solid`}
    >
      <a href="/">
        <img src="images/img_header_logo.png" alt="Header Logo" className="h-[22px] w-[152px] object-contain" />
      </a>
      <div className="flex justify-center">
        <ul className="flex flex-wrap items-center gap-5">
          <li>
            <a href="/iletisim" className="cursor-pointer">
              <Text className="px-2 py-2.5 text-sm font-medium hover:rounded-[12px] hover:bg-teal-600 hover:font-bold hover:text-white-a700">
                İletişim
              </Text>
            </a>
          </li>
          <li>
            <a href="/aboutme" className="cursor-pointer">
              <Text className="px-2 py-2.5 text-sm font-medium hover:rounded-[12px] hover:bg-teal-600 hover:font-bold hover:text-white-a700">
                Hakkımızda
              </Text>
            </a>
          </li>
          <li>
            <a href="/" className="cursor-pointer">
              <Text className="px-2 py-2.5 text-sm font-medium hover:rounded-[12px] hover:bg-teal-600 hover:font-bold hover:text-white-a700">
                Ana Sayfa
              </Text>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
