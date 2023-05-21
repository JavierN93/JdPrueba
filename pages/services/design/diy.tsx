import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '../../../components/layout/layout';
import useGAService from '../../../core/app-services/ga-service';
import useRequestDesignEstimateService from '../../../core/app-services/request-design-estimate-service';
import useVideoDialogService from '../../../core/app-services/video-dialog-service';

const steps = [
  {
    title: 'Step 1',
    description: 'Provide us a photo of the project area',
    image: 'step-1',
  },
  {
    title: 'Step 2',
    description: 'Provide us a basic sketch of the project',
    image: 'step-2',
  },
  {
    title: 'Step 3',
    description:
      'Provide a brief description and provide the materials you would like to use',
    image: 'step-3',
  },
];

const receives = [
  {
    title: 'Receive',
    description: 'A Detailed 2D Blueprint',
    image: 'receive-1',
  },
  {
    title: 'Receive',
    description: 'A Set Of 3D Renderings',
    image: 'receive-2',
  },
];

export default function Diy() {
  const requestDesignEstimateService = useRequestDesignEstimateService();
  const videoDialogService = useVideoDialogService();
  const gaService = useGAService();
  gaService.pageView('https://design.jdlandscaping.net/diy');
  return (
    <>
      <Head>
        <title>
          3D Rendering Services for Contractors & DIYers | J & D Landscaping
        </title>
        <meta
          name="description"
          content="Work with a Hardscape Architect to plan your project and receive a detailed 2D Digital Blueprint, 3D Renderings, and a complete Materials List for your project."
        />
      </Head>
      <Layout>
        <section className="relative h-380">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/assets/images/services/design/header.jpg"
              alt="Design Service"
              layout="fill"
              placeholder="blur"
              blurDataURL="/assets/images/services/design/header-blur.png"
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
        <section>
          <div className="container max-w-1220 mx-auto py-70">
            <h6 className="text-32 text-center mb-40">How It Works</h6>
            <p className="text-16 text-center max-w-680 mx-auto text-light-400 mb-80">
              Better articulate your ideas and bring your paper sketch to life
              in 3 simple steps with J & D Landscaping’s Professional 3D
              Rendering Services.
            </p>
            <div className="text-center md:text-left max-w-1200 mx-auto">
              {steps.map((step, stepIndex) => (
                <div
                  className="grid grid-cols-1 md:grid-cols-2 my-100"
                  key={stepIndex}
                >
                  <div
                    className={
                      'flex flex-col justify-center ' +
                      (stepIndex % 2
                        ? 'order-1 lg:order-2'
                        : 'order-1 lg:order-1')
                    }
                  >
                    <p className="text-44 text-primary font-medium mb-10">
                      {step.title}
                    </p>
                    <p className="text-32 text-light-500 max-w-430 mb-20">
                      {step.description}
                    </p>
                  </div>
                  <div
                    className={
                      stepIndex % 2
                        ? 'order-2 lg:order-1'
                        : 'order-2 lg:order-2'
                    }
                  >
                    <div
                      className={
                        'max-w-500 mt-30 md:mt-0 relative rounded-lg overflow-hidden ' +
                        (stepIndex % 2 ? 'ml-0 mr-auto' : 'mx-auto')
                      }
                    >
                      <Image
                        className="rounded-lg overflow-hidden cursor-pointer"
                        src={
                          '/assets/images/diy-customers/' + step.image + '.jpg'
                        }
                        placeholder="blur"
                        blurDataURL={
                          '/assets/images/diy-customers/' +
                          step.image +
                          '-blur.png'
                        }
                        width="502"
                        height="316"
                        quality={100}
                        layout="responsive"
                        alt="Carousel Image"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-light-50">
          <div className="container max-w-1230 mx-auto py-70">
            <h6 className="text-32 text-center mb-80">What you will receive</h6>
            <div className="text-center md:text-left max-w-1200 mx-auto">
              {receives.map((receive, receiveIndex) => (
                <div
                  className="grid grid-cols-1 md:grid-cols-2 my-100"
                  key={receiveIndex}
                >
                  <div
                    className={
                      'flex flex-col justify-center ' +
                      (receiveIndex % 2
                        ? 'order-1 lg:order-2'
                        : 'order-1 lg:order-1')
                    }
                  >
                    <p className="text-44 text-primary font-medium mb-10">
                      {receive.title}
                    </p>
                    <p className="text-32 text-light-500 max-w-430 mb-20">
                      {receive.description}
                    </p>
                  </div>
                  <div
                    className={
                      receiveIndex % 2
                        ? 'order-2 lg:order-1'
                        : 'order-2 lg:order-2'
                    }
                  >
                    <div
                      className={
                        'max-w-500 mt-30 md:mt-0 relative rounded-lg overflow-hidden ' +
                        (receiveIndex % 2 ? 'ml-0 mr-auto' : 'mx-auto')
                      }
                    >
                      <Image
                        className="rounded-lg overflow-hidden cursor-pointer"
                        src={
                          '/assets/images/diy-customers/' +
                          receive.image +
                          '.jpg'
                        }
                        placeholder="blur"
                        blurDataURL={
                          '/assets/images/diy-customers/' +
                          receive.image +
                          '-blur.png'
                        }
                        width="502"
                        height="316"
                        quality={100}
                        layout="responsive"
                        alt="Carousel Image"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-1 md:grid-cols-2 my-100">
                <div className="flex flex-col justify-center">
                  <p className="text-44 text-primary font-medium mb-10">
                    Receive
                  </p>
                  <p className="text-32 text-light-500 max-w-430 mb-20">
                    A Set Of 3D Renderings
                  </p>
                </div>
                <div className="">
                  <div className="relative max-w-500 mt-30 md:mt-0 rounded-lg shadow-lg overflow-hidden mx-auto">
                    <Image
                      src="/assets/images/diy-customers/receive-3.jpg"
                      placeholder="blur"
                      blurDataURL="/assets/images/diy-customers/receive-3-blur.png"
                      width={528}
                      height={344}
                      alt="Complete"
                      layout="responsive"
                    />
                    <div
                      className="absolute top-1/2 left-1/2 -mt-30 -ml-30 cursor-pointer"
                      onClick={() => {
                        videoDialogService.play(
                          'https://www.youtube.com/embed/y4NQ3LihB4o'
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
                  <div className="max-w-500 mt-30 md:mt-0 relative rounded-lg overflow-hidden mr-0 ml-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-80 pb-90">
          <div className="container mx-auto">
            <div className="bg-primary-50 pt-35 pb-25 mb-50 px-10 max-w-1200 mx-auto">
              <p className="text-24 text-center">
                Receive all this and the guidance of a trusted industry expert
              </p>
              <p className="text-44 text-center">
                for only <span className="text-primary">$399</span>
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/submit" passHref>
                <button className="btn btn-warning btn-lg">
                  Submit Your Project
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/*<MarketplaceSection />*/}
      </Layout>
    </>
  );
}
