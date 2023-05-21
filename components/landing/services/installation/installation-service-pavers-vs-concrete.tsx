import Image from 'next/image';
import Link from 'next/link';
import { shimmerUrl } from '../../../ui-kit/common/blur-image';

export default function InstallationServicePaversVsConcrete() {
  const cards = [
    {
      imgUrl:
        '/assets/images/services/installation/pavers-vs-concrete/icon-crack.svg',
      title: 'Pavers are guaranteed to NEVER crack',
      description:
        'With proper professional installation of your new hardscape project, most high quality paver manufactures have a guarantee that their product will not crack during freeze and thaw periods. Most damage caused to concrete is during this period and results in numerous cracks and improper settling. If a paver does crack for any reason it is a simple fix by picking up the cracked paver and replacing it. With this guarantee, your project will look like it’s brand new for years to come!',
    },
    {
      imgUrl:
        '/assets/images/services/installation/pavers-vs-concrete/icon-designs.svg',
      title: 'Unlimited Design Options',
      description:
        'With pavers the possibilities are endless. Pavers will allow you to integrate different colors mixed within the project as well as different textures and designs. The same types of options in concrete do not exist. Even in the “Stamped Concrete Form” concrete has its limits with colors and designs. With Pavers you can custom create your project to fit the style of your choice; with concrete you are limited with your options.',
    },
    {
      imgUrl:
        '/assets/images/services/installation/pavers-vs-concrete/icon-maintenance.svg',
      title: 'Maintenance',
      description:
        'The common misconception about pavers is that weeds will grow up through the cracks. This is simply wrong, with proper installation of the pavers and by installing a high quality Polymeric Sand between the cracks this potential problem is solved. With proper simple polymeric sand maintenance once every 1 to 2 years your project will remain weed free. Stamped concrete requires a new sealer every 1 to 3 years. This alone is a costly process that if not done correctly can damage the entire surface and be a large cost to repair.',
    },
    {
      imgUrl:
        '/assets/images/services/installation/pavers-vs-concrete/icon-warranty.svg',
      title: 'Lifetime Warranty',
      description:
        'All quality paver manufactures will have a lifetime warranty on their products. These warranties typically include a guarantee regarding the fact that they will not crack, but more importantly one of their guarantees protects you from damage caused by ice melt. Living in New England we all use some sort of ice melt on our steps and sidewalks. It’s reassuring to know that with pavers, no matter what is used on the surface to melt the snow it has a guarantee to withstand it. Stamped concrete and traditional concrete fail horribly in this category and ice melt is a leading cause of concrete deteriorating.',
    },
  ];

  const examples = [
    {
      url: '/assets/images/services/installation/pavers-vs-concrete/1.png',
      label: 'Concrete shift due to frost',
    },
    {
      url: '/assets/images/services/installation/pavers-vs-concrete/2.png',
      label: 'Concrete cracked',
    },
    {
      url: '/assets/images/services/installation/pavers-vs-concrete/3.png',
      label: 'Stamped concrete sealer failing',
    },
    {
      url: '/assets/images/services/installation/pavers-vs-concrete/4.png',
      label: 'Stamped concrete faded',
    },
    {
      url: '/assets/images/services/installation/pavers-vs-concrete/5.png',
      label: 'Salt damage to stamped concrete',
    },
    {
      url: '/assets/images/services/installation/pavers-vs-concrete/6.png',
      label: 'Salt damage to concrete',
    },
  ];
  return (
    <div>
      <h3 className="text-23 text-light-500 mb-25 font-medium">
        Pavers vs Concrete
      </h3>
      <p className="text-light-400 mb-50">
        Debating between Pavers or concrete for your patios, walkway, pool scape
        or driveway? Let&apos;s take a look at the difference between Pavers and
        Concrete
      </p>
      {cards.map((card, cardIndex) => (
        <div
          className="flex flex-col lg:flex-row text-light-500 mb-50"
          key={cardIndex}
        >
          <div className="max-w-100 min-w-100 mr-auto ml-auto mb-30 lg:mr-30">
            <Image
              layout="responsive"
              width={100}
              height={100}
              placeholder="blur"
              alt={card.title}
              src={card.imgUrl}
              blurDataURL={shimmerUrl}
            />
          </div>
          <div className="text-center lg:text-left">
            <p className="font-bold text-30 mb-30">{card.title}</p>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-30 mb-40">
        {examples.map((example, exampleIndex) => (
          <div className="" key={exampleIndex}>
            <Image
              layout="responsive"
              width={552}
              height={402}
              placeholder="blur"
              src={
                '/assets/images/services/installation/pavers-vs-concrete/' +
                (exampleIndex + 1) +
                '.png'
              }
              blurDataURL={
                '/assets/images/services/installation/pavers-vs-concrete/' +
                exampleIndex +
                1 +
                '-blur.png'
              }
            />
            <p className="text-light-400 text-center mt-10">{example.label}</p>
          </div>
        ))}
      </div>
      <h3 className="font-medium text-primary text-30 mt-50 mb-40 text-center">
        The answer is simple.
        <br /> Concrete Can&apos;t Complete!
      </h3>
      <div className="btn-wrapper justify-center">
        <Link
          href="https://estimate.jdlandscaping.net/request-estimate/step-1"
          passHref
        >
          <button className="btn btn-primary">Request Estimate</button>
        </Link>
      </div>
    </div>
  );
}
