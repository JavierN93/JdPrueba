import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';
import { Layout } from '../components/layout/layout';
import { Jumbotron } from '../components/landing/jumbotron';
import { RequestEstimateSection } from '../components/landing/cta/request-estimate-section';
import HistoryTimeline from '../components/landing/history-timeline';

const timeline = [
  {
    events: [
      {
        label: '2004',
        text: 'In 2004, after saving enough money from snow and lawn the year before, Joe then purchased his first Bobcat Skid steer and entered the Hardscape business by completing small walkways and small patios after school. Joe quickly realized that he had a passion for the Hardscape industry and enjoyed the fact that each job was its own custom project that has to be detailed and designed for each customer’s taste.',
        image: '/assets/images/about/2004.png',
        height: 483,
        blur: '/assets/images/about/2004-blur.png',
      },
      {
        label: '2005',
        text: 'In 2005, once Joe had graduated from Howell Cheney Technical School, he received his first major Hardscape project which was a 9,500 square foot project at the CREC School in Bloomfield, CT. This project was the turning point in J&D Landscaping and solidified the decision by Joe to focus only on Hardscape projects. Joe’s passion has only grown more over the years and he feels Hardscaping is a skill and an art. Joe believes Hardscaping is not something that should be doneon the side or done 1 or 2 days a week in between mowing lawns and landscaping. He and his team exclusively focus on Hardscape projects and specialize in creating the specific design of your choice.',
        image: '/assets/images/about/2005.png',
        blur: '/assets/images/about/2005-blur.png',
      },
      {
        label: '2007',
        text: 'In 2007, Joe’s brother, Nick Masciovecchio joined J&D Landscaping and has been a huge part in taking the business to the next level. With Nick’s many skills which include but are not limited to, his attention to detail attitude, precise cutting skills and superior customer service, Nick has taken on a leadership role with the company and continues to strive with each completed project.',
        image: '/assets/images/about/2007.png',
        height: 483,
        blur: '/assets/images/about/2007-blur.png',
      },
      {
        label: 'Nowadays',
        text: 'With a goal of focusing strictly on Hardscape projects and listening to each customer’s wants and needs, Joe and Nick have been able to develop J&D Landscaping into what it is today; A company devoted to Quality, Efficiency and Affordability that can handle all types of Hardscape projects.',
        image: '/assets/images/about/now.png',
        blur: '/assets/images/about/now-blur.png',
      },
    ],
  },
];
const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us | J & D Landscaping</title>
        <meta
          name="description"
          content="Learn more about the history of J & D Landscaping and how it all started."
        />
      </Head>
      <Layout>
        <Jumbotron
          title="About us"
          image="/assets/images/about/header.jpg"
          blur="/assets/images/about/header-blur.png"
        />
        <section className="py-60 lg:py-100">
          <div className="container mx-auto">
            <div className="text-center">
              <p className="text-primary text-22">The History of</p>
              <h2 className="text-32 md:text-44 text-light-500 text-center mb-40 lg:mb-60">
                J & D Landscaping
              </h2>
              <div className="text-light-400 max-w-800 mx-auto">
                <p className="mb-20">
                  In 2003 at the age of 16, Joseph D. Masciovecchio started his
                  dream of becoming an entrepreneur and opened up his company
                  “J&D Landscaping” which was known as “J&D Snow Removal and
                  Lawn Care” in the early days.
                </p>
                <p>
                  The company started by focusing only on lawns and snow
                  removal. However within the first year of business, Joe
                  realized that he wanted more of a challenge than simply mowing
                  a lawn or pushing snow.
                </p>
              </div>
            </div>
            <HistoryTimeline timeline={timeline} />
            <div className="text-center">
              <Link href="/why-choose-us" passHref>
                <button className="btn btn-primary btn-sm-block">
                  Why Choose us
                </button>
              </Link>
            </div>
          </div>
        </section>
        <RequestEstimateSection />
      </Layout>
    </>
  );
};

export default About;
