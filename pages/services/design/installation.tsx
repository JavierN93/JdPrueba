import Head from 'next/head';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import useVideoDialogService from '../../../core/app-services/video-dialog-service';
import useRequestDesignEstimateService from '../../../core/app-services/request-design-estimate-service';
import useGAService from '../../../core/app-services/ga-service';
import { Layout } from '../../../components/layout/layout';
import { CustomerType } from '../../../core/data/how-it-works';
import { RequestEstimateSection } from '../../../components/landing/cta/request-estimate-section';

const carouselImages = [
  '/assets/images/installation-customers/before.jpg',
  '/assets/images/installation-customers/design.jpg',
];

export default function Installation() {
  const videoDialogService = useVideoDialogService();
  const requestDesignEstimateService = useRequestDesignEstimateService();
  const gaService = useGAService();
  gaService.pageView('/services/design/installation');
  return (
    <>
      <Head>
        <title>3D Rendering Services for Homeowners | J & D Landscaping</title>
        <meta
          name="description"
          content="We offer a free 3D Rendering of your project when you hire J & D Landscaping for hardscape installation."
        />
      </Head>
      <Layout>
        <section className="relative h-380">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/assets/images/services/design/header.jpg"
              alt="Design Service"
              placeholder="blur"
              blurDataURL="/assets/images/services/design/header-blur.png"
              layout="fill"
              quality={100}
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-70 w-full">
            <div className="container mx-auto relative z-10">
              <h1 className="text-30 lg:text-44 text-white text-center lg:text-left max-w-620">
                3D Rendering Services
              </h1>
            </div>
          </div>
        </section>
        <section className="bg-light-50">
          <div className="container mx-auto py-70">
            <h6 className="text-32 text-center mb-100">How It Works</h6>
            <div className="text-center md:text-left">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center">
                  <div>
                    <p className="text-24 text-light-500 max-w-430 mb-40">
                      Receive a Free 3D Rendering of your project when you hire
                      J & D Landscaping to install your project.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="max-w-500 mt-30 md:mt-0 rounded-lg shadow-lg overflow-hidden relative">
                    <Swiper
                      spaceBetween={20}
                      slidesPerView={1}
                      autoplay={{ delay: 4000 }}
                      pagination={{
                        el: '.before-after',
                        type: 'bullets',
                      }}
                    >
                      {carouselImages.map(
                        (image: string, imageIndex: number) => (
                          <SwiperSlide key={imageIndex}>
                            <div className="">
                              <Image
                                className="rounded-lg overflow-hidden cursor-pointer"
                                src={image}
                                width="528"
                                height="344"
                                quality={100}
                                layout="responsive"
                                alt="Carousel Image"
                              />
                            </div>
                          </SwiperSlide>
                        )
                      )}
                    </Swiper>
                    <div className="swiper-pagination-slider before-after absolute w-full h-40 bottom-0 left-0 flex justify-center items-center z-10 bg-secondary bg-opacity-30" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 my-100">
                <div className="order-2 md:order-1">
                  <div className="relative max-w-500 mt-30 md:mt-0 rounded-lg shadow-lg overflow-hidden">
                    <Image
                      src="/assets/images/installation-customers/video-frame.jpg"
                      width={528}
                      height={344}
                      alt="Complete"
                      layout="responsive"
                    />
                    <div
                      className="absolute top-1/2 left-1/2 -mt-30 -ml-30 cursor-pointer"
                      onClick={() => {
                        videoDialogService.play(
                          'https://www.youtube.com/embed/i4VcuplgScg'
                        );
                      }}
                    >
                      <Image
                        src="/assets/images/icons/youtube-icon.svg"
                        width="60"
                        height="60"
                        quality={100}
                        alt="Joe"
                      />
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex items-center">
                  <div>
                    <p className="text-24 text-light-500 max-w-430 mb-40">
                      <span className="font-medium">For larger projects:</span>{' '}
                      Take a visual walkthrough of your yard with our 3D Videos
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center">
                  <div>
                    <p className="text-24 text-light-500 max-w-430 mb-40">
                      Bring your project to life by reaching out to J & D
                      Landscaping today to set up an Estimate on your Hardscape
                      vision.{' '}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="max-w-500 mt-30 md:mt-0 rounded-lg shadow-lg overflow-hidden">
                    <Image
                      src="/assets/images/installation-customers/complete.jpg"
                      width={528}
                      height={344}
                      alt="Complete"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-50 rounded-lg overflow-hidden py-30 flex items-center justify-center mx-auto mt-100 mb-60 text-center px-10">
              <h5 className="text-28">
                Request a free estimate now to get started!
              </h5>
            </div>
            <div className="flex justify-center">
              <button
                className="btn btn-warning btn-lg"
                onClick={() =>
                  requestDesignEstimateService.showRequestDesignEstimateDialog(
                    CustomerType.InstallationCustomer
                  )
                }
              >
                Get Started
              </button>
            </div>
          </div>
        </section>
        {/*<MarketplaceSection />*/}
        <RequestEstimateSection />
      </Layout>
    </>
  );
}
