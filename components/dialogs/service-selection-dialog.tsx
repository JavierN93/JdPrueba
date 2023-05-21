import Image from 'next/image';
import { useRouter } from 'next/router';
import Icon from '../ui-kit/icon';

interface Props {
  onClose: () => void;
  closeDialog: () => void; // DO NOT USE THIS. INTERNAL USE ONLY
}

export function ServiceSelectionDialog({ onClose, closeDialog }: Props) {
  const router = useRouter();

  const services = [
    {
      title: 'Installation Services',
      description: 'Hardscaping Simplified',
      bgImage:
        '/assets/images/service-selection/without-marketplace/installation-bg.png',
      bgImageBlur:
        '/assets/images/service-selection/without-marketplace/installation-bg-blur.png',
      image:
        '/assets/images/service-selection/without-marketplace/installation.png',
      imageBlur:
        '/assets/images/service-selection/without-marketplace/installation.png',
      url: '/services/installation/patios',
    },
    {
      title: '3D Rendering Services',
      description: 'DIY Home Owners/Contractors',
      bgImage:
        '/assets/images/service-selection/without-marketplace/design-bg.png',
      bgImageBlur:
        '/assets/images/service-selection/without-marketplace/design-bg-blur.png',
      image: '/assets/images/service-selection/without-marketplace/design.png',
      imageBlur:
        '/assets/images/service-selection/without-marketplace/design-blur.png',
      url: '/services/design',
    },
    // {
    //   title: 'Marketplace',
    //   description: 'Get a quote for materials',
    //   bgImage: '/assets/images/service-selection/marketplace-bg.jpg',
    //   bgImageBlur: '/assets/images/service-selection/marketplace-bg-blur.png',
    //   image: '/assets/images/service-selection/marketplace.jpg',
    //   imageBlur: '/assets/images/service-selection/marketplace-blur.png',
    //   url: 'https://marketplace.jdlandscaping.net'
    // },
  ];

  const handleServiceClick = (url: string) => {
    router.push(url);
    closeDialog();
    onClose();
  };

  return (
    <div className="w-full sm:w-400 xl:w-990 px-10 pb-35 pt-55 xl:px-15 xl:pb-15 relative">
      <button
        className="absolute right-15 top-15 z-10"
        onClick={() => {
          onClose();
          closeDialog();
        }}
      >
        <Icon name="close" color="#2c2c2c" size={25} />
      </button>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-10 xl:gap-y-0 gap-x-15">
        {services.map((service, index) => (
          <div
            className="relative px-5 rounded-xl overflow-hidden cursor-pointer"
            key={index}
            onClick={() => handleServiceClick(service.url)}
          >
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src={service.bgImage}
                placeholder="blur"
                blurDataURL={service.bgImageBlur}
                alt="Installation"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative z-10 text-center pt-50 pb-50 xl:pt-120 xl:pb-110">
              <h4 className="text-30 text-white font-medium mb-10 xl:mb-20">
                {service.title}
              </h4>
              <p className="text-18 text-white font-medium">
                {service.description}
              </p>
            </div>
            <div className="hidden xl:block overflow-hidden rounded-t-xl">
              <Image
                src={service.image}
                placeholder="blur"
                blurDataURL={service.imageBlur}
                alt="Installation"
                width={472}
                height={340}
                layout="responsive"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ServiceSelectionDialog.defaultProps = {
  onClose: () => {},
  closeDialog: () => {},
};
