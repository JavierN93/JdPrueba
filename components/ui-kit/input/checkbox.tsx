import { noop } from '../../../core/types/common';

interface Props {
  id: string;
  name: string;
  label: string;
  value: boolean;
  readonly?: boolean;
  onChange: (v: any) => void;
}

export function CheckBox({
  id,
  name,
  label,
  value,
  onChange,
  readonly,
}: Props) {
  return (
    <label className="flex items-center cursor-pointer relative">
      <input
        id={id || name}
        name={name}
        type="checkbox"
        value={String(value)}
        onChange={onChange}
        readOnly={readonly}
        className="opacity-0"
      />
      <span
        className={
          'w-25 h-25 bg-white rounded-md absolute left-0 border-primary' +
          (value ? ' bg-primary' : 'bg-none border-2')
        }
      />
      {value && (
        <span className="absolute left-10 top-9 w-5 h-10 border-white border-r-2 border-b-2 transform rotate-45" />
      )}
      <span className="pl-20">{label}</span>
    </label>
  );
}

CheckBox.defaultProps = {
  id: '',
  label: '',
  value: false,
  onChange: noop,
  readonly: false,
};
