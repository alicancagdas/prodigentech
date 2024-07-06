import { Text, Img } from "./..";
import React from "react";

export default function UserProfile1({
  userImage = "images/img_favorite.svg",
  userFocusText = "Kullanıcı odaklılık",
  userDescription = "Kullanıcılarımızın ihtiyaçlarına odaklanarak, onların yaşamlarını daha iyi hale getirecek ürünler geliştiriyoruz.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full gap-3 p-4 border-gray-300 border border-solid bg-white-a700 rounded-lg`}
    >
      <Img src={userImage} alt="Favorite Icon" className="h-[24px] w-[24px]" />
      <div className="flex flex-col gap-0.5 self-stretch">
        <div className="flex justify-center">
          <Text className="text-base font-bold">{userFocusText}</Text>
        </div>
        <Text className="text-sm font-normal leading-[21px] !text-lime-800">{userDescription}</Text>
      </div>
    </div>
  );
}
