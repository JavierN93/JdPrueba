import { Jumbotron } from '../../jumbotron';

export default function InstallationServiceHeaderSection() {
  return (
    <>
      <Jumbotron
        title=""
        image="/assets/images/services/installation/header.jpg"
        blur="/assets/images/services/installation/header-blur.png"
      />
      <section className="pt-60 lg:pt-100 pb-30">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-primary text-22">Get Inspired with</p>
            <h2 className="text-32 md:text-44 text-light-500 text-center">
              Our Services
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
