import { noop } from '../../../core/types/common';

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: any) => void;
  rows: number;
  readonly?: boolean;
}

export function TextArea({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  rows,
  readonly,
}: Props) {
  return (
    <div className="rounded-md pt-10 pb-5 py-0 border border-light-75 shadow mb-20 bg-white">
      <label className="w-full text-10 text-light-500 font-medium px-15 inline-block">
        {label}
        <textarea
          id={id || name}
          name={name}
          placeholder={placeholder}
          value={value}
          className="w-full text-12 leading-7 focus:outline-none"
          onChange={onChange}
          rows={rows}
          readOnly={readonly}
        />
      </label>
    </div>
  );
}

TextArea.defaultProps = {
  id: '',
  label: '',
  value: '',
  placeholder: '',
  onChange: noop,
  rows: 3,
  readonly: false,
};
