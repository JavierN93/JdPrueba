import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useShowroomService from '../../../../../core/app-services/showroom-service';
import useGAService from '../../../../../core/app-services/ga-service';
import { Layout } from '../../../../../components/layout/layout';
import { ShowroomJumbotron } from '../../../../../components/landing/showroom/showroom-jumbotron';
import {
  CustomerType,
  productCategories,
  ProductCategory,
} from '../../../../../core/data/product';

export default function ShowroomCustomerType() {
  const router = useRouter();
  const { customerType } = router.query;
  const showroomService = useShowroomService();
  const gaService = useGAService();
  gaService.pageView(`/showroom/${customerType}`);
  return (
    <>
      <Head>
        <title>J & D Landscaping Showroom</title>
        <meta name="description" content="Select color" />
      </Head>
      <Layout>
        <ShowroomJumbotron />

        <section className="py-80">
          <div className="container mx-auto">
            <div className="text-center">
              <h3 className="text-24 text-primary font-bold mb-5">
                Step 1 of 3
              </h3>
              {customerType === CustomerType.InstallationCustomer ? (
                <h5 className="text-18 font-medium text-light-400 mb-20 max-w-970 mx-auto">
                  We&apos;ve made it easy for you to find and request a quote on
                  materials for your Hardscape project. Simply choose a material
                  type and color category to view the most popular material
                  combinations. Once you&apos;ve found a photo you like, simply
                  submit your contact info to request a quote and check
                  availability on the materials shown.
                </h5>
              ) : (
                <>
                  <h5 className="text-18 font-medium text-light-400 mb-15 max-w-970 mx-auto">
                    We&apos;ve made it easy for you to find and request a quote
                    on materials for your Hardscape project. Simply choose a
                    material type and color category to view the most popular
                    material combination. Once you find a material you like
                    simply submit your contact info to request a quote and check
                    on availability on the materials shown.
                  </h5>
                  <div className="max-w-1030 bg-warning-50 pt-30 pb-30 mx-auto mt-40 mb-90">
                    <h5 className="text-18 font-medium text-light-400 mb-20 max-w-970 mx-auto">
                      If you have a photo of materials you would like us to find
                      and quote or already know your materials for the project,
                      please reach out to us directly for a quote.
                    </h5>
                    <div className="">
                      <button
                        className="btn btn-warning"
                        onClick={showroomService.showShowroomDIYContactDialog}
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-30">
              {productCategories.map(
                (
                  category: {
                    title: string;
                    description: string;
                    category: ProductCategory;
                    image: string;
                  },
                  index: number
                ) => (
                  <Link
                    href={`/services/marketplace/showroom/${customerType}/${category.category}`}
                    passHref
                    key={index}
                  >
                    <div className="cursor-pointer">
                      <div className="text-white text-center rounded-none lg:rounded-xl overflow-hidden bg-light-400 w-full relative">
                        <Image
                          src={category.image}
                          width={570}
                          height={483}
                          alt={category.title}
                          layout="responsive"
                        />
                        <div className="text-center absolute w-full bottom-95 text-center">
                          <h6 className="text-24 font-bold mb-15">
                            {category.title}
                          </h6>
                          <p className="text-18">{category.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              )}
            </div>

            <div className="flex justify-center mt-80">
              <Link href={`/services/marketplace/showroom`} passHref>
                <button className="btn btn-primary">Back</button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
