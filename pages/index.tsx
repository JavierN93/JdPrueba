import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import { Layout } from '../components/layout/layout';
import { DesignSection } from '../components/landing/cta/design-section';
import { shimmerUrl } from '../components/ui-kit/common/blur-image';
import { RequestEstimateSection } from '../components/landing/cta/request-estimate-section';
import useServiceSelectionService from '../core/app-services/service-selection-service';

SwiperCore.use([Autoplay, Pagination]);

const carouselImages = [
  {
    main: '/assets/images/home/carousel-1.jpg',
    blur: '/assets/images/home/carousel-1-blur.png',
  },
  {
    main: '/assets/images/home/carousel-2.jpg',
    blur: '/assets/images/home/carousel-2-blur.png',
  },
  {
    main: '/assets/images/home/carousel-3.jpg',
    blur: '/assets/images/home/carousel-3-blur.png',
  },
];

const testimonial = [
  {
    text: 'J & D Landscaping is a wonderful company to work with. We had a patio installed and it looks fantastic.  Nick has great vision on what the project will look like. He is a true artist. The team does high quality work and it shows....not just in their final product but also the process and how they worked the equipment. They were very respectful of the property. They are highly recommended and just great people to work with.',
    name: 'Melanie Ho',
    address: '',
  },
  {
    text: 'The work they performed was excellent. The before and after on my patio is truly astonishing.',
    name: 'Tyler Wheelock',
    address: '',
  },
  {
    text: "J & D Landscaping did a fabulous job on our patio! We couldn't be happier! They are very professional and workmanship is top notch. I highly recommend them!",
    name: 'Kenneth Cajigas',
    address: '',
  },
  {
    text: 'JD does excellent work. His work has tremendous style and they let you pick whatever materials you want. His crew is also extremely efficient which is nice nowadays. My patio and retaining wall came out great. His pricing is also fair, not out of control and expensive right in the middle somewhere.',
    name: 'Santiago Garcia',
    address: '',
  },
  {
    text: 'This has to be the best company I have ever worked with. Very professional, extremely fast, able to fit me in on a busy schedule, arrived early, constantly communicated and the paver patio I had done turned out perfect. Came with an excellent warranty. Price was lower than 6 different quotes I received! I could not ask for more. Extremely satisfied!',
    name: 'Joshua Lamb',
    address: '',
  },
];

const partners = [
  {
    image: '/assets/images/logos/icpi.svg',
    name: 'icpi',
    width: 106,
    height: 90,
  },
  {
    image: '/assets/images/logos/techo-pro.svg',
    name: 'techo-pro',
    width: 155,
    height: 68,
  },
  {
    image: '/assets/images/logos/belgard.svg',
    name: 'belgard',
    width: 157,
    height: 63,
  },
  {
    image: '/assets/images/logos/versalok.svg',
    name: 'versalok',
    width: 156,
    height: 63,
  },
  {
    image: '/assets/images/logos/cambridge.svg',
    name: 'cambridge',
    width: 177,
    height: 63,
  },
];

