import { NextPage } from 'next';
import * as Yup from 'yup';
import Head from 'next/head';
import { useFormik } from 'formik';
import { useState } from 'react';

import { Layout } from '../components/layout/layout';
import { Jumbotron } from '../components/landing/jumbotron';
import { enumToOptions } from '../components/ui-kit/utils';
import { SourceFoundUs } from '../core/types/marketing';
import Spinner from '../components/ui-kit/common/spinner';
import { Input } from '../components/ui-kit/input/input';
import { PhoneInput } from '../components/ui-kit/input/phone-input';
import { DropdownSelect } from '../components/ui-kit/input/dropdown-select';
import { TextArea } from '../components/ui-kit/input/textarea';
import useAlert from '../components/ui-kit/dialog/use-alert';

const Contact: NextPage = () => {
  const sourceFoundUsOptions = enumToOptions<SourceFoundUs>(SourceFoundUs);
  const alertService = useAlert();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    sourceFoundUs: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
  });

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      latitude: 0,
      longitude: 0,
      sourceFoundUs: '',
      message: '',
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        // await leadApiService.contactUs(values);
        await alertService.notify(
          'Thank You!',
          'Thank you for contacting J & D Landscaping, we will respond to your inquiry within 24 hours. Thank you for your patience.',
          'Ok'
        );
        form.resetForm();
      } catch (e) {
        await alertService.notify(
          'Message not sent!',
          `We are unable to connect to customer service at this moment. Please try again later.`,
          'Ok'
        );
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Contact Us | J & D Landscaping</title>
        <meta
          name="description"
          content="Have a question about our services? We'll get you the help you need. Contact us now!"
        />
      </Head>
      <Layout>
        <Jumbotron
          title=""
          image="/assets/images/contact/header.jpg"
          blur="/assets/images/contact/header-blur.png"
        />
        <section className="py-60 lg:py-100">
          <div className="container mx-auto">
            <div className="">
              <p className="text-primary text-22 text-center">
                Keep in touch and
              </p>
              <h2 className="text-32 md:text-44 text-light-500 text-center mb-40 lg:mb-60">
                Contact us
              </h2>
              <Spinner isLoading={isLoading} />
              <form
                className="w-full md:w-3/5 mx-auto"
                onSubmit={form.handleSubmit}
              >
                <Input
                  name="fullName"
                  placeholder="Walter White"
                  label="Full Name"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="someone@example.com"
                  value={form.values.email}
                  label="Email Address"
                  onChange={form.handleChange}
                />
                <PhoneInput
                  name="phone"
                  placeholder="(123) 456 7890"
                  label="Phone Number"
                  value={form.values.phone}
                  onChange={form.handleChange}
                />
                <Input
                  name="address"
                  label="Address"
                  placeholder="9 Shepard Rd, Ellington, CT, 06034"
                  value={form.values.address}
                  onChange={form.handleChange}
                />
                <DropdownSelect
                  name="sourceFoundUs"
                  options={sourceFoundUsOptions}
                  label="How did you find our company?"
                  placeholder="Nothing Selected"
                  value={form.values.sourceFoundUs}
                  onChange={form.handleChange}
                />
                <TextArea
                  name="message"
                  placeholder="Write down your message here."
                  label="Comment"
                  rows={4}
                  value={form.values.message}
                  onChange={form.handleChange}
                />
                <div className="flex justify-center pt-30">
                  <button
                    className="btn btn-primary btn-sm-block"
                    disabled={!(form.isValid && form.dirty) || isLoading}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
