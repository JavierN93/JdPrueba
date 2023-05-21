import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Icon from '../ui-kit/icon';
import { Input } from '../ui-kit/input/input';
import { PhoneInput } from '../ui-kit/input/phone-input';
import Spinner from '../ui-kit/common/spinner';
import {
  ColorClass,
  CustomerType,
  ProductCategory,
} from '../../core/data/product';
import { DropdownSelect } from '../ui-kit/input/dropdown-select';
import { enumToOptions } from '../ui-kit/utils';
import { SourceFoundUs } from '../../core/types/marketing';
import { leadApiService } from '../../core/api-services/lead-api.service';
import useAlert from '../ui-kit/dialog/use-alert';
import useShowroomService from '../../core/app-services/showroom-service';
import { AlertAction } from '../ui-kit/dialog/alert-dialog';
import useGAService from '../../core/app-services/ga-service';

interface Props {
  customerType: CustomerType;
  category: ProductCategory;
  colorClass: ColorClass;
  id: string;
  onClose: () => void;
  closeDialog: () => void; // DO NOT USE THIS. INTERNAL USE ONLY
}

export function ShowroomSubmitDialog({
  customerType,
  category,
  colorClass,
  id,
  onClose,
  closeDialog,
}: Props) {
  const sourceFoundUsOptions = enumToOptions<SourceFoundUs>(SourceFoundUs);
  const router = useRouter();
  const showroomService = useShowroomService();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const schema = Yup.object().shape({
    firstName: Yup.string().max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    sourceFoundUs: Yup.string().required('Required'),
  });
  const alertService = useAlert();
  const gaService = useGAService();
  const form = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      sourceFoundUs: '' as SourceFoundUs,
    },
    validationSchema: schema,
    onSubmit: async (values: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      sourceFoundUs: SourceFoundUs;
    }) => {
      try {
        setIsLoading(true);
        gaService.event('Request Submitted', 'Showroom Submit Form Submitted');
        await leadApiService.showRoomContact({
          ...values,
          customerType: customerType,
          productCategory: category,
          colorClass: colorClass,
          image: showroomService.getProductImageUrl(category, colorClass, id),
        });
        const actions: AlertAction[] = [
          {
            caption: 'Go Home',
            className: 'btn-warning',
            onClick: () => {
              closeDialog();
              router.push('/');
            },
          },
          {
            caption: 'Back to Pictures',
            className: 'btn-primary',
            onClick: () => {
              closeDialog();
            },
          },
        ];
        await alertService.alert(
          'Thank You!',
          'Thank you for taking the time to save this photo! This photo will be uploaded to your account within 24 hours.',
          actions
        );
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="w-full sm:w-505">
      <div className="flex justify-end pr-30 pt-30">
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
      <h5 className="text-primary text-center text-24 font-medium mt-0 mb-40 mx-30 sm:mx-60">
        You are one step closer to completing your project
      </h5>
      <form className="w-310 mx-auto mb-40" onSubmit={form.handleSubmit}>
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
        <DropdownSelect
          name="sourceFoundUs"
          options={sourceFoundUsOptions}
          label="How did you found us?"
          placeholder="Nothing Selected"
          value={form.values.sourceFoundUs}
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

ShowroomSubmitDialog.defaultProps = {
  onClose: () => {},
  closeDialog: () => {},
};
