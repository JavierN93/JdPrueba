import Head from 'next/head';
import { NextPage } from 'next';
import { Layout } from '../../components/layout/layout';
import { Jumbotron } from '../../components/landing/jumbotron';
import { DesignSection } from '../../components/landing/cta/design-section';
import { InstallationSection } from '../../components/landing/cta/installation-section';
import { RequestEstimateSection } from '../../components/landing/cta/request-estimate-section';

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Services | J & D Landscaping</title>
        <meta
          name="description"
          content="Have a question about our services? We'll get you the help you need. Contact us now!"
        />
      </Head>
      <Layout>
        <Jumbotron
          title="Services"
          image="/assets/images/services/header.jpg"
          blur="/assets/images/services/header-blur.png"
        />
        <section className="py-60">
          <InstallationSection />
          <DesignSection />
          {/*<MarketplaceSection />*/}
        </section>
        <RequestEstimateSection />
      </Layout>
    </>
  );
};

export default Services;
