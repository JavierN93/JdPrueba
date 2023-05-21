import IdeaMasonryImage from './idea-masonry-image';

interface Props {
  name: string;
}

export default function CompletenessComparisonBlock({ name }: Props) {
  return (
    <>
      <div className="grid grid-cols-2 relative">
        <div className="absolute w-200 h-35 rounded-b-xl px-30 top-0 left-1/2 transform -translate-x-1/2 z-10 bg-primary bg-opacity-70 text-white text-12 font-bold flex items-center justify-between">
          <span>Before</span>
          <span className="mr-10">After</span>
        </div>
        <div>
          <IdeaMasonryImage name={name} imageIndex={1} type={4} />
        </div>
        <div>
          <IdeaMasonryImage name={name} imageIndex={2} type={4} />
        </div>
      </div>
      <div className="grid grid-cols-2 relative">
        <div className="absolute w-200 h-35 rounded-b-xl px-30 top-0 left-1/2 transform -translate-x-1/2 z-10 bg-primary bg-opacity-70 text-white text-12 font-bold flex items-center justify-between">
          <span>Before</span>
          <span className="mr-10">After</span>
        </div>
        <div>
          <IdeaMasonryImage name={name} imageIndex={3} type={4} />
        </div>
        <div>
          <IdeaMasonryImage name={name} imageIndex={4} type={4} />
        </div>
      </div>
      <div className="grid grid-cols-2 relative">
        <div className="absolute w-200 h-35 rounded-b-xl px-30 top-0 left-1/2 transform -translate-x-1/2 z-10 bg-primary bg-opacity-70 text-white text-12 font-bold flex items-center justify-between">
          <span>Before</span>
          <span className="mr-10">After</span>
        </div>
        <div>
          <IdeaMasonryImage name={name} imageIndex={5} type={4} />
        </div>
        <div>
          <IdeaMasonryImage name={name} imageIndex={6} type={4} />
        </div>
      </div>
    </>
  );
}
