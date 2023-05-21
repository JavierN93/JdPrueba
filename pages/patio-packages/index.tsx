import { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '../../components/layout/layout';
import PatioPackageSelectSection from '../../components/landing/patio-packages/patio-package-select-section';

const PatioPackages: NextPage = () => {
  return (
    <>
      <Head>
        <title>Signature Hardscape Packages by J & D Landscaping</title>
        <meta
          name="description"
          content="J & D Landscaping's Hardscape Packages can be customized to fit your backyard and bring your Hardscape dream to reality."
        />
      </Head>
      <Layout>
        <PatioPackageSelectSection />
      </Layout>
    </>
  );
};

export default PatioPackages;
