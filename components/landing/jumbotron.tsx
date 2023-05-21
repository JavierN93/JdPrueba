import Image from 'next/image';

interface Props {
  title: string;
  image: string;
  blur: string;
  height: number;
  center: boolean;
}

export function Jumbotron({ title, image, blur, height, center }: Props) {
  return (
    <section className="relative h-380 pt-80">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          src={image}
          placeholder="blur"
          blurDataURL={blur}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="container mx-auto text-white relative z-10">
        <h1 className={'text-44 mt-100 ' + (center && 'text-center')}>
          {title}
        </h1>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30" />
    </section>
  );
}

Jumbotron.defaultProps = {
  title: '',
  image: '',
  blur: '',
  height: 380,
  center: false,
};
