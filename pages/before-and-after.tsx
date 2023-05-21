import { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import { Layout } from '../components/layout/layout';
import { Jumbotron } from '../components/landing/jumbotron';
import { RequestEstimateSection } from '../components/landing/cta/request-estimate-section';

SwiperCore.use([Navigation]);

const BeforeAndAfter: NextPage = () => {
  const [samples, setSamples] = useState(Array.from('x'.repeat(10)));

  const loadMore = () => {
    if (samples.length < 60) {
      setSamples([...samples, ...Array.from('x'.repeat(10))]);
    } else if (samples.length === 60) {
      setSamples([...samples, ...Array.from('x'.repeat(4))]);
    } else {
      // No more images...
      return;
    }
  };

  return (
    <>
      <Head>
        <title>Before & After | J & D Landscaping</title>
        <meta
          name="description"
          content="Check out some of our recent projects."
        />
      </Head>
      <Layout>
        <Jumbotron
          title="Before and After"
          image="/assets/images/before-and-after/header.jpg"
          blur="/assets/images/before-and-after/header-blur.jpg"
          center={true}
        />
        <section className="py-60">
          <div className="container mx-auto text-light-500 text-center">
            <h3 className="text-28 font-bold mb-25">
              Check out some of our recent projects
            </h3>
            <p className="mb-60">
              View the before and after of each project by swiping to the side
              or clicking the arrows.
            </p>
            {samples.map((sample, index) => (
              <div className="relative max-w-1100 mx-auto mb-25" key={index}>
                <Swiper
                  className="max-w-970"
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={{
                    nextEl: '.swiper-button-next' + ('.sample-' + (index + 1)),
                    prevEl: '.swiper-button-prev' + ('.sample-' + (index + 1)),
                  }}
                >
                  {['b', 'a'].map((status, statusIndex) => (
                    <SwiperSlide key={statusIndex}>
                      <div className="relative rounded-lg overflow-hidden">
                        <div className="absolute w-80 h-40 rounded-xl top-0 left-1/2 transform -translate-x-1/2 z-10 bg-warning text-white text-14 font-bold flex items-center justify-center">
                          <span>{status === 'a' ? 'After' : 'Before'}</span>
                        </div>
                        <div className="hidden md:block">
                          <Image
                            src={
                              '/assets/images/before-and-after/' +
                              status +
                              (index + 1) +
                              '.jpg'
                            }
                            width={970}
                            height={440}
                            layout="responsive"
                            alt="Registration"
                            placeholder="blur"
                            blurDataURL={
                              '/assets/images/before-and-after/' +
                              status +
                              (index + 1) +
                              '-blur.jpg'
                            }
                          />
                        </div>
                        <div className="block md:hidden">
                          <Image
                            src={
                              '/assets/images/before-and-after/' +
                              status +
                              (index + 1) +
                              '.jpg'
                            }
                            width={970}
                            height={550}
                            layout="responsive"
                            alt="Registration"
                            placeholder="blur"
                            blurDataURL={
                              '/assets/images/before-and-after/' +
                              status +
                              (index + 1) +
                              '-blur.jpg'
                            }
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {['next', 'prev'].map((direction, directionIndex) => (
                  <div
                    className={
                      'swiper-button-' + direction + ' sample-' + (index + 1)
                    }
                    key={directionIndex}
                  >
                    {['active', 'inactive'].map((status, statusIndex) => (
                      <div className={'icon-' + status} key={statusIndex}>
                        <Image
                          src={
                            '/assets/images/icons/' +
                            direction +
                            '-arrow-' +
                            status +
                            '.svg'
                          }
                          alt="Next"
                          width={36}
                          height={36}
                          layout="responsive"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            {samples.length < 64 && (
              <div className="mt-50">
                <button className="btn btn-primary" onClick={loadMore}>
                  Load More
                </button>
              </div>
            )}

            <div className="max-w-1000 bg-primary-50 rounded-lg overflow-hidden py-30 flex items-center justify-center mx-auto mt-90 mb-50 text-center px-10">
              <h5 className="text-28">
                Request a free estimate now to get started!
              </h5>
            </div>

            <div className="btn-wrapper justify-center mb-40">
              <Link
                href="https://estimate.jdlandscaping.net/request-estimate/step-1"
                passHref
              >
                <button className="btn btn-warning">Request Estimate</button>
              </Link>
            </div>
          </div>
        </section>
        <RequestEstimateSection />
      </Layout>
    </>
  );
};

export default BeforeAndAfter;
