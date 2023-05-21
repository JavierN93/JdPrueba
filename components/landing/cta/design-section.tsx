import Image from 'next/image';
import Link from 'next/link';

export function DesignSection() {
  return (
    <section className="relative bg-warning bg-opacity-60">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/assets/images/cta-design/cta-design-bg.png"
          alt="Design Service"
          layout="fill"
          placeholder="blur"
          blurDataURL="/assets/images/cta-design/cta-design-bg-blur.png"
          quality={100}
          objectFit="cover"
        />
      </div>
      <div className="container mx-auto relative z-10 py-40 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="text-white text-center lg:text-left w-full lg:max-w-445">
            <h2 className="text-32 md:text-44 font-medium mb-10">
              3D Rendering Services
            </h2>
            <p className="text-18 font-medium mb-40">
              DIY Home Owners/Contractors
            </p>
            <Link href="/services/design" passHref>
              <button className="btn bg-white text-primary btn-sm-block">
                Learn more
              </button>
            </Link>
          </div>
          <div className="flex-grow max-w-770 pt-0 lg:pt-60">
            <Image
              src="/assets/images/cta-design/cta-design-image.png"
              width={853}
              height={456}
              alt="Design Service"
              layout="responsive"
              quality={100}
              placeholder="blur"
              blurDataURL="/assets/images/cta-design/cta-design-image-blur.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
