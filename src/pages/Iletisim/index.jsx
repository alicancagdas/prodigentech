import { Helmet } from "react-helmet";
import { TextArea, Input, Button, Heading, Text } from "../../components";
import Header from "../../components/Header";
import React, { Suspense } from "react";
import Footer from "components/footer";

export default function IletisimPage() {
  return (
    <>
      <Helmet>
        <title>Bize Ulaşın - ProdGenTech Inc. ile iletişime geçin</title>
        <meta
          name="description"
          content="Sorularınız için bize ulaşın. Adınızı, e-postanızı ve mesajınızı doldurarak düşüncelerinizi veya sorularınızı bize gönderin. Ekibimizle bağlantı kurmanıza yardımcı olmak için buradayız."
        />
      </Helmet>

      <div className="w-full bg-white-a700">
        <Header />

        <div className="container-xs py-5 px-4">
          <div className="max-w-lg mx-auto" style={{ marginLeft: 0 }}>
            <Heading as="h1" className="font-bold text-3xl mb-6 text-left">
              Bizimle iletişime geçin
            </Heading>
            <div className="flex flex-col gap-4">
              <div>
                <Text as="label" className="font-medium">
                  Adınız
                </Text>
                <Input
                  shape="round"
                  type="text"
                  placeholder="Tam adınızı girin"
                  className="w-full"
                />
              </div>
              <div>
                <Text as="label" className="font-medium">
                  E-posta adresiniz
                </Text>
                <Input
                  shape="round"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full"
                />
              </div>
              <div>
                <Text as="label" className="font-medium">
                  Mesajınız
                </Text>
                <TextArea shape="round" className="w-full" />
              </div>
              <Button size="sm" shape="round" className="w-full">
                Mesajı Gönder
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center py-40">
          <Footer />
        </div>
      </div>
    </>
  );
}
