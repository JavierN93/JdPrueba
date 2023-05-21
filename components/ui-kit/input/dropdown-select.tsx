import { noop } from '../../../core/types/common';
import { Option } from '../models';

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: any;
  options: Option<any>[];
  onChange: (v: any) => void;
  readonly: boolean;
}

export function DropdownSelect({
  id,
  name,
  label,
  placeholder,
  value,
  readonly,
  options,
  onChange,
}: Props) {
  return (
    <div className="rounded-md pt-10 pb-5 py-0 border border-light-75 shadow mb-20">
      <label className="w-full text-10 text-light-500 font-medium px-15 inline-block">
        {label}
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full h-30 focus:outline-none text-12"
        >
          <option disabled hidden value="">
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option value={option.value} disabled={readonly} key={index}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

DropdownSelect.defaultProps = {
  id: '',
  label: '',
  value: '',
  options: [],
  placeholder: '',
  onChange: noop,
  readonly: false,
};
