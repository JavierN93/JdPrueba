import { noop } from '../../../core/types/common';

interface Props {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  readonly?: boolean;
  onChange: (v: any) => void;
}

export function Input({
  id,
  name,
  type,
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
        <input
          id={id || name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          readOnly={readonly}
          className="w-full text-12 leading-7 focus:outline-none"
          onChange={onChange}
        />
      </label>
    </div>
  );
}

Input.defaultProps = {
  id: '',
  type: 'text',
  label: '',
  value: '',
  placeholder: '',
  readonly: false,
  onChange: noop,
};
