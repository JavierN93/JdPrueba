import IdeaMasonryImage from './idea-masonry-image';

interface Props {
  name: string;
}

export default function IdeaGridBlock({ name }: Props) {
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <IdeaMasonryImage name={name} type={3} imageIndex={1} />
        </div>
        <div className="col-span-1">
          <IdeaMasonryImage name={name} type={3} imageIndex={2} />
        </div>
        <div className="col-span-1">
          <IdeaMasonryImage name={name} type={3} imageIndex={3} />
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <IdeaMasonryImage name={name} type={3} imageIndex={4} />
        </div>
        <div className="col-span-1">
          <IdeaMasonryImage name={name} type={3} imageIndex={5} />
        </div>
        <div className="col-span-1">
          <IdeaMasonryImage name={name} type={3} imageIndex={6} />
        </div>
      </div>
    </>
  );
}
