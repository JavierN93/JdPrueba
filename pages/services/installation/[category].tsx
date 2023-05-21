import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Layout } from '../../../components/layout/layout';
import InstallationServiceHeaderSection from '../../../components/landing/services/installation/installation-service-header-section';
import InstallationServiceContentSection from '../../../components/landing/services/installation/installation-service-content-section';
import GenericServiceDetail from '../../../components/landing/services/installation/generic-service-detail';
import smoothScrollTo from '../../../components/ui-kit/services/smooth-scroll-to';
import InstallationServiceInlayAndBordersContent from '../../../components/landing/services/installation/installation-service-inlay-and-borders-content';
import InstallationServicePaversVsConcrete from '../../../components/landing/services/installation/installation-service-pavers-vs-concrete';
import { installationServices } from '../../../core/data/installation-services';

interface Props {
  category: string;
}

export default function InstallationServiceCategoryPage({ category }: Props) {
  const router = useRouter();
  const [data, setData] = useState(null as any);
  useEffect(() => {
    smoothScrollTo('content_root', 300, -100);
  }, [router.asPath]);
  useEffect(() => {
    Object.keys(installationServices).find((key: string) => {
      if ((installationServices as any)[key].name === category) {
        setData((installationServices as any)[key]);
        return true;
      } else {
        return false;
      }
    });
  }, [category]);
  return (
    <>
      <Head>
        <title>
          {data
            ? data.seo.title
            : 'Hardscape Installation Services | J & D Landscaping'}
        </title>
        <meta
          name="description"
          content={
            data
              ? data.seo.description
              : 'J & D Landscaping provides Hardscape Installation Services in Connecticut. Quality. Efficient. Affordable.'
          }
        />
      </Head>
      <Layout>
        <InstallationServiceHeaderSection />
        {(() => {
          return data ||
            category === 'pavers-vs-concrete' ||
            category === 'inlay-and-borders' ? (
            <InstallationServiceContentSection>
              {(() => {
                if (category === 'pavers-vs-concrete') {
                  return <InstallationServicePaversVsConcrete />;
                } else if (category === 'inlay-and-borders') {
                  return <InstallationServiceInlayAndBordersContent />;
                } else {
                  return (
                    <GenericServiceDetail
                      title={data.title}
                      description={data.description}
                      moreLink={data.moreLink}
                      name={data.name}
                      count={data.count}
                    />
                  );
                }
              })()}
            </InstallationServiceContentSection>
          ) : (
            ''
          );
        })()}
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query }: any) {
  const category = query.category as string;
  return {
    props: { category },
  };
}
