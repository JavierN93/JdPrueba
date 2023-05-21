import { NextPage } from 'next';
import { useMemo, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../../components/layout/layout';
import { Jumbotron } from '../../components/landing/jumbotron';
import { RequestEstimateSection } from '../../components/landing/cta/request-estimate-section';
import { kits } from '../../core/data/signature-designs';
import { DropdownSelect } from '../../components/ui-kit/input/dropdown-select';

const projectTypeOptions = [
  { value: 'patio', label: 'Patios' },
  { value: 'walkways', label: 'Walkways' },
  { value: 'pool-patio', label: 'Pool Patios' },
  { value: 'retaining-wall', label: 'Retaining Walls' },
  { value: 'stairs', label: 'Stairs' },
];

const SignatureDesignDetail: NextPage = () => {
  const [projectType, setProjectType] = useState(projectTypeOptions[0]);
  const [series, setSeries] = useState({
    value: 'economy',
    label: 'Economy Series',
  });

  const seriesOptions = useMemo(() => {
    const group = kits.find((item) => item.kitTypeId === projectType.value);
    if (!group) {
      return [];
    }
    const options = group.kitSeries.map((item) => ({
      value: item.kitSeriesId,
      label: item.name,
    }));
    setSeries(options[0]);
    return options;
  }, [projectType]);

  const results = useMemo(() => {
    const typeGroup = kits.find(
      (group) => group.kitTypeId === projectType.value
    );
    if (!typeGroup) {
      return [];
    }
    const items = typeGroup.kitSeries.find(
      (group) => group.kitSeriesId === series.value
    );
    if (!items) {
      return [];
    }
    return items.kitDesigns;
  }, [series, projectType]);

  return (
    <>
      <Head>
        <title>Signature designs</title>
        <meta
          name="description"
          content="J & D Landscaping's Signature Designs"
        />
      </Head>
      <Layout>
        <Jumbotron
          title="Signature Designs"
          image="/assets/images/signature-designs/header.jpg"
          blur="/assets/images/signature-designs/header-blur.jpg"
          center={true}
        />
        <section className="py-60">
          <div className="container mx-auto text-light-500">
            <h3 className="text-28 font-bold mb-25 text-center">
              Check out our signature designs
            </h3>
            <p className="mb-20">Filter by Project type</p>

            <div className="block md:hidden">
              <DropdownSelect
                name="projectType"
                options={projectTypeOptions}
                value={projectType.value}
                onChange={(event) => {
                  setProjectType(
                    projectTypeOptions.find(
                      (x) => x.value === event.target.value
                    ) || projectTypeOptions[0]
                  );
                }}
              />
            </div>

            <div className="hidden md:flex flex-wrap gap-20 mb-30">
              {projectTypeOptions.map((option, index) => (
                <button
                  className={
                    'btn bg-white text-primary border border-primary hover:bg-primary hover:text-white ' +
                    (projectType === option && 'btn-primary')
                  }
                  key={index}
                  onClick={() => setProjectType(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <p className="mb-20">Filter by Series</p>

            <div className="block md:hidden">
              <DropdownSelect
                name="seriesType"
                options={seriesOptions}
                value={series.value}
                onChange={(event) => {
                  setSeries(
                    seriesOptions.find((x) => x.value === event.target.value) ||
                      seriesOptions[0]
                  );
                }}
              />
            </div>

            <div className="hidden md:flex flex-wrap gap-20 mb-30">
              {seriesOptions.map((option, index) => (
                <button
                  className={
                    'btn bg-white text-warning border border-warning hover:bg-warning hover:text-white ' +
                    (series === option && 'btn-warning')
                  }
                  key={index}
                  onClick={() => setSeries(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <h6 className="text-20 font-bold mb-20">Results</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30">
              {results.map((item: any, index) => (
                <Link
                  href={`/signature-designs/${item.designId}`}
                  passHref
                  key={index}
                >
                  <div className="rounded-md bg-light-75 overflow-hidden">
                    <div className="relative">
                      <Image
                        src={item.coverImage}
                        alt={item.name}
                        width={510}
                        height={336}
                        layout="responsive"
                      />
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-30 w-60 h-60 p-20 rounded-full cursor-pointer">
                        <Image
                          src="/assets/images/signature-designs/link-external-light.svg"
                          alt="Open"
                          width={24}
                          height={24}
                          layout="responsive"
                        />
                      </span>
                    </div>
                    <div className="p-15">
                      <p className="font-bold text-black mb-10">{item.name}</p>
                      <p>{item.comment}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <RequestEstimateSection />
      </Layout>
    </>
  );
};

export default SignatureDesignDetail;
