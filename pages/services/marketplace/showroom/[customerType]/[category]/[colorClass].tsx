import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import {
  ColorClass,
  CustomerType,
  ProductCategory,
} from '../../../../../../core/data/product';
import useShowroomService from '../../../../../../core/app-services/showroom-service';
import useImagePreview from '../../../../../../components/ui-kit/dialog/use-image-preview';
import useAlert from '../../../../../../components/ui-kit/dialog/use-alert';
import useGAService from '../../../../../../core/app-services/ga-service';
import { Layout } from '../../../../../../components/layout/layout';
import { ShowroomJumbotron } from '../../../../../../components/landing/showroom/showroom-jumbotron';
import Icon from '../../../../../../components/ui-kit/icon';

interface Props {
  customerType: CustomerType;
  category: ProductCategory;
  colorClass: ColorClass;
}

export default function ProductLists({
  customerType,
  category,
  colorClass,
}: Props) {
  const showroomService = useShowroomService();
  const imagePreview = useImagePreview();
  const alert = useAlert();
  const [page, setPage] = useState<number>(0);
  const products = useMemo(
    () => showroomService.getProducts(category, colorClass, 0, 9 * (page + 1)),
    [page, category, colorClass]
  );
  const gaService = useGAService();
  gaService.pageView(
    `/services/marketplace/showroom/${customerType}/${category}/${colorClass}`
  );
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
        <section className="pt-50 pb-95">
          <div className="container mx-auto">
            <div className="text-center mb-70">
              <h4 className="text-24 font-bold text-primary mb-5">
                Step 3 of 3
              </h4>
              {customerType === CustomerType.InstallationCustomer ? (
                <h5 className="text-18 font-medium text-light-400 mb-20">
                  When you&apos;ve found the photo of the materials you like,
                  simply click &ldquo;Save photo&rdquo;, and the photo will be
                  saved to your account so your Project Consultant can go over
                  the details with you.
                </h5>
              ) : (
                <h5 className="text-18 font-medium text-light-400 mb-20">
                  When you&apos;ve found the photo of the materials you like
                  simply click &ldquo;Request a quote&rdquo; and we will reach
                  out to you to go over all the details and help you put
                  together your order.
                </h5>
              )}
              <div className="flex justify-center items-center">
                <Icon className="mr-5" name="bookmark" />
                <h5 className="text-18 font-medium text-primary">
                  Look at colors, borders, and overall size of the materials to
                  determine what&apos;s best for your yard.
                </h5>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-30 gap-y-30">
              {products.map((product, index) => (
                <div key={index}>
                  <div className="group w-full relative bg-light-400">
                    <Image
                      src={product.image}
                      width={900}
                      height={675}
                      alt={product.id}
                      layout="responsive"
                    />
                    <div className="opacity-100 md:opacity-0 group-hover:opacity-100 absolute top-0 bottom-45 left-0 w-full flex flex-col items-center justify-between">
                      <div />
                      <div className="flex flex-col items-center justify-center">
                        <Icon
                          className="mb-20 cursor-pointer"
                          name="external_link"
                          color="white"
                          size={30}
                          onClick={() =>
                            imagePreview.preview(product.image, product.id)
                          }
                        />
                        <button
                          className="btn btn-warning"
                          onClick={() =>
                            showroomService.showShowroomSubmitDialog(
                              customerType,
                              category,
                              colorClass,
                              product.id
                            )
                          }
                        >
                          {customerType === CustomerType.InstallationCustomer
                            ? 'Save Photo'
                            : 'Request a Quote'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-80">
              <Link
                href={`/services/marketplace/showroom/${customerType}/${category}`}
              >
                <button className="btn btn-primary mr-30">Back</button>
              </Link>
              <button
                className="btn btn-warning"
                onClick={() => setPage(page + 1)}
              >
                Load more Images
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query }: any) {
  const customerType = query.customerType as CustomerType;
  const category = query.category as ProductCategory;
  const colorClass = query.colorClass as ProductCategory;
  return {
    props: { customerType, category, colorClass },
  };
}
