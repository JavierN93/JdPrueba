import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Icon from '../ui-kit/icon';
import { Input } from '../ui-kit/input/input';
import { PhoneInput } from '../ui-kit/input/phone-input';
import Spinner from '../ui-kit/common/spinner';
import { leadApiService } from '../../core/api-services/lead-api.service';
import useAlert from '../ui-kit/dialog/use-alert';
import { TextArea } from '../ui-kit/input/textarea';
import { PhotoUploader } from '../ui-kit/input/photo-uploader';
import useGAService from '../../core/app-services/ga-service';

interface Props {
  onClose: () => void;
  closeDialog: () => void; // DO NOT USE THIS. INTERNAL USE ONLY
}

export function ShowroomDIYContactDialog({ onClose, closeDialog }: Props) {
  const router = useRouter();
  const gaService = useGAService();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const schema = Yup.object().shape({
    firstName: Yup.string().max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().max(50, 'Too Long!').required('Required'),
    address: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    comment: Yup.string().required('Required'),
    attachments: Yup.array(),
  });
  const alertService = useAlert();
  const form = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phone: '',
      comment: '',
      attachments: [],
    },
    validationSchema: schema,
    onSubmit: async (values: {
      firstName: string;
      lastName: string;
      address: string;
      email: string;
      phone: string;
      comment: string;
      attachments: string[];
    }) => {
      try {
        setIsLoading(true);
        gaService.event(
          'Request Submitted',
          'Showroom DIY Contact Form Submitted'
        );
        await leadApiService.showRoomDIYContact(values);
        alertService
          .notify(
            'Thank You!',
            'Thank you for requesting a quote through our marketplace. We will contact you within 24 hours to discuss your project details and provide a quote.',
            'Back to Marketplace'
          )
          .then(() => {
            closeDialog();
          });
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="w-full sm:w-505 max-h-100vh">
      <div className="flex justify-end pr-30 pt-20">
        <button
          className="px-5 pt-5"
          onClick={() => {
            onClose();
            closeDialog();
          }}
        >
          <Icon name="close" color="#2c2c2c" size={14} />
        </button>
      </div>
      <h5 className="text-primary text-center text-24 font-medium mt-0 mb-20 mx-30 sm:mx-60">
        Contact Us
      </h5>
      <form
        className="w-350 mx-auto mb-40 px-20 pb-60 md:pb-0"
        onSubmit={form.handleSubmit}
      >
        <Input
          name="firstName"
          label="First Name"
          placeholder="Jonah"
          value={form.values.firstName}
          onChange={form.handleChange}
        />
        <Input
          name="lastName"
          label="Last Name"
          placeholder="Springfield"
          value={form.values.lastName}
          onChange={form.handleChange}
        />
        <Input
          name="address"
          label="Address"
          placeholder="9 Shepard Rd, Ellington, CT, 06034"
          value={form.values.address}
          onChange={form.handleChange}
        />
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="walter@example.com"
          value={form.values.email}
          onChange={form.handleChange}
        />
        <PhoneInput
          name="phone"
          label="Phone Number"
          placeholder="(300) 448 5543"
          value={form.values.phone}
          onChange={form.handleChange}
        />
        <TextArea
          name="comment"
          label="Tell us what you would like a quote on?"
          placeholder=""
          rows={4}
          value={form.values.comment}
          onChange={form.handleChange}
        />
        <p className="text-primary text-18 font-medium text-center my-10">
          Attachments
        </p>
        <p className="text-center mb-10">
          Upload a photo(s) of area or feel free to upload examples you like.
        </p>
        <PhotoUploader
          name="attachments"
          align="center"
          value={form.values.attachments}
          onChange={form.handleChange}
        />
        <div className="flex justify-center pt-20">
          <button
            className="btn btn-warning btn-sm-block"
            disabled={!(form.isValid && form.dirty)}
          >
            Submit
          </button>
        </div>
      </form>
      <Spinner isLoading={isLoading} />
    </div>
  );
}

ShowroomDIYContactDialog.defaultProps = {
  onClose: () => {},
  closeDialog: () => {},
};
