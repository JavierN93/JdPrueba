import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useGAService from '../../../../core/app-services/ga-service';
import { Layout } from '../../../../components/layout/layout';
import { ShowroomJumbotron } from '../../../../components/landing/showroom/showroom-jumbotron';
import { CustomerType, customerTypes } from '../../../../core/data/product';

export default function Showroom() {
  const gaService = useGAService();
  gaService.pageView('/showroom');
  return (
    <>
      <Head>
        <title>J & D Marketplace Showroom</title>
        <meta
          name="description"
          content="Choose from a variety of patio and retaining walls for any budget and taste to create the perfect outdoor living space."
        />
      </Head>
      <Layout>
        <ShowroomJumbotron />
        <section className="py-80">
          <div className="container mx-auto">
            <div className="text-center">
              <h3 className="text-24 text-light-400 mb-50">
                Welcome to J & D Landscaping&apos;s Virtual Hardscape Showroom.
              </h3>
              <h4 className="text-24 font-bold text-primary mb-5">
                Getting Started
              </h4>
              <h5 className="text-18 font-medium text-light-400 mb-50">
                First, please tell us which customer type describes you more.
              </h5>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-30">
              {customerTypes.map(
                (
                  customerType: {
                    title: string;
                    type: CustomerType;
                    image: string;
                  },
                  index: number
                ) => (
                  <Link
                    href={`/services/marketplace/showroom/${customerType.type}`}
                    passHref
                    key={index}
                  >
                    <div className="relative cursor-pointer rounded-none lg:rounded-xl overflow-hidden">
                      <div className="text-white text-center absolute w-full bottom-75 text-center z-30">
                        <h6 className="text-24 font-bold mb-15 max-w-500 mx-auto">
                          {customerType.title}
                        </h6>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black opacity-60 z-20" />
                      <div className="bg-light-400 relative z-10">
                        <Image
                          src={customerType.image}
                          width={570}
                          height={483}
                          alt={customerType.title}
                          layout="responsive"
                        />
                      </div>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
