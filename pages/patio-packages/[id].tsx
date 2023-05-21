import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Layout } from '../../components/layout/layout';
import PatioPackageSelectSection from '../../components/landing/patio-packages/patio-package-select-section';
import smoothScrollTo from '../../components/ui-kit/services/smooth-scroll-to';
import { patioPackages } from '../../core/data/patio-packages';
import usePatioPackageDialogService from '../../core/app-services/patio-package-dialog-service';
import { PatioPackage } from '../../core/types/patio-package';
import { shimmerUrl } from '../../components/ui-kit/common/blur-image';

export default function PatioPackageDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<any>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const patioPackageDialog = usePatioPackageDialogService();
  useEffect(() => {
    smoothScrollTo('details', 300);
    const property = id as string;
    // @ts-ignore
    setData(patioPackages[property]);
  }, [id]);
  return (
    <>
      <Head>
        <title>
          {data
            ? data.seo.title
            : 'Signature Hardscape Packages by J & D Landscaping'}
        </title>
        <meta
          name="description"
          content={
            data
              ? data.seo.description
              : `J & D Landscaping's Hardscape Packages can be customized to fit your backyard and bring your Hardscape dream to reality.`
          }
        />
      </Head>
      <Layout>
        <PatioPackageSelectSection />
        <div id="details">
          {data ? (
            <section className="bg-light-50 py-100">
              <div className="container mx-auto">
                <h3 className="text-30 text-light-500 font-bold mb-50 text-center lg:text-left">
                  {data.label}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-5 2xl:grid-cols-10 gap-60">
                  <div className="col-span-1 lg:col-span-2 2xl:col-span-3">
                    <div
                      className="mb-20"
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                    <p className="font-bold text-light-500 mb-50">
                      Installed Prices
                    </p>
                    {data.info.map((info: any, infoIndex: number) => (
                      <div className="mb-50" key={infoIndex}>
                        <span
                          className="font-medium text-primary"
                          dangerouslySetInnerHTML={{ __html: info.label }}
                        />
                        <ul className="list-disc pl-40 mt-15 text-primary">
                          {info.options
                            ? info.options.map(
                                (option: any, optionIndex: number) => (
                                  <li
                                    className="text-primary mb-5"
                                    key={optionIndex}
                                  >
                                    <div className="flex justify-between">
                                      <span className="text-light-400">
                                        {option.label}
                                      </span>
                                      {option.price ? (
                                        <span className="text-primary font-medium w-60">
                                          ${option.pricetext}
                                        </span>
                                      ) : (
                                        ''
                                      )}
                                    </div>
                                  </li>
                                )
                              )
                            : ''}
                        </ul>
                      </div>
                    ))}
                    <p className="text-light-400 mb-30">
                      Speak to a project consultant to learn more and to discuss
                      the details of your project.
                    </p>
                    <div className="flex flex-col">
                      <button
                        className="btn btn-primary mb-10"
                        onClick={() =>
                          patioPackageDialog.showPatioPackageDialog(
                            id as PatioPackage
                          )
                        }
                      >
                        Schedule Consultation
                      </button>
                      <span className="text-warning text-10">
                        * Some restrictions apply
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1 lg:col-span-3 2xl:col-span-7">
                    <div className="grid mb-30">
                      <div className="image-frame-grid-item rounded shadow-md">
                        <Image
                          className="absolute inset-0"
                          src={
                            '/assets/images/patio-packages/' +
                            data.name +
                            '/' +
                            (selectedImageIndex + 1) +
                            '.png'
                          }
                          layout="fill"
                          placeholder="blur"
                          objectFit="cover"
                          alt={data.name}
                          blurDataURL={
                            '/assets/images/patio-packages/' +
                            data.name +
                            '/' +
                            (selectedImageIndex + 1) +
                            '-blur.png'
                          }
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 2xl:grid-cols-5 gap-20">
                      {Array.from(Array(data.imageCount)).map(
                        (obj, imageIndex) => (
                          <div
                            className="image-frame-grid-item rounded shadow-md cursor-pointer"
                            key={imageIndex}
                            onClick={() => setSelectedImageIndex(imageIndex)}
                          >
                            <Image
                              className="absolute inset-0"
                              src={
                                '/assets/images/patio-packages/' +
                                data.name +
                                '/' +
                                (imageIndex + 1) +
                                '.png'
                              }
                              layout="fill"
                              placeholder="blur"
                              objectFit="cover"
                              alt={data.name}
                              blurDataURL={shimmerUrl}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            ''
          )}
        </div>
      </Layout>
    </>
  );
}
