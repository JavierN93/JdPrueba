import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '../../../components/layout/layout';
import { Jumbotron } from '../../../components/landing/jumbotron';
import { RequestEstimateSection } from '../../../components/landing/cta/request-estimate-section';
import Icon from '../../../components/ui-kit/icon';

const DesignServices: NextPage = () => {
  return (
    <>
      <Head>
        <title>3D Rendering Services | J & D Landscaping</title>
        <meta
          name="description"
          content="Looking for the best way to visualize your project? Our 3D Designs and Video Walkthroughs will bring you peace of mind when completing a Hardscape project."
        />
      </Head>
      <Layout>
        <Jumbotron
          title="3D Rendering Services"
          image="/assets/images/services/design/header.jpg"
          blur="/assets/images/services/design/header-blur.png"
        />
        <section className="bg-light-50 py-100">
          <div className="container mx-auto">
            <p className="text-16 text-light-400 max-w-830 mb-80 mx-auto text-center">
              If you&apos;re looking for the best way to articulate your idea or
              bring to life a sketched design, our 3D Rendering services for
              both homeowners and contractors offer an efficient and affordable
              solution to turn your idea into a visual reality.
            </p>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-30 text-white text-center text-20 lg:text-28 xxl:text-28">
              <Link href="/services/design/installation" passHref>
                <div className="flex items-center justify-center bg-primary rounded-xl py-25 cursor-pointer relative">
                  <span className="px-25">
                    I&apos;m hiring J & D Landscaping for
                    <br className="hidden lg:block" /> installation
                  </span>
                  <Icon
                    className="absolute right-5 transform -rotate-90"
                    name="chevron"
                    color="white"
                    size={30}
                  />
                </div>
              </Link>
              <Link href="/services/design/diy" passHref>
                <div className="flex items-center justify-center bg-primary rounded-xl py-25 cursor-pointer relative">
                  <span className="px-25">
                    I&apos;ll install the project myself/
                    <br className="hidden lg:block" /> I&apos;m a contractor
                  </span>
                  <Icon
                    className="absolute right-5 transform -rotate-90"
                    name="chevron"
                    color="white"
                    size={30}
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
        {/*<MarketplaceSection/>*/}
        <RequestEstimateSection />
      </Layout>
    </>
  );
};

export default DesignServices;
