import Link from 'next/link';
import Image from 'next/image';
import { Jumbotron } from '../jumbotron';
import { patioPackageCards } from '../../../core/data/patio-packages';

export default function PatioPackageSelectSection() {
  return (
    <>
      <Jumbotron
        title="Hardscape Packages"
        image="/assets/images/patio-packages/header.jpg"
        blur="/assets/images/patio-packages/header-blur.png"
      />
      <section className="py-100">
        <div className="container mx-auto">
          <div className="text-center text-light-500">
            <h2 className="text-30 font-bold mb-60">
              Signature Hardscape Packages by J & D Landscaping
            </h2>
            <p className="max-w-900 mx-auto mb-20">
              If you&apos;ve been dreaming of a Hardscape project, but have
              trouble deciding what&apos;s going to look best and what to budget
              for your project our signature packages are a great place to
              start.
            </p>
            <p className="max-w-900 mx-auto">
              J & D Landscaping&apos;s Hardscape packages can be customized to
              fit your backyard and offer you the selection and flexibility to
              bring your Hardscape dream to reality.
            </p>
          </div>
        </div>
        <div className="container mx-auto mt-60">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
            {patioPackageCards.map((card, index) => (
              <Link href={'/patio-packages/' + card.id} passHref key={index}>
                <div className="p-15 pb-20 text-center rounded-md shadow-lg cursor-pointer">
                  <Image
                    src={
                      '/assets/images/patio-packages/' +
                      card.image +
                      '/card.png'
                    }
                    width={700}
                    height={532}
                    alt={card.label}
                    placeholder="blur"
                    blurDataURL={
                      '/assets/images/patio-packages/' +
                      card.image +
                      '/card-blur.png'
                    }
                    layout="responsive"
                  />
                  <p className="text-18 text-primary mb-10">{card.label}</p>
                  <button className="btn btn-primary btn-mini">
                    See Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
