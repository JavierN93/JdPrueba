import { useEffect, useState } from 'react';

import { noop } from '../../../core/types/common';
import Icon from '../icon';

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: any) => void;
  onSearch: (v: any) => void;
}

export default function SearchInput({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  onSearch,
}: Props) {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="relative rounded-md pt-10 pb-5 py-0 border border-light-75 shadow mb-20">
      <label className="w-full text-10 text-light-500 font-medium px-15 inline-block">
        {label}
        <input
          id={id || name}
          name={name}
          placeholder={placeholder}
          value={value}
          className="w-full text-12 leading-7 focus:outline-none"
          onChange={(event) => {
            setSearchTerm(event.target.value);
            onChange(event);
          }}
        />
        <Icon
          className="absolute right-10 bottom-10"
          name="search"
          color="primary"
          size={20}
        />
      </label>
    </div>
  );
}

function useDebounce(value: string, delay: number | undefined): string {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
}

SearchInput.defaultProps = {
  id: '',
  name: '',
  label: 'Search',
  value: '',
  placeholder: 'Type Search Keyword',
  onChange: noop,
};