const Home: NextPage = () => {
  const serviceSelectionService = useServiceSelectionService();

  // XXX: Do not show dialog at the moment. From Alex.
  // useEffect(() => {
  //   const servicePopup = sessionStorage.getItem('service-popup');
  //   if (!servicePopup) {
  //     const timer = setTimeout(
  //       () => serviceSelectionService.showServiceSelectionDialog(),
  //       5000
  //     );
  //     sessionStorage.setItem('service-popup', String(true));
  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>J & D Landscaping</title>
        <meta
          name="description"
          content="J & D Landscaping provides Hardscape Installation Services in Connecticut and Online Design Services nationwide. 17 years in business. 1,000+ projects completed."
        />
      </Head>
      <Layout>
        <section className="relative">
          <Swiper
            className="absolute w-full h-full"
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            loop={true}
            pagination={{ el: `.jumbotron`, type: 'bullets' }}
          >
            {carouselImages.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  className="h-full"
                  src={image.main}
                  layout="fill"
                  objectFit="cover"
                  alt="Jumbotron"
                  placeholder="blur"
                  blurDataURL={image.blur}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination jumbotron absolute w-full h-40 bottom-0 left-0 flex justify-center items-center z-10 bg-secondary bg-opacity-10" />
          <div className="relative pt-140 pb-40 lg:pt-300 lg:pb-200 w-full h-full z-10">
            <div className="container mx-auto">
              <div className="inline-block rounded-lg text-white my-30 pt-20 px-30 pb-30 bg-black bg-opacity-40">
                <h1 className="text-32 md:text-44 mb-30">
                  Quality. Efficient. Affordable
                </h1>
                <div className="text-14 font-medium mb-40">
                  <p className="mb-20">
                    Are you looking to get a quote on an upcoming Hardscape
                    project?
                  </p>
                  <p className="mb-20">
                    We&apos;ve made it easier than ever to get an idea of what
                    to budget for your project.
                    <br className="hidden md:block" />
                    Simply tell us what you have in mind and a project
                    consultant will reach out to you
                    <br className="hidden md:block" />
                    to discuss pricing and answer any questions.
                  </p>
                  <p>
                    You can also check out our Patio Packages section to view
                    signature designs.
                  </p>
                </div>
                <div className="btn-wrapper">
                  <Link
                    href="https://estimate.jdlandscaping.net/request-estimate/step-1"
                    passHref
                  >
                    <button className="btn btn-primary">
                      Request Estimate
                    </button>
                  </Link>
                  <Link href="/patio-packages" passHref>
                    <button className="btn btn-warning">Patio Packages</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-60 pb-60 md:pb-100">
          <div className="container mx-auto">
            <h2 className="text-32 md:text-44 text-light-500 text-center mb-40 lg:mb-80">
              About Us
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="order-2 lg:order-1 text-center lg:text-left flex items-center">
                <div>
                  <h3 className="text-30 text-light-500 font-bold mb-45">
                    The History of
                    <br /> J & D Landscaping
                  </h3>
                  <p className="text-light-400 font-medium mb-50 lg:max-w-455">
                    In 2003 at the age of 16, Joseph D. Masciovecchio started
                    his dream of becoming an entrepreneur and opened up his
                    company “J&D Landscaping” which was known as “J&D Snow
                    Removal and Lawn Care” in the early days.
                  </p>
                  <div>
                    <Link href="/about" passHref>
                      <button className="btn btn-primary btn-sm-block">
                        Learn more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 mb-30">
                <div className="max-w-670 mx-auto">
                  <Image
                    src="/assets/images/home/history.png"
                    width={670}
                    height={390}
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL="/assets/images/home/history-blur.png"
                    alt="History"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light-50 pt-60 lg:pt-100">
          <div className="container mx-auto text-center">
            <h2 className="text-32 md:text-44 text-light-500 mb-40 lg:mb-80">
              How our platform works
            </h2>
            <div className="flex flex-col">
              <div className="order-2 lg:order-1">
                <p className="text-light-400 font-medium mb-50 max-w-830 mx-auto">
                  A hardscaping project is an investment, it takes time to plan,
                  coordinate, budget, design and so much more. It’s a process
                  that has many steps, given our experience and expertise in the
                  Hardscape industry and our passion for efficiency we have
                  digitized much of this process to help provide customers a
                  better experience even before their project starts.
                </p>
                <div>
                  <Link href="/why-choose-us" passHref>
                    <button className="btn btn-primary btn-sm-block">
                      Learn more
                    </button>
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2 mt-0 mb-30 lg:mt-70 lg:mb-0">
                <Image
                  src="/assets/images/home/laptop.png"
                  width={2000}
                  height={1298}
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL="/assets/images/home/laptop-blur.png"
                  alt="History"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-60 lg:py-100">
          <div className="container mx-auto text-center">
            <h2 className="text-32 md:text-44 text-light-500 mb-40 lg:mb-80">
              Our Installation Services
            </h2>
            <p className="text-light-400 font-medium mb-50 max-w-830 mx-auto">
              J & D Landscaping provides a line of services within the Hardscape
              industry, with thousands of projects completed and over 16 years
              in business we are leaders in the industry and are considered
              hardscape specialists. Please view our services and projects
              below.
            </p>
          </div>
          <div className="container mx-auto text-center">
            <Link href="/idea-board" passHref>
              <button className="btn btn-primary btn-sm-block">
                Idea Board
              </button>
            </Link>
          </div>
        </section>
        <DesignSection />
        {/*<MarketplaceSection />*/}
        <section className="bg-light-50 py-60 lg:py-100">
          <div className="container mx-auto text-center">
            <h2 className="text-25 md:text-33 lg:text-44 text-light-500 mb-40 lg:mb-80">
              Quality you can Trust at a price you can Afford
            </h2>
            <div className="flex justify-around items-center flex-wrap">
              {partners.map((item, i) => (
                <div
                  key={i}
                  className="w-1/2 md:w-1/5 flex justify-center mb-50 lg:mb-0"
                >
                  <Image
                    src={item.image}
                    height={item.height}
                    width={item.width}
                    alt={item.name}
                    placeholder="blur"
                    blurDataURL={shimmerUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-60 lg:py-100 relative">
          <div className="container mx-auto text-center">
            <h2 className="text-32 md:text-44 text-light-500 mb-40">
              They trust us
            </h2>
            <p className="text-light-400 font-medium mb-50 max-w-830 mx-auto">
              Join the over <b className="text-primary">25K followers</b> on
              instagram to see the most recent jobs we have completed
            </p>
            <Swiper
              className=""
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              pagination={{ el: `.testimonial`, type: 'bullets' }}
            >
              {testimonial.map((content, index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-780 mx-auto rounded-lg bg-primary text-center px-20 lg:px-70 py-30 lg:py-60">
                    <div className="w-45 mx-auto mb-40">
                      <Image
                        src="/assets/images/icons/quote.svg"
                        width={46}
                        height={32}
                        layout="responsive"
                        alt="Quote"
                      />
                    </div>
                    <div className="text-16 text-white">
                      <p className="font-medium mb-50">{content.text}</p>
                      <p className="font-bold">{content.name}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination testimonial absolute w-full h-40 bottom-0 left-0 flex justify-center items-center z-10 bg-secondary bg-opacity-30" />
          </div>
        </section>
        <RequestEstimateSection />
      </Layout>
    </>
  );
};

export default Home;
