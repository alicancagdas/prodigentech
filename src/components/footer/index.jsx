import React from "react";
import { Text } from "./.."; // Bağlantılarınızın doğru yollarını düzenlemeniz gerekiyor.

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex w-[20%] flex-col items-center gap-6 md:w-full`}>
      <div className="mx-11 flex justify-center gap-4 self-stretch md:mx-0">
        <a href="https://www.linkedin.com/in/alicancagdas/">
          <img src="images/img_user.svg" alt="User Icon" className="h-[24px] w-[24px]" />
        </a>
        <a href="https://www.linkedin.com/in/alicancagdas/">
          <img src="images/img_link.svg" alt="Link Icon" className="h-[24px] w-[24px]" />
        </a>
        <a href="https://github.com/alicancagdas?tab=repositories">
          <img src="images/img_thumbs_up.svg" alt="Thumbs Up Icon" className="h-[24px] w-[24px]" />
        </a>
      </div>
      <Text as="p" className="!font-spacegrotesk !text-lime-800">
        © 2023 ProdGenTech Inc.
      </Text>
    </footer>
  );
}
