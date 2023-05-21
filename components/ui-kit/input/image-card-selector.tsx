import Image from 'next/image';

import { noop } from '../../../core/types/common';
import { shimmerUrl } from '../common/blur-image';
import { CheckBox } from './checkbox';

interface Props {
  name: string;
  value: any[];
  options: ImageCardOption[];
  onChange: (v: any) => void;
}

interface ImageCardOption {
  value: any;
  label: string;
  image: string;
  selected?: boolean;
}

export function ImageCardSelector({ name, value, options, onChange }: Props) {
  options?.map((option) => {
    if (value?.indexOf(option.value) > -1) {
      option.selected = true;
    }
  });
  const selectCard = (item: ImageCardOption) => {
    item.selected = !item.selected;
    onChange({
      target: {
        name,
        value: options.filter((x) => x.selected).map((x) => x.value),
      },
    });
  };
  return (
    <div className="flex flex-wrap">
      {options.map((option, index) => {
        return (
          <div key={index} className="w-full md:w-1/2 xs:w-4/12 px-5">
            <div
              className={
                'hidden sm:block transition-all duration-300 ease-in-out border border-light relative rounded-lg shadow-lg cursor-pointer px-10 pt-10 mb-20 hover:bg-primary hover:text-white hover:border-primary' +
                (option.selected
                  ? ' bg-primary text-white border-primary'
                  : ' text-light-400')
              }
              onClick={() => {
                selectCard(option);
              }}
            >
              <div className="rounded-md overflow-hidden">
                <Image
                  src={option.image}
                  width={70}
                  height={45}
                  layout="responsive"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={shimmerUrl}
                  alt="Idea"
                />
              </div>
              <div className="font-medium text-center my-10">
                {option.label}
              </div>
            </div>
            <div className="sm:hidden transition-all duration-300 ease-in-out text-primary px-10 pt-10 mb-20">
              <CheckBox
                name={option.value}
                label={option.label}
                onChange={(event) => {
                  const update = [...options];
                  const updatedOption = options.find(
                    (opt) => opt.value === option.value
                  );
                  if (updatedOption) {
                    updatedOption.selected = !updatedOption.selected;
                  }
                  onChange({
                    target: {
                      name,
                      value: update
                        .filter((x) => x.selected)
                        .map((x) => x.value),
                    },
                  });
                }}
                value={option.selected}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

ImageCardSelector.defaultProps = {
  value: [],
  onChange: noop,
};
