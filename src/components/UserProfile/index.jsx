import { Heading, Text, Img } from "./..";
import React from "react";

export default function UserProfile({
  userImage = "images/img_depth_8_frame_0.png",
  userDescription = (
    <>
      Mobil Uygulama <br />
      Geliştirme
    </>
  ),
  userDetails = "IOS ve Android için özelleştirilmiş ve yüksek performanslı mobil uygulamalar",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col gap-3`}>
      <Img src={userImage} alt="Feature Image" className="h-[98px] w-full rounded-[12px] object-cover" />
      <div className="flex flex-col items-center self-stretch">
        <Text as="p" className="!font-medium leading-6">
          {userDescription}
        </Text>
        <Heading size="textxs" as="p" className="self-stretch !font-normal leading-[21px] !text-lime-800">
          {userDetails}
        </Heading>
      </div>
    </div>
  );
}
