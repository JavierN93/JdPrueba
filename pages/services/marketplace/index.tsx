import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import useGAService from '../../../core/app-services/ga-service';
import { Layout } from '../../../components/layout/layout';
import { shimmerUrl } from '../../../components/ui-kit/common/blur-image';

SwiperCore.use([Autoplay, Pagination]);

const brandsList = [
  {
    src: '/assets/images/brands/cambridge.png',
    width: 163,
    height: 56,
  },
  {
    src: '/assets/images/brands/techo-bloc.png',
    width: 128,
    height: 49,
  },
  {
    src: '/assets/images/brands/versa-lock.png',
    width: 169,
    height: 76,
  },
  {
    src: '/assets/images/brands/belgard.png',
    width: 145,
    height: 63,
  },
  {
    src: '/assets/images/brands/uni-lock.png',
    width: 168,
    height: 60,
  },
  {
    src: '/assets/images/brands/delgado-stone.png',
    width: 150,
    height: 85,
  },
  {
    src: '/assets/images/brands/eldorado-stone.png',
    width: 197,
    height: 55,
  },
  {
    src: '/assets/images/brands/rosetta.png',
    width: 170,
    height: 31,
  },
  {
    src: '/assets/images/brands/techniseal.png',
    width: 158,
    height: 44,
  },
  {
    src: '/assets/images/brands/srw.png',
    width: 104,
    height: 48,
  },
];
const howItWorksItems = [
  {
    title: 'Visit Our Digital Showroom',
    content: [
      `View photos of the most popular materials, with the best color combinations installed at homes just like yours.`,
      `Simply choose the photo(s) you like and a Hardscape consultant will reach out and guide you the rest of the way.`,
    ],
    images: [
      '/assets/images/marketplace-home/showroom1.jpg',
      '/assets/images/marketplace-home/showroom2.jpg',
      '/assets/images/marketplace-home/showroom3.jpg',
    ],
  },
  {
    title: 'Guidance from an industry expert',
    content: [
      'We want to see you succeed with your Hardscape project so we go above and beyond just selling you materials.',
      `You'll speak with a Hardscape architect who can answer the tough questions, provide 2D and 3D renderings and help you figure out everything your going to need to have a successful project. For Free`,
    ],
    images: [
      '/assets/images/marketplace-home/guide1.jpg',
      '/assets/images/marketplace-home/guide2.jpg',
      '/assets/images/marketplace-home/guide3.jpg',
    ],
  },
  {
    title: 'Order your materials online',
    content: [
      `Simplicity and efficiency are two of the pillars to our success and we want to bring that same experience to you.`,
      `Easily review your order details, make payments and schedule your delivery all from the comfort of your home.`,
    ],
    images: [
      '/assets/images/marketplace-home/order1.jpg',
      '/assets/images/marketplace-home/order2.jpg',
      '/assets/images/marketplace-home/order3.jpg',
      '/assets/images/marketplace-home/order4.jpg',
    ],
  },
];

export default function Home() {
  const gaService = useGAService();
  gaService.pageView('/');
  return (
    <>
      <Head>
        <title>J & D Landscaping Marketplace</title>
        <meta name="description" content="--site description goes here--" />
      </Head>
      <Layout>
        <section className="relative h-380">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/assets/images/services/header.jpg"
              alt="Marketplace"
              layout="fill"
              quality={100}
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-70 w-full">
            <div className="container mx-auto relative z-10">
              <h1 className="text-44 text-white text-center lg:text-left">
                Marketplace
              </h1>
            </div>
          </div>
        </section>

        <section className="pt-80 pb-90 text-center">
          <div className="container mx-auto">
            <h3 className="text-24 text-light-400 mb-50">
              The Northeast&apos;s Largest Online Marketplace for Hardscape
              Materials.
              <br />
              Work with a professional to plan and buy materials for your
              Hardscape Project.
            </h3>
            <Link href="/services/marketplace/showroom" passHref>
              <button className="btn btn-warning btn-lg mb-40 btn-sm-block">
                View Showroom
              </button>
            </Link>
          </div>
        </section>

        <section className="pt-80 pb-90 bg-light-50 text-center">
          <div className="container mx-auto">
            <h3 className="text-24 text-light-400 mb-60">
              Ensure long-lasting results with hundreds of options from leading
              brands.
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-30">
              {brandsList.map((brand, index) => (
                <div className="w-full my-25" key={index}>
                  <Image
                    src={brand.src}
                    height={brand.height}
                    width={brand.width}
                    alt="brand"
                    placeholder="blur"
                    blurDataURL={shimmerUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-80 pb-90">
          <div className="container mx-auto">
            <h2 className="text-32 text-primary text-center mb-40">
              How it works
            </h2>
            <h3 className="text-24 text-light-400 text-center mb-80 max-w-900 mx-auto">
              Order your materials through J & D Landscaping and experience
              service and guidance that far exceeds industry standards.
            </h3>

            <div>
              {howItWorksItems.map((item, itemIndex: number) => (
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 mb-100"
                  key={itemIndex}
                >
                  <div
                    className={
                      'text-light-500 flex items-center order-1 ' +
                      (itemIndex % 2 ? 'lg:order-2' : 'lg:order-1')
                    }
                  >
                    <div className="max-w-530 mx-auto lg:mx-0 text-center lg:text-left mb-40 lg:mb-0">
                      <h5 className="text-24 mb-35">{item.title}</h5>
                      {item.content.map(
                        (paragraph: string, paragraphIndex: number) => (
                          <p className="text-14 mb-20" key={paragraphIndex}>
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                  <div
                    className={
                      'order-2 ' + (itemIndex % 2 ? 'lg:order-1' : 'lg:order-2')
                    }
                  >
                    <div
                      className={
                        'max-w-600 rounded-xl shadow-lg mx-auto ' +
                        (itemIndex % 2
                          ? 'mr-auto lg:mr-30'
                          : 'ml-auto lg:ml-30')
                      }
                    >
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 4000 }}
                        pagination={{
                          el: '.swiper-pagination',
                          type: 'bullets',
                        }}
                      >
                        {item.images.map(
                          (image: string, imageIndex: number) => (
                            <SwiperSlide key={imageIndex}>
                              <div>
                                <Image
                                  className="rounded-lg overflow-hidden cursor-pointer"
                                  src={image}
                                  width="600"
                                  height="403"
                                  quality={100}
                                  layout="responsive"
                                  alt="Carousel Image"
                                />
                              </div>
                            </SwiperSlide>
                          )
                        )}
                      </Swiper>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-80 pb-90 text-white text-center relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/assets/images/services/marketplace/cta-bg.jpg"
              alt="CTA"
              layout="fill"
              quality={100}
              objectFit="cover"
            />
          </div>
          <div className="container mx-auto z-10 relative">
            <h2 className="text-32 mb-40">
              Ready to build the yard of your dreams?
            </h2>
            <h3 className="text-24 mb-50 max-w-850 mx-auto">
              Get started now by visiting our digital showroom or contact us
              directly if you have any questions.
            </h3>
            <div className="">
              <Link href="/services/marketplace/showroom" passHref>
                <button className="btn btn-warning btn-lg mr-40">
                  Visit Showroom
                </button>
              </Link>
              <Link href="/contact" passHref>
                <button className="btn btn-primary btn-lg">Contact us</button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
