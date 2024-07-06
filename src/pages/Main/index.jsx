import { Helmet } from "react-helmet";
import { Img,Button, Heading, Text } from "../../components";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";
import Footer from "components/footer";

const serviceList = [
  {
    userImage: "images/img_depth_8_frame_0.png",
    userDescription: (
      <>
        Mobil Uygulama <br />
        Geliştirme
      </>
    ),
    userDetails: "IOS ve Android için özelleştirilmiş ve yüksek performanslı mobil uygulamalar",
  },
  {
    userImage: "images/img_depth_8_frame_0_98x176.png",
    userDescription: (
      <>
        Web Sitesi <br />
        Geliştirme
      </>
    ),
    userDetails: "Güncel teknolojilerle tasarlanmış, SEO uyumlu ve kullanıcı dostu web siteleri",
  },
  {
    userImage: "images/img_depth_8_frame_0_1.png",
    userDescription: "Yapay Zeka",
    userDetails: "Makine öğrenimi, konuşma tanıma, chatbot ve diğer yapay zeka çözümleri",
  },
];

export default function MainPage() {
  return (
    <>
      <Helmet>
        <title>Home - Innovative Web and Mobile App Development</title>
        <meta
          name="description"
          content="Discover our projects and stand out in the digital world with our web and mobile applications designed to perfect user experience through design and technology."
        />
      </Helmet>

      {/* main layout section */}
      <div className="w-full bg-white-a700">
        {/* header section */}
        <div className="bg-white-a700">
          <Header />

          {/* hero section */}
          <div className="flex flex-col items-center py-5">
            <div className="container-xs md:p-5">
              <div className="py-4">
                <div className="px-4">
                  <div className="flex h-[480px] flex-col items-start rounded-[12px] bg-[url(/public/images/img_depth_6_frame_0.png)] bg-cover bg-no-repeat px-14 py-6 md:h-auto md:px-5 sm:p-5">
                    <Heading
                      size="heading2xl"
                      as="h1"
                      className="mt-[30px] leading-[60px] tracking-[-2.00px] !text-white-a700"
                    >
                      <>
                        Dijital <br />
                        dünyada <br />
                        öne <br />
                        çıkın
                      </>
                    </Heading>
                    <Text as="p" className="mt-[62px] !text-white-a700">
                      Tasarım ve teknoloji ile kullanıcı deneyimini mükemmelleştiren web ve mobil uygulamalar
                      geliştiriyoruz
                    </Text>
                    <Button shape="round" className="mt-8 min-w-[108px] leading-6">
                      <>
                        Projeleri <br />
                        keşfet
                      </>
                    </Button>
                  </div>
                </div>

                {/* services section */}
                <div className="mt-14 flex flex-col gap-10 px-4">
                  <div className="flex flex-col gap-4">
                    <Heading as="h2" className="leading-[45px] tracking-[-1.00px]">
                      <>
                        Neler <br />
                        yapıyoruz?
                      </>
                    </Heading>
                    <div className="flex">
                      <Text as="p" className="self-end">
                        Farklı sektörlerdeki müşterilerimizin ihtiyaçlarına uygun özelleştirilmiş dijital çözümler
                        üretiyoruz
                      </Text>
                    </div>
                  </div>

                  {/* projects showcase section */}
                  <div className="flex gap-3 md:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {serviceList.map((d, index) => (
                        <UserProfile
                          {...d}
                          key={"featuresList" + index}
                          className="mb-3 w-[18%] md:mb-0 md:w-full md:gap-3"
                        />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
