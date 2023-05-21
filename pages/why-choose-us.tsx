import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../components/layout/layout';
import { Jumbotron } from '../components/landing/jumbotron';
import { shimmerUrl } from '../components/ui-kit/common/blur-image';
import { useState } from 'react';
import ProjectManagement from '../components/landing/project-management';
import { InstallationProcess } from '../components/landing/installation-process';
import smoothScrollTo from '../components/ui-kit/services/smooth-scroll-to';

const factors = [
  {
    image: '/assets/images/icons/green-rect/quality.svg',
    title: 'We are Quality',
    text: '“It’s all in the Base” This is the quote that means the most in the Hardscape industry. No matter what paver choice, style, color or pattern a customer chooses, if the base is done wrong the project will fail and cause problems over time. J&D Landscaping takes the proper steps to ensure a base that will stand the test of time and hold up to New England weather.',
  },
  {
    image: '/assets/images/icons/green-rect/efficient.svg',
    title: 'We are Efficient',
    text: 'J & D Landscaping completes well over 100+ Hardscape projects per season which is an accomplishment that even larger companies have trouble doing without having to sacrifice quality, restrict choice of material or take weeks to complete. J&D Landscaping knows that customers want projects completed in a timely fashion so by working efficiently on each project they are able to ensure that can happen.',
  },
  {
    image: '/assets/images/icons/green-rect/affordable.svg',
    title: 'We are Affordable',
    text: 'J & D Landscaping is a small business with an efficient installation process and we pass the savings onto our customers. Due to the lower overhead of a smal l company, our efficiency and partner agreements with our suppliers that we have built over the years, we simply are able to provide better pricing compared to the larger companies who have much higher overhead cost.',
  },
];

const tabs = [
  { label: 'Project Management', value: 'PROJECT_MANAGEMENT' },
  { label: 'Installation Process', value: 'INSTALLATION_PROCESS' },
];

const WhyChooseUs: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);
  const updateTabState = (value: any) => {
    setSelectedTab(value);
    smoothScrollTo('how-it-works', 500);
  };
  return (
    <>
      <Head>
        <title>Why Choose Us | J & D Landscaping</title>
        <meta
          name="description"
          content="Find out what makes J & D Landscaping different and how our process works."
        />
      </Head>
      <Layout>
        <Jumbotron
          title="Why choose us"
          image="/assets/images/why-choose-us/header.jpg"
          blur="/assets/images/why-choose-us/header-blur.png"
        />
        <section className="py-60 lg:py-100">
          <div className="container mx-auto">
            <div className="text-center">
              <p className="text-primary text-22">What Makes</p>
              <h2 className="text-32 md:text-44 text-light-500 text-center mb-40 lg:mb-60">
                J & D Landscaping different?
              </h2>
            </div>
            <div className="grid xl:grid-cols-3">
              {factors.map((item, i) => (
                <div key={i}>
                  <div className="flex flex-col items-center text-center px-20">
                    <div className="mb-30 xl:mb-50">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={106}
                        height={106}
                        placeholder="blur"
                        blurDataURL={shimmerUrl}
                      />
                    </div>
                    <h2 className="text-30 font-bold text-light-500 mb-30 xl:mb-50">
                      {item.title}
                    </h2>
                    <p className="text-light-500 mb-40">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-50">
              <Link
                href="https://estimate.jdlandscaping.net/request-estimate/step-1"
                passHref
              >
                <button className="btn btn-primary btn-sm-block">
                  Request Estimate
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <h2
            className="text-32 md:text-44 text-light-500 text-center mb-40 lg:mb-60"
            id="how-it-works"
          >
            How it works
          </h2>
          <div className="grid md:grid-cols-2">
            {tabs.map((tab, i) => (
              <div
                key={i}
                className={
                  'cursor-pointer flex items-center justify-center hover:bg-light-50 h-80 xl:h-120 ' +
                  (tab.value === selectedTab ? 'bg-light-50' : 'bg-white')
                }
                onClick={() => setSelectedTab(tab.value)}
              >
                <h1
                  className={
                    'text-22 xl:text-38 m-0 ' +
                    (tab.value === selectedTab
                      ? 'text-primary'
                      : 'text-light-400')
                  }
                >
                  {tab.label}
                </h1>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-light-50 pt-80 pb-100">
          <div className="container mx-auto">
            {selectedTab === tabs[0].value && (
              <ProjectManagement
                onViewClicked={() => updateTabState(tabs[1].value)}
              />
            )}
            {selectedTab === tabs[1].value && (
              <InstallationProcess
                onViewClicked={() => updateTabState(tabs[0].value)}
              />
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WhyChooseUs;
