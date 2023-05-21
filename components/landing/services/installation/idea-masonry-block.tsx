import IdeaMasonryImage from './idea-masonry-image';

interface Props {
  name: string;
}

export default function IdeaMasonryBlock({ name }: Props) {
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <IdeaMasonryImage name={name} type={2} imageIndex={1} />
        </div>
        <div className="col-span-1">
          <IdeaMasonryImage name={name} type={1} imageIndex={2} />
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <IdeaMasonryImage name={name} type={1} imageIndex={3} />
        </div>
        <div className="col-span-1">
          <IdeaMasonryImage name={name} type={1} imageIndex={4} />
        </div>
        <div className="col-span-1">
          <IdeaMasonryImage name={name} type={1} imageIndex={5} />
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <IdeaMasonryImage name={name} type={2} imageIndex={6} />
        </div>
        <div className="col-span-1">
          <IdeaMasonryImage name={name} type={1} imageIndex={7} />
        </div>
      </div>
    </>
  );
}
