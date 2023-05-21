import InputMask from 'react-input-mask';
import { noop } from '../../../core/types/common';

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: any) => void;
  readonly?: boolean;
}

export function PhoneInput({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  readonly,
}: Props) {
  return (
    <div className="rounded-md pt-10 pb-5 py-0 border border-light-75 shadow mb-20 bg-white">
      <label className="w-full text-10 text-light-500 font-medium px-15 inline-block">
        {label}
        <InputMask
          id={id || name}
          name={name}
          placeholder={placeholder}
          value={value}
          className="w-full text-12 leading-7 focus:outline-none"
          mask="(999) 999-9999"
          type="tel"
          onChange={onChange}
          readOnly={readonly}
        />
      </label>
    </div>
  );
}

PhoneInput.defaultProps = {
  id: '',
  label: '',
  value: '',
  placeholder: '',
  onChange: noop,
  readonly: false,
};
