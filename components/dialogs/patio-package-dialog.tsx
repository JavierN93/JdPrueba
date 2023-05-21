import { Input } from '../ui-kit/input/input';
import { PhoneInput } from '../ui-kit/input/phone-input';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import useGAService from '../../core/app-services/ga-service';
import { DropdownSelect } from '../ui-kit/input/dropdown-select';
import { enumToOptions } from '../ui-kit/utils';
import { SourceFoundUs } from '../../core/types/marketing';
import Icon from '../ui-kit/icon';
import { PatioPackage } from '../../core/types/patio-package';
import { ImageCardSelector } from '../ui-kit/input/image-card-selector';
import { patioPackageOptions } from '../../core/data/patio-packages';
import { leadApiService } from '../../core/api-services/lead-api.service';
import { Base64 } from 'js-base64';

interface Props {
  packageType: PatioPackage;
  onClose: () => void;
  closeDialog: () => void; // DO NOT USE THIS. INTERNAL USE ONLY
}

export default function PatioPackageDialog({
  onClose,
  closeDialog,
  packageType,
}: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<any>(null);
  const [additionalOptions, setAdditionalOptions] = useState<any>(null);
  const sourceFoundUsOptions = enumToOptions<SourceFoundUs>(SourceFoundUs);
  const packageTypeOptions = enumToOptions<PatioPackage>(PatioPackage);
  useEffect(() => {
    const option = patioPackageOptions[packageType] as any;
    if (option.options) {
      const compliedOptions = option.options.map((x: any) => ({
        label: `${x.label} $${x.price}`,
        value: x.value,
      }));
      compliedOptions.push({ label: 'Other', value: 'OTHER' });
      setOptions(compliedOptions);
      setAdditionalOptions(option.additional);
    } else {
      setOptions(null);
      setAdditionalOptions(null);
    }
  }, [packageType]);
  const schema = Yup.object().shape({
    user: Yup.object().shape({
      firstName: Yup.string().max(50, 'Too Long!').required('Required'),
      lastName: Yup.string().max(50, 'Too Long!').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      address: Yup.string().required('Required'),
      phone: Yup.string().required('Required'),
    }),
    sourceFoundUs: Yup.string().required('Required'),
  });
  const gaService = useGAService();
  const form = useFormik({
    initialValues: {
      projects: [],
      user: {
        ideas: [],
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        latitude: 0,
        longitude: 0,
      },
      patioPackage: {
        packageType: packageType,
        option: '',
        additional: [],
      },
      sourceFoundUs: '',
    },
    validationSchema: schema,
    onSubmit: async (values: any) => {
      try {
        setIsLoading(true);
        const res = (await leadApiService.register(values)) as any;
        const routePayload = {
          route: 'app/my-projects',
          hasProject: false,
          showWelcomeDialog: true,
          accessToken: res.accessToken,
        };
        const base64EncodedPayload = Base64.encode(
          JSON.stringify(routePayload)
        );
        window.location.href = `https://app.jdlandscaping.net/redirect/${base64EncodedPayload}`;
      } catch (e) {
        alert(e.message);
      } finally {
        setIsLoading(false);
      }
    },
  });
  useEffect(() => {
    form.validateForm();
  }, []);
  return (
    <div className="max-w-600 px-10 pb-30">
      <div className="flex justify-end py-20">
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

      <form onSubmit={form.handleSubmit}>
        <div className="overflow-y-auto max-h-70vh mb-20 px-15 pretty-scroll">
          <h2 className="text-22 text-light-500 text-center mb-30">
            Speak to a project consultant to learn more and to discuss the
            details of your project.
          </h2>
          <div className="max-w-420 mx-auto">
            <Input
              name="user.firstName"
              label="First Name"
              placeholder="Jonah"
              value={form.values.user.firstName}
              onChange={form.handleChange}
            />
            <Input
              name="user.lastName"
              label="Last Name"
              placeholder="Springfield"
              value={form.values.user.lastName}
              onChange={form.handleChange}
            />
            <Input
              type="email"
              name="user.email"
              label="Email"
              placeholder="walter@example.com"
              value={form.values.user.email}
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
            <Input
              type="password"
              name="user.password"
              label="Password"
              placeholder="Password"
              value={form.values.user.password}
              onChange={form.handleChange}
            />
            <PhoneInput
              name="user.phone"
              label="Phone Number"
              placeholder="(300) 448 5543"
              value={form.values.user.phone}
              onChange={form.handleChange}
            />
            <Input
              name="user.address"
              label="Address"
              placeholder="9 Shepard Rd, Ellington, CT, 06034"
              value={form.values.user.address}
              onChange={form.handleChange}
            />
            <DropdownSelect
              name="patioPackage.packageType"
              readonly={true}
              options={packageTypeOptions}
              label="Package Type"
              placeholder="Package Type"
              value={form.values.patioPackage.packageType}
              onChange={form.handleChange}
            />
            {options && additionalOptions ? (
              <>
                <DropdownSelect
                  name="patioPackage.option"
                  options={options}
                  label="Select Option"
                  placeholder="Package Option"
                  value={form.values.patioPackage.option}
                  onChange={form.handleChange}
                />
                <p className="text-light-500 mb-20 mt-40 text-center">
                  Select what will be included in your hardscaping project
                </p>
                <ImageCardSelector
                  name="patioPackage.additional"
                  value={form.values.patioPackage.additional}
                  options={additionalOptions}
                  onChange={form.handleChange}
                />
              </>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary btn-sm-block"
            disabled={!(form.isValid && form.dirty)}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

PatioPackageDialog.defaultProps = {
  onClose: () => {},
  closeDialog: () => {},
};
