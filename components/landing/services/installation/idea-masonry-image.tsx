import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Props {
  name: string;
  imageIndex: number;
  type: number;
}

export default function IdeaMasonryImage({ name, imageIndex, type }: Props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (type === 1) {
      setWidth(578);
      setHeight(578);
    } else if (type === 2) {
      setWidth(1156);
      setHeight(578);
    } else if (type === 3) {
      setWidth(576);
      setHeight(348);
    } else if (type === 4) {
      setWidth(868);
      setHeight(578);
    }
  }, [type]);
  return (
    <>
      <Image
        layout="responsive"
        placeholder="blur"
        objectFit="cover"
        width={width}
        height={height}
        alt={name}
        src={
          '/assets/images/services/installation/' +
          name +
          '/' +
          imageIndex +
          '.jpg'
        }
        blurDataURL={
          '/assets/images/services/installation/' +
          name +
          '/' +
          imageIndex +
          '-blur.png'
        }
      />
    </>
  );
}
