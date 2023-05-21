import { NextPage } from 'next';
import Head from 'next/head';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../components/layout/layout';
import { Jumbotron } from '../components/landing/jumbotron';
import { Input } from '../components/ui-kit/input/input';
import { PhoneInput } from '../components/ui-kit/input/phone-input';
import { accessoryTypes } from '../core/data/accessory-types';
import { TextArea } from '../components/ui-kit/input/textarea';
import { PhotoUploader } from '../components/ui-kit/input/photo-uploader';
import smoothScrollTo from '../components/ui-kit/services/smooth-scroll-to';
import useAlert from '../components/ui-kit/dialog/use-alert';
import Spinner from '../components/ui-kit/common/spinner';
import { AlertAction } from '../components/ui-kit/dialog/alert-dialog';
import { leadApiService } from '../core/api-services/lead-api.service';

const Submit: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const accessoryTypeOptions = [...accessoryTypes];
  const alertService = useAlert();
  const router = useRouter();
  const schema = Yup.object().shape({
    company: Yup.object().shape({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.string().required('Required'),
    }),
    project: Yup.object().shape({
      name: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      photos: Yup.array().min(1, 'At 1 photo should be provided'),
      sketches: Yup.array().min(1, 'At 1 sketch should be provided'),
    }),
  });
  const form = useFormik({
    initialValues: {
      company: {
        name: '',
        email: '',
        phone: '',
        logo: [],
      },
      project: {
        name: '',
        address: '',
        description: '',
        comment: '',
        photos: [],
        sketches: [],
        material: '',
        additional: '',
        question: '',
      },
    },
    validationSchema: schema,
    onSubmit: async (value) => {
      try {
        setIsLoading(true);
        smoothScrollTo('form', 300);
        await leadApiService.submitDesignProject(value);
        const actions: AlertAction[] = [
          {
            caption: 'Back Home',
            className: 'btn-primary',
            onClick: () => {
              router.push('/');
            },
          },
          {
            caption: 'Send another Project',
            className: 'btn-warning',
            onClick: () => {
              location.reload();
            },
          },
        ];
        await alertService.alert(
          'Thank You!',
          'Thank you for submiting your project through our website. We will contact you within 24 hours.',
          actions
        );
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      <Head>
        <title>
          3D Design Service Customer Questionnaire | J & D Landscaping
        </title>
        <meta
          name="description"
          content="Simply tell us what you have in mind and a project consultant will reach out to you to discuss pricing and answer any questions."
        />
      </Head>
      <Layout>
        <Jumbotron
          title="Submit Project"
          image="/assets/images/contact/header.jpg"
          blur="/assets/images/contact/header-blur.png"
        />
        <section className="py-100 bg-light-50 relative">
          <div className="container mx-auto">
            <h2
              id="form"
              className="text-28 text-light-500 text-center font-bold mb-25"
            >
              J & D Landscaping 3D Design Service Customer Questionnaire
            </h2>
            <p className="text-light-500 text-center mb-50">
              Please complete the following form
            </p>
            <form className="max-w-570 mx-auto" onSubmit={form.handleSubmit}>
              {form.errors.company?.name && form.touched.company?.name && (
                <p className="text-danger text-10 font-medium mb-5">
                  {form.errors.company.name}
                </p>
              )}
              <Input
                name="company.name"
                placeholder="Eg: Cameron Collins or Coastal Contractors"
                label="Name or Company Name"
                value={form.values.company.name}
                onChange={form.handleChange}
              />
              {form.errors.project?.address &&
                form.touched.project?.address && (
                  <p className="text-danger text-10 font-medium mb-5">
                    {form.errors.project.address}
                  </p>
                )}
              <Input
                name="project.address"
                placeholder="Eg: 21 Driftwood Lane, Suffield, CT 06093"
                label="Project Address (Street, City, State, Zip Code)"
                value={form.values.project.address}
                onChange={form.handleChange}
              />
              {form.errors.company?.email && form.touched.company?.email && (
                <p className="text-danger text-10 font-medium mb-5">
                  {form.errors.company.email}
                </p>
              )}
              <Input
                name="company.email"
                type="email"
                placeholder="Eg: coastalcontractors@gmail.com"
                label="Email"
                value={form.values.company.email}
                onChange={form.handleChange}
              />
              {form.errors.company?.phone && form.touched.company?.phone && (
                <p className="text-danger text-10 font-medium mb-5">
                  {form.errors.company.phone}
                </p>
              )}
              <PhoneInput
                name="company.phone"
                placeholder="Eg: (860) 582 - 6784"
                label="Phone Number"
                value={form.values.company.phone}
                onChange={form.handleChange}
              />
              {form.errors.project?.name && form.touched.project?.name && (
                <p className="text-danger text-10 font-medium mb-5">
                  {form.errors.project?.name}
                </p>
              )}
              <Input
                name="project.name"
                placeholder="Eg: The sullivan's Patio or Driftwood Lane Project"
                label="Project Name"
                value={form.values.project.name}
                onChange={form.handleChange}
              />
              {form.errors.project?.description &&
                form.touched.project?.description && (
                  <p className="text-danger text-10 font-medium mb-5">
                    {form.errors.project?.description}
                  </p>
                )}
              <TextArea
                name="project.description"
                label="Project Description (Please include measurement)"
                placeholder="Eg: 25x25 Sq. Ft Patio or 500 Sq Ft Patio"
                value={form.values.project.description}
                onChange={form.handleChange}
              />
              {/*<p className="text-center text-light-500 mt-40 mb-20">Project Type</p>*/}
              {/*{form.errors.project?.types && form.touched.project?.types && <p className="text-danger text-10 font-medium mb-5">{form.errors.project?.types}</p>}*/}
              {/*<ImageCardSelector name="project.types" options={accessoryTypeOptions} value={form.values.project.types} onChange={form.handleChange} />*/}
              <TextArea
                name="project.comment"
                label="Other"
                placeholder="Eg: Landscaping, Hardscape Bar, Grill, Fire Pit..."
                value={form.values.project.comment}
                onChange={form.handleChange}
              />
              <div className="mt-50 text-center">
                <p className="text-primary text-20 mb-15">
                  Provide us a photo/photos of the project area
                </p>
                <p className="text-light-500 mb-25">
                  Please send as many photos as possible
                </p>
                {form.errors.project?.photos &&
                  form.touched.project?.photos && (
                    <p className="text-danger text-10 font-medium mb-5">
                      {form.errors.project?.photos}
                    </p>
                  )}
                <PhotoUploader
                  name="project.photos"
                  value={form.values.project.photos}
                  onChange={form.handleChange}
                />
              </div>

              <div className="mt-50 text-center">
                <p className="text-primary text-20 mb-15">
                  Provide us a basic sketch of the project area
                </p>
                <p className="text-light-500 mb-25">
                  Please send us an example and basic sketch of the project area
                </p>
                {form.errors.project?.sketches &&
                  form.touched.project?.sketches && (
                    <p className="text-danger text-10 font-medium mb-5">
                      {form.errors.project?.sketches}
                    </p>
                  )}
                <PhotoUploader
                  name="project.sketches"
                  value={form.values.project.sketches}
                  onChange={form.handleChange}
                />
              </div>

              <div className="mt-50 text-center">
                <p className="text-primary text-20 mb-15">
                  Provide us your company logo
                </p>
                <p className="text-light-500 mb-25 max-w-520">
                  Please send us an good quality .png logo to add it on the 3D
                  renderings and video
                </p>
                <PhotoUploader
                  name="company.logo"
                  value={form.values.company.logo}
                  onChange={form.handleChange}
                />
              </div>

              <div className="mt-50">
                <p className="text-primary text-20 mb-15 text-center">
                  Tell us about the materials you would like to use
                </p>
                <p className="text-light-500 mb-25 max-w-520 mx-auto text-center">
                  Please send us the type of materials you would like to use for
                  this project
                </p>
                <TextArea
                  name="project.material"
                  label="Materials"
                  placeholder="Eg: Techo-Bloc Blu 60 in Champlain Grey"
                  value={form.values.project.material}
                  onChange={form.handleChange}
                />
                <TextArea
                  name="project.additional"
                  label="Comments"
                  placeholder="Please provide us any additional information"
                  value={form.values.project.additional}
                  onChange={form.handleChange}
                />
                <TextArea
                  name="project.question"
                  label="Questions"
                  placeholder="Please feel free to ask us any questions about your project"
                  value={form.values.project.question}
                  onChange={form.handleChange}
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn btn-warning btn-sm-block"
                  disabled={isLoading}
                  onClick={() => {
                    if (!form.isValid) {
                      smoothScrollTo('form', 300);
                    }
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <Spinner isLoading={isLoading} />
        </section>
      </Layout>
    </>
  );
};

export default Submit;
