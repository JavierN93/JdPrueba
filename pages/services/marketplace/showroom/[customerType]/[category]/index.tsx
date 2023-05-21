import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useShowroomService from '../../../../../../core/app-services/showroom-service';
import { ProductCategory } from '../../../../../../core/data/product';
import useGAService from '../../../../../../core/app-services/ga-service';
import { Layout } from '../../../../../../components/layout/layout';
import { ShowroomJumbotron } from '../../../../../../components/landing/showroom/showroom-jumbotron';

export default function ShowroomProjectType() {
  const router = useRouter();
  const { customerType, category } = router.query;
  const showRoomService = useShowroomService();
  const colors = showRoomService.getColorsByCategory(
    category as ProductCategory
  );
  const gaService = useGAService();
  gaService.pageView(`/showroom/${customerType}/${category}`);
  return (
    <>
      <Head>
        <title>J & D Landscaping Showroom</title>
        <meta name="description" content="Select color" />
      </Head>
      <Layout>
        <ShowroomJumbotron />

        <section className="pt-50 pb-85">
          <div className="container mx-auto">
            <div className="text-center mb-70">
              <h4 className="text-24 font-bold text-primary mb-5">
                Step 2 of 3
              </h4>
              <h5 className="text-18 font-medium text-light-400">
                Choose a color category and search through our gallery to find
                the material combo that you like the best.{' '}
              </h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-30 gap-y-30">
              {colors.map((color, index) => (
                <Link
                  href={`/services/marketplace/showroom/${customerType}/${category}/${color.colorClass}`}
                  passHref
                  key={index}
                >
                  <div className="cursor-pointer">
                    <div className="bg-light-400 w-full text-center relative rounded">
                      <Image
                        src={color.image}
                        width={270}
                        height={226}
                        alt={color.title}
                        layout="responsive"
                      />
                      <span className="text-18 text-white font-bold absolute left-0 bottom-20 w-full">
                        {color.title}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-80">
              <Link
                href={`/services/marketplace/showroom/${customerType}`}
                passHref
              >
                <button className="btn btn-primary">Back</button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
