import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/layout';
import { Jumbotron } from '../../components/landing/jumbotron';
import { kits } from '../../core/data/signature-designs';

SwiperCore.use([Autoplay, Pagination]);

const SignatureDesigns: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({ bigImages: [] } as any);
  useEffect(() => {
    const all = [] as any;
    kits.forEach((type) => {
      type.kitSeries.forEach((s) => {
        s.kitDesigns.forEach((d) => all.push(d));
      });
    });
    const found = all.find((x: any) => x.designId === id);
    setData(found || { bigImages: [] });
  }, [id]);
  return (
    <>
      <Head>
        <title>Signature designs</title>
        <meta
          name="description"
          content="J & D Landscaping's Signature Designs"
        />
      </Head>
      <Layout>
        <Jumbotron
          title="Signature Designs"
          image="/assets/images/signature-designs/header.jpg"
          blur="/assets/images/signature-designs/header-blur.jpg"
          center={true}
        />
        <section className="py-60">
          <div className="container mx-auto text-light-500">
            <h3 className="text-28 font-bold mb-25 text-center">
              Check out our signature designs
            </h3>
            <Link href={`/signature-designs/`} passHref>
              <button className="btn btn-primary btn-mini mb-30">
                Go back
              </button>
            </Link>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-30">
              <div className="col-span-2 pb-50 relative">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{ delay: 4000 }}
                  pagination={{
                    el: `.swiper-pagination-slider`,
                    type: 'bullets',
                  }}
                >
                  {data.bigImages.map((image: string, i: number) => (
                    <SwiperSlide key={i}>
                      <div className="rounded-md overflow-hidden">
                        <Image
                          src={image}
                          width={1090}
                          height={613}
                          layout="responsive"
                          alt="Image"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-pagination-slider swiper-pagination-primary absolute left-1/2 transform -translate-x-1/2 bottom-0 z-10 h-40 w-full flex justify-center items-center" />
              </div>
              <div>
                <h5 className="text-24 font-bold mb-25">{data.name}</h5>
                <p className="mb-25">{data.comment}</p>
                <p className="text-primary text-18 font-bold mb-15">
                  What&apos;s included?
                </p>
                <ul className="list-disc pl-20 text-warning">
                  {data &&
                    data.included &&
                    data.included.map((item: string, index: number) => (
                      <li key={index} className="mb-10">
                        <div
                          dangerouslySetInnerHTML={{ __html: item }}
                          className="text-light-500"
                        />
                      </li>
                    ))}
                </ul>
                <p className="text-primary mt-25">
                  *Other color and material options available
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default SignatureDesigns;
