import Head from 'next/head';
import { NextPage } from 'next';
import { Layout } from '../../components/layout/layout';
import { Jumbotron } from '../../components/landing/jumbotron';
import {
  DrainageType,
  MachineAccessType,
  ProjectAccessoryType,
  ProjectLocationType,
  ProjectShapeType,
  ProjectTimelineType,
  PropertyGradeType,
  SoilType,
} from '../../core/types/project';
import { Option } from '../../core/types/option';
import { enumToOptions } from '../../components/ui-kit/utils';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Input } from '../../components/ui-kit/input/input';
import { DropdownSelect } from '../../components/ui-kit/input/dropdown-select';

const RequestEstimateStep1: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const projectAccessoryTypes: Option<ProjectAccessoryType>[] =
    enumToOptions<ProjectAccessoryType>(ProjectAccessoryType);
  const projectLocationTypes: Option<ProjectLocationType>[] =
    enumToOptions<ProjectLocationType>(ProjectLocationType);
  const projectShapeTypes: Option<ProjectShapeType>[] =
    enumToOptions<ProjectShapeType>(ProjectShapeType);
  const machineAccessTypes: Option<MachineAccessType>[] =
    enumToOptions<MachineAccessType>(MachineAccessType);
  const propertyGradeTypes: Option<PropertyGradeType>[] =
    enumToOptions<PropertyGradeType>(PropertyGradeType);
  const soilTypes: Option<SoilType>[] = enumToOptions<SoilType>(SoilType);
  const drainageTypes: Option<DrainageType>[] =
    enumToOptions<DrainageType>(DrainageType);
  const projectTimelineTypes: Option<ProjectTimelineType>[] =
    enumToOptions<ProjectTimelineType>(ProjectTimelineType);

  const form = useFormik({
    initialValues: {
      projects: [
        {
          name: '',
          address: '',
          latitude: 0,
          longitude: 0,
          projectType: '',
          locationType: '',
          projectSize: '',
          shapeType: '',
          accessories: [],
          machineAccess: '',
          propertyGrade: '',
          soilType: '',
          drainageType: '',
          timelineType: '',
          budget: '',
          attachments: [],
          comment: '',
        },
      ],
    },
    validationSchema: null,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      <Head>
        <title>J & D Landscaping</title>
        <meta name="description" content="J & D Landscaping" />
      </Head>
      <Layout>
        <Jumbotron
          title=""
          image="/assets/images/request-estimate/header.jpg"
          blur="/assets/images/request-estimate/header-blur.png"
        />
        <section className="py-100">
          <div className="container mx-auto">
            <div className="text-center">
              <p className="text-primary font-medium">Step 1 of 4</p>
              <h3 className="text-light-500 font-bold text-30 mb-40">
                Tell us what you need done
              </h3>
              <p className="text-light-400 mb-40">
                Fill out the below information to the best of your ability
              </p>
            </div>
            <form className="max-w-500 mx-auto" onSubmit={form.handleSubmit}>
              <Input
                name="projects[0].name"
                label="Choose a name of your project"
                placeholder="Project name"
                value={form.values.projects[0].name}
                onChange={form.handleChange}
              />
              <Input
                name="projects[0].address"
                label="What is the address of your project?"
                placeholder="Address"
                value={form.values.projects[0].address}
                onChange={form.handleChange}
              />
              <DropdownSelect
                name="project[0].projectType"
                label="Project Type"
                placeholder="Project Type"
                options={projectAccessoryTypes}
                value={form.values.projects[0].projectType}
                onChange={form.handleChange}
              />
              <DropdownSelect
                name="project[0].locationType"
                label="Project location on property"
                placeholder="Location Type"
                options={projectLocationTypes}
                value={form.values.projects[0].locationType}
                onChange={form.handleChange}
              />
              <Input
                name="projects[0].projectSize"
                label="Approx size of project (Square footage)"
                placeholder="Address"
                value={form.values.projects[0].projectSize}
                onChange={form.handleChange}
              />
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default RequestEstimateStep1;
