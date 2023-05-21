import Image from 'next/image';
import IdeaMasonryBlock from './idea-masonry-block';
import Link from 'next/link';

export default function InstallationServiceInlayAndBordersContent() {
  return (
    <div>
      <h3 className="text-23 text-light-500 mb-25 font-medium">
        Hardscape Inlays & Borders
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-30 text-light-400 mb-30">
        <div className="col-span-5">
          <p className="mb-20">
            You’ve made the decision to move forward with your Hardscape
            project, now it’s time to customize it! Why have the same boring
            patios your neighbor has when you can customize it to fit your style
            and taste? One of the best ways to customize a project is by adding
            different borders or inlays into the design.
          </p>
          <p>
            Customizations like this will help your project stand out from the
            others and create a unique feel in your back yard.
          </p>
        </div>
        <div className="col-span-7">
          <div>
            <Image
              layout="responsive"
              placeholder="blur"
              width={944}
              height={520}
              alt="Inlay & Borders"
              src="/assets/images/services/installation/inlay-and-borders/preview.png"
              blurDataURL="/assets/images/services/installation/inlay-and-borders/preview-blur.png"
            />
          </div>
        </div>
      </div>
      <p className="text-light-400 mb-35">
        Accessories like a Hardscape couch, bar, lighting, fire pit or sitting
        wall will make your patios even more useful and can be completed as part
        of the original project or in phases over the coming seasons. With J & D
        Landscaping your hardscape project possibilities are endless.
      </p>
      <div className="mb-50">
        <IdeaMasonryBlock name="inlay-and-borders" />
      </div>
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
