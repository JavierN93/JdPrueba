import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { noop } from '../../core/types/common';

SwiperCore.use([Autoplay, Pagination]);

const projectManagementSteps = [
  {
    title: 'Tell us about your project',
    content:
      'We make planning, getting a quote and managing your project simple and efficient through the use of our online platform.',
    description: [
      {
        label: 'Start by telling us about your project',
        text: 'With the information provided by you, a project consultant will be able to give you a rough estimate of what your project will cost and answer any questions you may have.',
      },
      {
        label: 'Choose your materials',
        text: 'With thousands of photos and designs to view from past J & D Landscaping projects we make saving what you like simple through our idea board and allowing a project consultant to better understand what you have in mind.',
      },
      {
        label: 'Schedule a call',
        text: "We understand how frustrating it can be to call companies, get no response and play phone tag so we made talking to a project consultant simple, simply schedule a call for when it's convenient for both parties through our online scheduling tool.",
      },
    ],
    images: ['register-1', 'register-2', 'register-3'],
  },
  {
    title: 'Hire J & D Landscaping',
    content:
      'We understand there is a lot of back and forth, when it comes to designing a project, between size, budgets, colors and much more. The process can be quick for some and years for others, so we wanted to make the entire process easier for everyone by providing them an account where everything can be stored, edited, reviewed, ideas saved, they can easily reach out to us and of course hire us. Our Hardscape Hub provides you all the tools you need to ensure a smooth project when working with J & D Landscaping.',
    description: [
      {
        label: 'Review Estimate',
        text: 'We understand many homeowners struggle with budgeting and planning their hardscape project, they simply don’t know what projects cost. Many have to get an estimate and then save for the next few years. That’s why the first step of working with J & D Landscaping is getting a virtual estimate.',
      },
      {
        label: 'Set up Site Visit',
        text: 'After you’ve reviewed your estimate and determined it’s within your budget, it’s time for a Site visit with a project consultant who will help you design your project, provide ideas, work within your budget and educate you on the entire process. Simply click “Schedule site visit” and pick a time that works best for you.',
      },
      {
        label: 'Review Proposal and Hire J & D Landscaping',
        text: 'Based on the discussions from the site visit your project consultant will provide you a final proposal with the options discussed on site. Choose what projects you would like to move forward with and agree to the terms and conditions to get on our schedule.',
      },
    ],
    images: ['estimate-1', 'estimate-2', 'estimate-3'],
  },
  {
    title: 'Manage your project',
    content:
      "Your hardscaping project is an investment that needs to be managed and protected, it's important that there is transparency when it comes to payments, schedules and that you can easily reach your project consultant. That's why our Hardscape Hub has built in features allowing you to plan, hire and manage your project from start to finish easier than ever.",
    description: [
      {
        label: 'Simplified Payments',
        text: 'When it comes to placing your deposit to lock-in a date or simply making a milestone payment we make it simple for you to pay securely.',
      },
      {
        label: 'Simplified contracts, planning and scheduling',
        text: 'Sign contracts digitally, Receive and view 3D drawings online, view your estimated schedule slot and much more.',
      },
      {
        label: 'Easily communicate with your project consultant',
        text: 'Easily communicate with your project consultant',
      },
    ],
    images: ['management-1', 'management-2', 'management-3'],
  },
];

interface Props {
  onViewClicked: () => void;
}

export default function ProjectManagement({ onViewClicked }: Props) {
  return (
    <>
      {projectManagementSteps.map((step, stepIndex) => (
        <div className="grid lg:grid-cols-2 gap-x-20 mb-80" key={stepIndex}>
          <div
            className={
              'flex items-center ' +
              (stepIndex % 2 ? 'order-1 lg:order-2' : 'order-1 lg:order-1')
            }
          >
            <div className="text-light-500">
              <h2 className="text-30 font-bold mb-15 text-center lg:text-left">
                {step.title}
              </h2>
              <p className="mb-50 text-center lg:text-left">{step.content}</p>

              <ul className="list-disc text-primary pl-15">
                {step.description.map((description, descriptionIndex) => (
                  <li key={descriptionIndex}>
                    <h6 className="text-16 font-bold mb-15">
                      {description.label}
                    </h6>
                    <p className="text-light-500 mb-15">{description.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={
              stepIndex % 2 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
            }
          >
            <div className="max-w-310 lg:max-w-500 relative mx-auto rounded-lg shadow-md bg-white overflow-hidden mt-30">
              <Swiper
                className="max-w-300 lg:max-w-500"
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 4000 }}
                pagination={{ el: `.step-${stepIndex}`, type: 'bullets' }}
              >
                {step.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={
                        '/assets/images/why-choose-us/project-management/' +
                        image +
                        '.jpg'
                      }
                      width={908}
                      height={1074}
                      layout="responsive"
                      alt="Registration"
                      placeholder="blur"
                      blurDataURL={
                        '/assets/images/why-choose-us/project-management/' +
                        image +
                        '-blur.png'
                      }
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div
                className={
                  'swiper-pagination-slider absolute w-full h-40 bottom-0 left-0 flex justify-center items-center z-10 bg-secondary bg-opacity-30 ' +
                  'step-' +
                  stepIndex
                }
              />
            </div>
          </div>
        </div>
      ))}
      <div className="text-center">
        <button
          className="btn btn-primary btn-sm-block"
          onClick={onViewClicked}
        >
          View Installation process
        </button>
      </div>
    </>
  );
}

ProjectManagement.defaultProps = {
  onViewClicked: noop,
};
