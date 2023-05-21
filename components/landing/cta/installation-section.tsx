import Image from 'next/image';
import Link from 'next/link';

export function InstallationSection() {
  return (
    <section className="relative bg-primary bg-opacity-60">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/assets/images/cta-installation/cta-installation-bg.png"
          alt="Installation Service"
          layout="fill"
          placeholder="blur"
          blurDataURL="/assets/images/cta-installation/cta-installation-bg-blur.png"
          quality={100}
          objectFit="cover"
        />
      </div>
      <div className="container mx-auto relative z-10 py-40 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="flex-grow max-w-670 pt-0 lg:pt-60 mr-0 md:mr-60">
            <Image
              src="/assets/images/cta-installation/cta-installation-image.png"
              width={853}
              height={456}
              alt="Installation Service"
              layout="responsive"
              quality={100}
              placeholder="blur"
              blurDataURL="/assets/images/cta-installation/cta-installation-image-blur.png"
            />
          </div>
          <div className="text-white text-center lg:text-right w-full lg:max-w-445">
            <h2 className="text-32 md:text-44 font-medium mb-10">
              Installation Services
            </h2>
            <p className="text-18 font-medium mb-40">Hardscaping Simplified</p>
            <Link href="/services/installation/patios" passHref>
              <button className="btn bg-white text-primary btn-sm-block">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
