import { Helmet } from "react-helmet";
import { Text, Img, Button, TextArea, Input, Heading } from "../../components";
import Header from "../../components/Header";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";
import Footer from "components/footer";

const valuePropositionGrid = [
  {
    userImage: "images/img_favorite.svg",
    userFocusText: "Kullanıcı odaklılık",
    userDescription:
      "Kullanıcılarımızın ihtiyaçlarına odaklanarak, onların yaşamlarını daha iyi hale getirecek ürünler geliştiriyoruz.",
  },
  {
    userImage: "images/img_contrast.svg",
    userFocusText: "Sürekli iyileştirme",
    userDescription: "Ürünlerimizi sürekli olarak iyileştirmek için veri odaklı kararlar alıyoruz.",
  },
  {
    userImage: "images/img_settings.svg",
    userFocusText: "Ekip çalışması",
    userDescription: "Birlikte çalışarak, daha iyi sonuçlar elde ediyoruz.",
  },
  {
    userImage: "images/img_cursor.svg",
    userFocusText: "Yaratıcılık",
    userDescription: "Yaratıcı düşünme ve problem çözme becerilerini teşvik ediyoruz.",
  },
  {
    userImage: "images/img_search.svg",
    userFocusText: "Kullanıcı odaklılık",
    userDescription: "Çeşitli fikirlerin ve bakış açılarının değerini anlıyoruz ve takdir ediyoruz.",
  },
  {
    userImage: "images/img_checkmark.svg",
    userFocusText: "Kalite",
    userDescription: "En yüksek kalitede ürünler sunmayı taahhüt ediyoruz.",
  },
];

export default function AboutmePage() {
  return (
    <>
      <Helmet>
        <title>About Us - Expertise in Mobile App & Web Design</title>
        <meta
          name="description"
          content="Learn more about our mission to create carefully crafted and enjoyable user experiences that help our users achieve their goals. Explore our vision, values, and commitment to continuous improvement."
        />
      </Helmet>

      {/* about section */}
      <div className="w-full bg-white-a700">
        <div className="bg-white-a700">
          {/* navigation section */}
          <Header />
          <div className="flex flex-col items-center py-[18px]">
            <div className="container-xs md:p-5">
              <div>
                {/* introduction section */}
                <div className="p-4">
                  <div className="flex h-[480px] flex-col items-start gap-8 rounded-[12px] bg-[url(/public/images/img_depth_6_frame_0_480x928.png)] bg-cover bg-no-repeat p-6 md:h-auto sm:p-5">
                    <div className="ml-8 mt-[236px] flex flex-col gap-1.5 self-stretch md:ml-0">
                      <div className="flex">
                        <Heading size="heading2xl" as="h1" className="tracking-[-2.00px] !text-white-a700">
                          Biz kimiz?
                        </Heading>
                      </div>
                      <Text as="p" className="leading-6 !text-white-a700">
                        Mobil uygulama ve web tasarımı konusunda uzmanlaşmış bir ekibiz. Dijital dünyada kullanıcı
                        deneyimini iyileştirmek için en iyi çözümleri sunuyoruz.
                      </Text>
                    </div>
                    <Button shape="round" className="ml-8 min-w-[192px] md:ml-0">
                      Daha fazla bilgi edin
                    </Button>
                  </div>
                </div>

                {/* mission statement section */}
                <div className="flex px-4 py-2">
                  <Heading size="headinglg" as="h2" className="mt-3.5">
                    Misyonumuz
                  </Heading>
                </div>
                <Text as="p" className="leading-6">
                  Kullanıcılarımızın hedeflerini gerçekleştirmelerine yardımcı olmak için tasarlanmış, özenle
                  hazırlanmış ve eğlenceli kullanıcı deneyimleri oluşturmak.
                </Text>

                {/* vision statement section */}
                <div className="mt-3 flex px-4 py-2">
                  <Heading size="headinglg" as="h3" className="mt-3.5">
                    Vizyonumuz
                  </Heading>
                </div>
                <div>
                  <Text as="p" className="mb-2 leading-6">
                    Dijital dünyada, herkesin her şeyi kolayca yapabileceği, eğlenceli ve duyarlı tasarlanmış ürünler
                    geliştirmek. Bu sayede kullanıcılarımızın yaşamlarını daha kolay ve keyifli hale getirmek.
                  </Text>
                </div>

                {/* values section */}
                <div className="flex px-4 py-2">
                  <Heading size="headinglg" as="h4" className="mt-3">
                    Değerlerimiz
                  </Heading>
                </div>

                {/* values grid section */}
                <div className="m-4 grid grid-cols-5 justify-center gap-3 md:mx-0 md:grid-cols-3 sm:grid-cols-1">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {valuePropositionGrid.map((d, index) => (
                      <UserProfile1 {...d} key={"aboutGrid" + index} />
                    ))}
                  </Suspense>
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
