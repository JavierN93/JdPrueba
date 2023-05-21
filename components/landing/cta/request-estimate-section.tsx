import Image from 'next/image';
import Link from 'next/link';

export function RequestEstimateSection() {
  return (
    <section className="relative border-b-4 border-primary">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/assets/images/cta-estimate/cta-estimate-bg.jpg"
          alt="Request Estimate"
          layout="fill"
          quality={100}
          placeholder="blur"
          blurDataURL="/assets/images/cta-estimate/cta-estimate-bg-blur.png"
          objectFit="cover"
        />
      </div>
      <div className="container mx-auto relative z-10 py-50 lg:py-80">
        <div className="flex-col lg:flex lg:flex-row items-center">
          <div className="max-w-full lg:max-w-695 text-white mb-40 text-center lg:text-left">
            <h3 className="text-32 md:text-44 mb-15">
              Quality. Efficient. Affordable.
            </h3>
            <p className="text-16">
              Now is the time to start planning your Hardscaping project,
              it&apos;s simple, easy and free. To get started today simply
              request a free estimate.
            </p>
          </div>
          <div className="flex-grow text-center lg:text-right">
            <Link
              href="https://estimate.jdlandscaping.net/request-estimate/step-1"
              passHref
            >
              <button className="btn btn-primary btn-sm-block">
                Request Estimate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
