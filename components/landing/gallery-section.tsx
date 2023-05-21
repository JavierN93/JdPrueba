import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Idea, ProjectAccessoryType } from '../../core/types/idea';
import { ideaBoardApiService } from '../../core/api-services/idea-board-api.service';
import { shimmerUrl } from '../ui-kit/common/blur-image';
import Spinner from '../ui-kit/common/spinner';
import useImagePreview from '../ui-kit/dialog/use-image-preview';
import Icon from '../ui-kit/icon';

const imageCountPerDisplay = 9;
const projectAccessoryTypes = [
  { label: 'All', value: null },
  {
    label: 'Patios',
    value: ProjectAccessoryType.Patio,
    image: '/assets/images/categories/patio.jpg',
  },
  {
    label: 'Walkways',
    value: ProjectAccessoryType.Walkway,
    image: '/assets/images/categories/walkways.jpg',
  },
  {
    label: 'Pool Patios',
    value: ProjectAccessoryType.PoolPatio,
    image: '/assets/images/categories/pool-patio.jpg',
  },
  {
    label: 'Retaining Walls',
    value: ProjectAccessoryType.RetainingWall,
    image: '/assets/images/categories/retaining-wall.jpg',
  },
  {
    label: 'Staircases & Steps',
    value: ProjectAccessoryType.Steps,
    image: '/assets/images/categories/stairs.jpg',
  },
];

interface Props {
  initialIdeas: Idea[];
}

export function GallerySection({ initialIdeas }: Props) {
  const imagePreviewService = useImagePreview();
  const [ideas, setIdeas] = useState<Idea[]>(initialIdeas);
  const [category, setCategory] = useState<ProjectAccessoryType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ideasInitialized, setIdeasInitialized] = useState<boolean>(false);

  const loadIdeas = async (isMore: boolean) => {
    try {
      setIsLoading(true);
      const res = await ideaBoardApiService.getIdeas(
        category,
        isMore ? ideas.length : 0,
        imageCountPerDisplay
      );
      setIdeas(isMore ? [...ideas, ...res] : res);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (ideasInitialized) {
      loadIdeas(false).then();
    }
    setIdeasInitialized(true);
  }, [category]);

  return (
    <section className="relative pb-60">
      <div className="container mx-auto text-center">
        <div className="mb-50">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-20">
            {projectAccessoryTypes.map((projectAccessoryType, index) => {
              return (
                <div
                  key={index}
                  className={
                    'flex flex-col cursor-pointer rounded-2xl overflow-hidden border-4 ' +
                    (category === projectAccessoryType.value ||
                    !projectAccessoryType.value
                      ? 'border-primary'
                      : 'border-white')
                  }
                  onClick={() => setCategory(projectAccessoryType.value)}
                >
                  {projectAccessoryType.value && (
                    <Image
                      src={projectAccessoryType.image}
                      width={165}
                      height={136}
                      quality={100}
                      layout="responsive"
                      placeholder="blur"
                      blurDataURL={shimmerUrl}
                      alt={projectAccessoryType.label}
                    />
                  )}
                  {!projectAccessoryType.value && (
                    <div className="w-full flex-grow flex justify-center items-center">
                      All Projects
                    </div>
                  )}
                  <div className="bg-primary text-center text-white py-5">
                    {projectAccessoryType.label || 'All'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Spinner isLoading={isLoading} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {ideas.map((idea, index) => (
            <div
              className="mb-20 cursor-pointer aspect-w-8 aspect-h-6 relative"
              key={index}
            >
              <div
                className="absolute w-full h-full rounded-xl overflow-hidden"
                onClick={() => imagePreviewService.preview(idea.url, 'Idea')}
              >
                <Image
                  src={idea.url}
                  width={idea.width}
                  height={idea.height}
                  layout="fill"
                  quality={100}
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={shimmerUrl}
                  alt="Idea"
                />
                <Icon
                  name="external_link"
                  color="white"
                  size={24}
                  className="absolute bottom-20 right-20 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-30">
          <button
            className="btn btn-primary btn-lg btn-sm-block"
            onClick={() => loadIdeas(true)}
          >
            See more
          </button>
        </div>
      </div>
    </section>
  );
}

GallerySection.defaultProps = {};
