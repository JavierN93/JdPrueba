import { usePlacesWidget } from 'react-google-autocomplete';
import { noop } from '../../../core/types/common';

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  readonly?: boolean;
  onChange: (v: any) => void;
  onLatLngChange: (latitude: number, longitude: number) => void;
}

export function AddressInput({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  onLatLngChange,
  readonly,
}: Props) {
  const { ref } = usePlacesWidget<HTMLInputElement>({
    apiKey: process.env.googleApiKey,
    options: {
      componentRestrictions: { country: 'US' },
    },
    onPlaceSelected: (place) => {
      const formattedAddress = place.formatted_address;
      const location = place.geometry.location;
      const latitude = location.lat();
      const longitude = location.lng();
      onChange({ target: { name, value: formattedAddress } });
      onLatLngChange(latitude, longitude);
    },
  });
  return (
    <div className="rounded-md pt-10 pb-5 py-0 border border-light-75 shadow mb-20">
      <label className="w-full text-10 text-light-500 font-medium px-15 inline-block">
        {label}
        <input
          ref={ref}
          id={id || name}
          name={name}
          placeholder={placeholder}
          value={value}
          className="w-full text-12 leading-7 focus:outline-none"
          onChange={onChange}
          readOnly={readonly}
        />
      </label>
    </div>
  );
}

AddressInput.defaultProps = {
  id: '',
  label: '',
  value: '',
  placeholder: '',
  onChange: noop,
  onLatLngChange: noop,
  readonly: false,
};
