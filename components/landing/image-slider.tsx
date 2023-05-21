import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';

import { shimmerUrl } from '../ui-kit/common/blur-image';

interface Props {
  images: string[];
  width: number;
  height: number;
  delay: number;
}

SwiperCore.use([Autoplay, Pagination]);

export default function ImageSlider({ images, width, height, delay }: Props) {
  return (
    <section className="relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: delay }}
        pagination={{
          el: `.swiper-pagination-slider`,
          type: 'bullets',
        }}
      >
        {images.map((imageSrc, i) => (
          <SwiperSlide className="flex-grow" key={i}>
            <div>
              <Image
                className="overflow-hidden cursor-pointer"
                src={imageSrc}
                height={height}
                width={width}
                layout={'responsive'}
                alt={'Swiper Image'}
                placeholder="blur"
                blurDataURL={shimmerUrl}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination-slider absolute w-full h-40 bottom-0 left-0 flex justify-center items-center z-10 bg-secondary bg-opacity-10" />
    </section>
  );
}

ImageSlider.defaultProps = {
  images: [],
  width: 1376,
  height: 749,
  delay: 4000,
};
