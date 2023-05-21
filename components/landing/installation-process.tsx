import Link from 'next/link';
import { Timeline } from '../../core/types/timeline';

import { noop } from '../../core/types/common';
import HistoryTimeline from './history-timeline';
//
const timeline: Timeline[] = [
  {
    label: 'Day 1',
    events: [
      {
        label: 'Before',
        text: 'This project in Somers, Connecticut calls for the removal of the existing bluestone and concrete patio, with the installation of a new retaining wall and raised patio that is extended over to the deck steps creating a 16 x 34 patio space with the installation of a future pavilion.',
        image: '/assets/images/why-choose-us/installation-process/step1.png',
        blur: '/assets/images/why-choose-us/installation-process/step1-blur.png',
      },
      {
        label: 'Step 2 - Day 1',
        text: 'J & D Landscaping crews take great care when it comes to removing existing materials from a job site, whether it is removing concrete from around an existing pool, removing an old deck or simply picking up existing pavers. We take the time to ensure that we keep the job site neat and we prevent damage.<span class="text-primary ml-5 mt-20 d-block">Removal of the existing concrete, bluestone and other materials.</span>',
        image: '/assets/images/why-choose-us/installation-process/step2.png',
        blur: '/assets/images/why-choose-us/installation-process/step2-blur.png',
      },
      {
        label: 'Step 3 - Day 1',
        text: 'J & D Landscaping knows its “all in the base” and the first step to doing a proper base is to have proper excavation. Based on your type of soil and grade we ensure we dig to the proper depth. Don’t let anyone tell you anything less than 12” is sufficient, in New England it simply isn\'t. Our minimal dig depth is 12” in ideal conditions.<span class="d-block mt-20 ml-5 text-primary">Excavate for the patio and retaining wall.</span>',
        image: '/assets/images/why-choose-us/installation-process/step3.png',
        blur: '/assets/images/why-choose-us/installation-process/step3-blur.png',
      },
      {
        label: 'Step 4 - Day 1',
        text: 'One of the most important steps of a hardscape installation is the base preparation, J & D Landscapings’ process has been tried and tested with 1000’s of projects throughout New England’s harsh winters. We install a Geo-Textile fabric that separates the subsoil and our new base materials, the base is compacted in lifts ensuring proper compaction density and our overlay of base ensures your project does not move in the future. Your project consultant will be able to explain more about what makes us different  and answer any questions you may have about this important process.<span class="d-block mt-20 ml-5 text-primary">Installing and compacting the base for the retaining wall.</span>',
        image: '/assets/images/why-choose-us/installation-process/step4.png',
        blur: '/assets/images/why-choose-us/installation-process/step4-blur.png',
      },
      {
        label: 'Step 5 - Day 1',
        text: 'The second most important step of the entire installation process is leveling of the screed layer J & D Landscaping ensures all of their projects are sloped the right way, if its a retaining wall, the base layer is leveled and the first course is laid and double checked ensuring a level retaining walls. If it\'s a patio or walkway we ensure they are drained to the appropriate target marks, away from the house and usually into the yard or  a drain. It takes skill and expertise to properly drain complex projects, have peace of mind that your project will be done right the first time with J & D Landscaping.<span class="d-block ml-5 mt-20 text-primary">Leveling the base of the retaining wall and installation of the first layer.</span>',
        image: '/assets/images/why-choose-us/installation-process/step5.png',
        blur: '/assets/images/why-choose-us/installation-process/step5-blur.png',
      },
      {
        label: 'Step 6 - Day 1',
        text: 'The retaining wall has been built, the caps have been installed and all proper drainage and back fill have been completed and the caps are left to dry overnight <span class="text-primary">(End of day one).</span>',
        image: '/assets/images/why-choose-us/installation-process/step6.png',
        blur: '/assets/images/why-choose-us/installation-process/step6-blur.png',
      },
    ],
  },
  {
    label: 'Day 2',
    events: [
      {
        label: 'Step 7 - Day 2',
        text: 'With J & D Landscaping the detail matter, many contractors would not take the extra time to cut the back of the caps on a project like this, instead they would leave a gap and fill it, Not our crews, we are all about attention to detail.<span class="d-block mt-20 ml-5 text-primary">The base for the patio has been installed and is now being compacted to proper compaction ratio while we are cutting the back of the caps for a smooth connection with the pavers.</span>',
        image: '/assets/images/why-choose-us/installation-process/step7.png',
        blur: '/assets/images/why-choose-us/installation-process/step7-blur.png',
      },
      {
        label: 'Step 8 - Day 2',
        text: 'If you\'re investing in a hardscape project, make sure your contractor has the right tools to get the project done and ensure a long lasting project. All of J & D Landscapings’s crews have proper sized compaction equipment to ensure a well compacted base, we use the finest level screed stone available (Not sand or stone dust) and we ensure your base is perfect.<span class="d-block mt-20 ml-5 text-primary">Now that proper compaction is complete, we are leveling the base layer so that it is ready for paver installation.</span>',
        image: '/assets/images/why-choose-us/installation-process/step8.png',
        blur: '/assets/images/why-choose-us/installation-process/step8-blur.png',
      },
      {
        label: 'Step 9 - Day 2',
        text: 'When J & D Landscaping installs a project, we install it like it was our own. Laying pavers is an art, there is a slew of things we look for and pay attention to that can make the difference between an “ok job and a “wow” job. Things you as a homeowner may never think about but we as professionals could point out in a minute. When you speak with a project consultant we will go over all the details that will set your project apart from your neighbors.<span class="d-block mt-20 ml-5 text-primary">Once the base has been leveled, the pavers are installed and are ready to be cut into place were needed.</span>',
        image: '/assets/images/why-choose-us/installation-process/step9.png',
        blur: '/assets/images/why-choose-us/installation-process/step9-blur.png',
      },
      {
        label: 'Step 10 - Day 2',
        text: 'Make your project unique with a border, double border or inlay pattern, J & D Landscaping love’s designing projects that pop, and with no extra charge for this we encourage you to be open minded if your project consultant suggests this as an option.<span class="d-block mt-20 ml-5 text-primary">With cutting complete, the installation of the solider course "Border pavers" and edging is now installed.</span>',
        image: '/assets/images/why-choose-us/installation-process/step10.png',
        blur: '/assets/images/why-choose-us/installation-process/step10-blur.png',
      },
      {
        label: 'Step 11 - Day 2',
        text: 'The final steps of the project include sweeping in polymeric sand between the paver joints and cleaning up the job site and with that <span class="text-primary">the project is complete in less than two days from start to finish!</span> ',
        image: '/assets/images/why-choose-us/installation-process/step11.png',
        blur: '/assets/images/why-choose-us/installation-process/step11-blur.png',
      },
    ],
  },
];

