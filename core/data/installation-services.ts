import { ProjectAccessoryType } from '../types/project';

export const installationServices = {
  patios: {
    id: 'PATIOS',
    title: 'Bring your backyard to life.',
    description:
      'Want to spend more time enjoying the outdoors? Need more room for entertaining? Or want a place to simply “get away” in your own backyard? A patio done by J & D Landscaping is your solution, with custom design ideas and accessories including fire pits, sitting walls, outdoor kitchen and couches. Let the patios of your dreams become a reality.',
    name: 'patios',
    count: 7,
    moreLink: `/idea-board?projectType=${ProjectAccessoryType.Patio}`,
    seo: {
      title: 'Patio Installation Services | J & D Landscaping',
      description: `Hire J & D Landscaping to create the patio of your dreams. Quality. Efficient. Affordable. 17 years in business. 1,000+ projects completed. Request estimate now!`,
    },
  },
  walkways: {
    id: 'WALKWAYS',
    title: 'Add value and safety to every household.',
    description:
      'Walkways are an important part of front yard landscaping. A beautiful walkway will greatly enhance your home’s curb appeal and provide a way for you and your guests to get to your front door. No matter the size or shape of your walkway you can rest assured that J & D Landscaping will help you design a custom walkway that fits your home.',
    name: 'walkways',
    count: 7,
    moreLink: `/idea-board?projectType=${ProjectAccessoryType.Walkway}`,
    seo: {
      title: 'Walkway Installation Services | J & D Landscaping',
      description: `No matter the size or shape of your walkway you can rest assured that J & D Landscaping will help you design a custom walkway that fits your home.`,
    },
  },
  retainingWalls: {
    id: 'RETAINING_WALLS',
    title: 'Make the impossible, possible.',
    description:
      'Retaining walls are one of the most underappreciated parts of the Hardscape industry, although retaining walls serve as the backbone of many projects. Retaining walls have their own set of challenges separate from pavers including proper drainage, geo-grid and back filling. There are many choices for retaining wall blocks and each type of block is rated for a specific load capacity. J & D Landscaping has extensive experience in the SRW industry and will help explain the differences.',
    name: 'retaining-walls',
    count: 7,
    moreLink: `/idea-board?projectType=${ProjectAccessoryType.RetainingWall}`,
    seo: {
      title: 'Retaining Wall Installation Services | J & D Landscaping',
      description: `Hire J & D Landscaping to create a functional and beautiful retaining wall for your home. Quality. Efficient. Affordable. Request an estimate now!`,
    },
  },
  driveways: {
    id: 'DRIVE_WAYS',
    title: 'Stand out from the neighbors.',
    description:
      'Paver driveways have become very popular in this day and age. With the rising cost of asphalt and the nearly indestructible durability of pavers, it makes sense to consider doing pavers once and never having to worry about replacing your driveway again. Driveways are more complex than patios and walkways and require additional measures to ensure durability against cars and trucks. J & D Landscaping takes extra precaution when installing paver driveways to ensure they last a lifetime.',
    name: 'driveways',
    count: 7,
    moreLink: `/idea-board?projectType=${ProjectAccessoryType.DrivewayParking}`,
    seo: {
      title: 'Driveway Installation Services | J & D Landscaping',
      description: `J & D Landscaping takes extra precaution when installing paver driveways to ensure they last a lifetime. Request an estimate now!`,
    },
  },
  completeTransformations: {
    id: 'COMPLETE_TRANSFORMATIONS',
    title: 'Complete Transformations.',
    hasBeforeAfter: true,
    description:
      'Think your backyard can’t be fixed? Have no idea where to begin? J & D Landscaping has seen it all when it comes to outdated backyards and we are here to help! A completed Hardscape project using walls, pavers, and outdoor elements can turn any basic backyard into an updated backyard of your dreams.',
    name: 'complete-transformations',
    count: 6,
    seo: {
      title: 'Complete Hardscape Transformations | J & D Landscaping',
      description: `J & D Landscaping has seen it all when it comes to outdated backyards and we're here to help! 17 years in business. 1,000+ projects completed. Request estimate!`,
    },
  },
  poolPatios: {
    id: 'POOL_PATIOS',
    title: 'Create your outdoor oasis.',
    description:
      'Pool Patios allow the imagination to come to life, J & D Landscaping pool patio projects have incorporated gas fire pits, complete outdoor kitchen areas, Hardscape bars, Pavilions and various other custom ideas. Whether you are looking to upgrade your existing pool patio or plan a new pool from scratch, J & D Landscaping can coordinate the entire project from creating your custom design to completion.',
    name: 'pool-patios',
    count: 7,
    moreLink: `/idea-board?projectType=${ProjectAccessoryType.PoolPatio}`,
    seo: {
      title: 'Pool Patio Installation Services | J & D Landscaping',
      description: `Whether you are looking to upgrade your existing pool patio or plan a new pool from scratch, at J & D Landscaping, we've got you covered. Request estimate now!`,
    },
  },
  designServices: {
    id: 'DESIGN_SERVICES',
    title: 'Design Services',
    description:
      'The options and possibilities in the Hardscape industry are countless and we understand the difficulties envisioning your completed project. We offer custom 3D design services to help our customers realize the potential of their backyard. This 3D service allows you to visualize your project and fine tune the design before breaking ground.',
    name: 'design-services',
    count: 6,
    seo: {
      title: 'Hardscape Installation Services | J & D Landscaping',
      description: `J & D Landscaping provides Hardscape Installation Services in Connecticut. Quality. Efficient. Affordable.`,
    },
  },
  stepsAndStaircases: {
    id: 'STEPS_AND_STAIRCASES',
    title: 'Hardscape Steps & Staircases',
    description:
      '<span class="font-weight-medium">Steps and staircases are a very important part of most Hardscape projects</span>, it’s important to find the stairs that work best with your project. Whether you are looking to step out a back slider door onto your beautiful patio below or walk up or down a steep hill to your driveway, J & D Landscaping has the solution picking out the best choice of stairs to complete your project.',
    name: 'steps-and-staircases',
    count: 7,
    seo: {
      title: 'Steps & Staircases Installation Services | J & D Landscaping',
      description: `J & D Landscaping offers efficient and affordable steps & staircases installation services. 17 years in business. 1,000+ projects completed. Request estimate now!`,
    },
  },
};
