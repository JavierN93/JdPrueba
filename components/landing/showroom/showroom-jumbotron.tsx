import Image from 'next/image';

export function ShowroomJumbotron() {
  return (
    <section className="relative h-380">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/assets/images/services/marketplace/showroom/header.jpg"
          alt="Showroom"
          layout="fill"
          quality={100}
          objectFit="cover"
        />
      </div>
      <div className="absolute bottom-70 w-full">
        <div className="container mx-auto relative z-10">
          <h1 className="text-44 text-white text-center lg:text-left">
            Showroom
          </h1>
        </div>
      </div>
    </section>
  );
}