interface Props {
  onViewClicked: () => void;
}

export function InstallationProcess({ onViewClicked }: Props) {
  return (
    <>
      <div className="text-light-400 text-center mb-30 max-w-1000 mx-auto">
        <p className="mb-20">
          J & D Landscaping’s installation process has been perfected over the
          last 16 years, we are up to date on the latest trends, use top of the
          line materials and ensure quality workmanship. Our process sets us
          apart from many other contractors, our crews and trained to follow a
          set procedure on every job and we warranty our workmanship.
        </p>
        <p className="mb-20">
          Our efficiency, our process, and our teams set us apart, we will not
          be the cheapest contractor, and we will not be the most expensive,
          instead you will find us right in the middle yet with a process
          superior to most in the industry.
        </p>
        <p className="mb-0">To learn more about our pricing</p>
      </div>

      <div className="btn-wrapper justify-center">
        <Link
          href="https://estimate.jdlandscaping.net/request-estimate/step-1"
          passHref
        >
          <button className="btn btn-primary">Request Estimate</button>
        </Link>
        <Link href="/patio-packages" passHref>
          <button className="btn btn-primary">Patio Packages</button>
        </Link>
      </div>

      <HistoryTimeline timeline={timeline} />

      <div className="flex justify-center">
        <button
          className="btn btn-primary btn-sm-block"
          onClick={onViewClicked}
        >
          View Project management
        </button>
      </div>
    </>
  );
}

InstallationProcess.defaultProps = {
  onViewClicked: noop,
};
