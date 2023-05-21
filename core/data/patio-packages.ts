import {
  getPatioPackageAdditions,
  PatioPackage,
  PatioPackageAddition,
  PatioPackageOption,
} from '../types/patio-package';

export const patioPackageOptions = {
  ECONOMY_SERIES: {
    options: [
      new PatioPackageOption(`15' x 20'`, 9000, '15_20', '9,000'),
      new PatioPackageOption(`20' x 20'`, 12000, '20_20', '12,000'),
      new PatioPackageOption(`20' x 25'`, 15000, '20_25', '15,000'),
    ],
    additional: getPatioPackageAdditions([
      PatioPackageAddition.FirePit,
      PatioPackageAddition.SittingWall,
    ]),
  },
  ENTERTAINMENT_SERIES: {
    options: [
      new PatioPackageOption('400 sq ft', 15350, '400_SQ_FT', '15,350'),
      new PatioPackageOption('600 sq ft', 21350, '600_SQ_FT', '21,350'),
      new PatioPackageOption('800 sq ft', 27350, '800_SQ_FT', '27,350'),
    ],
    additional: getPatioPackageAdditions([
      PatioPackageAddition.Pillars,
      PatioPackageAddition.WallLights,
    ]),
  },
  EXECUTIVE_SERIES: {
    options: [
      new PatioPackageOption('600 sq ft', 42450, '600_SQ_FT', '42,450'),
      new PatioPackageOption('900 sq ft', 51459, '900_SQ_FT', '51,459'),
      new PatioPackageOption('1100 sq ft', 57450, '1100_SQ_FT', '57,450'),
    ],
    additional: getPatioPackageAdditions([
      PatioPackageAddition.OutdoorSpeakers,
      PatioPackageAddition.TimberFrameOrVinylPavilion,
      PatioPackageAddition.OutdoorLighting,
      PatioPackageAddition.LandscapeDesignAndInstallation,
    ]),
  },
  DECK_EXTENDER_SERIES: {
    options: [
      new PatioPackageOption(
        'Under deck 16 x 20 patio',
        9600,
        'UNDER_DECK_16_20_PATIO',
        '9,600'
      ),
      new PatioPackageOption(
        'Under Deck + Fire Pit area',
        15830,
        'UNDER_DECK_PLUS_FIRE_PIT',
        '15,830'
      ),
      new PatioPackageOption(
        '20 x 28 Deck Replacement',
        16800,
        '20_28_DECK_REPLACEMENT',
        '16,800'
      ),
    ],
    additional: getPatioPackageAdditions([
      PatioPackageAddition.GraniteSteps,
      PatioPackageAddition.SideRetainingWalls,
      PatioPackageAddition.SittingWall,
      PatioPackageAddition.FirePit,
    ]),
  },
  WALKWAY_PACKAGES: {
    options: [
      new PatioPackageOption('Up to 25 foot long', 3800, 'UP_TO_25', '3,800'),
      new PatioPackageOption('Up to 35 foot long', 4760, 'UP_TO_35', '4,760'),
      new PatioPackageOption('Up to 45 foot long', 6120, 'UP_TO_45', '6,120'),
      new PatioPackageOption('Up to 55 foot long', 7480, 'UP_TO_55', '7,480'),
    ],
    additional: getPatioPackageAdditions([
      PatioPackageAddition.GraniteSteps,
      PatioPackageAddition.Curbing,
    ]),
  },
  NEW_POOL_PATIO_PACKAGES: {
    options: [
      new PatioPackageOption('750 sq ft', 22500, '750_SQ_FT', '22,500'),
      new PatioPackageOption('1100 sq ft', 33000, '1100_SQ_FT', '33,000'),
      new PatioPackageOption('1500 sq ft', 43500, '1500_SQ_FT', '43,500'),
    ],
    additional: getPatioPackageAdditions([
      PatioPackageAddition.PoolCoping,
      PatioPackageAddition.SittingWall,
      PatioPackageAddition.FirePit,
    ]),
  },
  HARDSCAPE_BAR: {
    price: 5850,
  },
  HARDSCAPE_COUCH: {
    price: 8850,
  },
  HARDSCAPE_GRILL: {
    price: 9850,
  },
};

export const patioPackages = {
  ECONOMY_SERIES: {
    label: 'Economy Series',
    description: `
      <p class="text-light-400 mb-20">Are you looking for a simple patio,something that is cost effective, has style and is installed with the durability to last a lifetime. </p>
      <p class="text-light-400 mb-0">Our economy line offers just that, Choose the style and colors of your choice, Choose the border and choose the size of the paver.</p>
    `,
    info: [
      {
        label: 'Economy Packages',
        options: patioPackageOptions.ECONOMY_SERIES.options,
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.ECONOMY_SERIES.additional,
      },
    ],
    name: 'economy',
    imageCount: 5,
    images: [
      'assets/images/landing-page/patio-packages/economy/1.png',
      'assets/images/landing-page/patio-packages/economy/2.png',
      'assets/images/landing-page/patio-packages/economy/3.png',
      'assets/images/landing-page/patio-packages/economy/4.png',
      'assets/images/landing-page/patio-packages/economy/5.png',
    ],
    seo: {
      title: 'Economy Series Hardscape Packages by J & D Landscaping',
      description:
        'Are you looking for a simple & cost-effective patio that has style and is installed with the durability to last a lifetime? Our economy line offers just that!',
    },
  },
  ENTERTAINMENT_SERIES: {
    label: 'Entertainment Series',
    description: `
      <p class="text-light-400 mb-20">If you are looking to spend time with your family and friends  or a romantic getaway in your backyard the Entertainment series is designed for you.</p>
      <p class="text-light-400 mb-0">Our entertainment line comes in a variety of sizes/colors and includes a fire pit, sitting wall and a custom 10' design, free inlay upgrades  and pre-wire for wall lights.</p>
    `,
    info: [
      {
        label: 'Entertainment Packages',
        options: patioPackageOptions.ENTERTAINMENT_SERIES.options,
      },
      {
        label: 'Project Includes',
        options: [
          new PatioPackageOption('Techo-bloc Valencia Fire pit'),
          new PatioPackageOption(`12' Mini-creta sitting wall`),
          new PatioPackageOption(`10' custom circle design`),
          new PatioPackageOption(`and your choice of paver/border`),
        ],
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.ENTERTAINMENT_SERIES.additional,
      },
    ],
    name: 'entertainment',
    imageCount: 7,
    images: [
      'assets/images/landing-page/patio-packages/entertainment/1.png',
      'assets/images/landing-page/patio-packages/entertainment/2.png',
      'assets/images/landing-page/patio-packages/entertainment/3.png',
      'assets/images/landing-page/patio-packages/entertainment/4.png',
      'assets/images/landing-page/patio-packages/entertainment/5.png',
      'assets/images/landing-page/patio-packages/entertainment/6.png',
      'assets/images/landing-page/patio-packages/entertainment/7.png',
    ],
    seo: {
      title: 'Entertainment Series Hardscape Packages | J & D Landscaping',
      description: `Our Entertainment Series Packages include a fire pit, sitting wall and a custom 10' design, free inlay upgrades and pre-wire for wall lights. Contact us now!`,
    },
  },
  EXECUTIVE_SERIES: {
    label: 'Executive Series',
    description: `
      <p class="text-light-400 mb-20">If you are looking to go all out with outdoor living and live like a boss then our Executive series is for you. </p>
      <p class="text-light-400 mb-0">Our executive packages start larger, include a Hardscape couch, Hardscape bar, and outdoor grill island. <span class="font-weight-medium">(Items can be separated)</span></p>
    `,
    info: [
      {
        label: 'Executive Packages',
        options: patioPackageOptions.EXECUTIVE_SERIES.options,
      },
      {
        label: 'Project Includes',
        options: [
          new PatioPackageOption('Tech-bloc Valencia Fire pit'),
          new PatioPackageOption(`12' Hardscape Couch`),
          new PatioPackageOption(`2 Pillars`),
          new PatioPackageOption(`2 pillar Caps`),
          new PatioPackageOption(`9' Hardscape Bar`),
          new PatioPackageOption(
            `7' built in grill island (In block or natural stone)`
          ),
          new PatioPackageOption(
            `10' custom circle design and your choice of paver.`
          ),
        ],
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.EXECUTIVE_SERIES.additional,
      },
    ],
    name: 'executive',
    imageCount: 5,
    images: [
      'assets/images/landing-page/patio-packages/executive/1.png',
      'assets/images/landing-page/patio-packages/executive/2.png',
      'assets/images/landing-page/patio-packages/executive/3.png',
      'assets/images/landing-page/patio-packages/executive/4.png',
      'assets/images/landing-page/patio-packages/executive/5.png',
    ],
    seo: {
      title: 'Executive Series Hardscape Packages by J & D Landscaping',
      description: `Our Executive Series Hardscape Packages include a hardscape couch, hardscape bar, and outdoor grill island. `,
    },
  },
  DECK_EXTENDER_SERIES: {
    label: 'Deck Extender Series',
    description: `
      <p class="text-light-400 mb-20">If you have a deck you are looking to replace or need more space around an existing deck then these packages are for you.</p>
      <p class="text-light-400 mb-0">J & D Landscaping provides many solutions to maximize your backyard living whether it's adding a patio under an existing deck, coordinating a patio off a new or existing deck or  adding side retaining walls our packages can solve all your problems.</p>
    `,
    info: [
      {
        label: 'Deck Extender Packages',
        options: patioPackageOptions.DECK_EXTENDER_SERIES.options,
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.DECK_EXTENDER_SERIES.additional,
      },
    ],
    name: 'deck-extender',
    imageCount: 9,
    images: [
      'assets/images/landing-page/patio-packages/deck-extender/1.png',
      'assets/images/landing-page/patio-packages/deck-extender/2.png',
      'assets/images/landing-page/patio-packages/deck-extender/3.png',
      'assets/images/landing-page/patio-packages/deck-extender/4.png',
      'assets/images/landing-page/patio-packages/deck-extender/5.png',
      'assets/images/landing-page/patio-packages/deck-extender/6.png',
      'assets/images/landing-page/patio-packages/deck-extender/7.png',
      'assets/images/landing-page/patio-packages/deck-extender/8.png',
      'assets/images/landing-page/patio-packages/deck-extender/9.png',
    ],
    seo: {
      title: 'Deck Extender Series Hardscape Packages by J & D Landscaping',
      description: `If you have a deck you are looking to replace or need more space around an existing deck then these packages are for you. Schedule a free consultation now!`,
    },
  },
  WALKWAY_PACKAGES: {
    label: 'Walkways Packages',
    description: `
      <p class="text-light-400 mb-20">If you need a new walkway, pavers are by far the best way to go, however, many people miss understand the costs, that's why we broke down our most popular sized walkways to help educate you on how affordable paver walkways are.</p>
      <p class="text-light-400 mb-0">All walkway packages include a minimum of 8 inches of base on each side of the walkway for support, your choice of color, paver and border. Standard walkways are 4' wide and include a flair out to the driveway and steps.</p>
    `,
    info: [
      {
        label: 'Walkways Packages',
        options: patioPackageOptions.WALKWAY_PACKAGES.options,
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.WALKWAY_PACKAGES.additional,
      },
    ],
    name: 'walkway',
    imageCount: 9,
    images: [
      'assets/images/landing-page/patio-packages/walkway/1.png',
      'assets/images/landing-page/patio-packages/walkway/2.png',
      'assets/images/landing-page/patio-packages/walkway/3.png',
      'assets/images/landing-page/patio-packages/walkway/4.png',
      'assets/images/landing-page/patio-packages/walkway/5.png',
      'assets/images/landing-page/patio-packages/walkway/6.png',
      'assets/images/landing-page/patio-packages/walkway/7.png',
      'assets/images/landing-page/patio-packages/walkway/8.png',
      'assets/images/landing-page/patio-packages/walkway/9.png',
    ],
    seo: {
      title: 'Walkway Packages by J & D Landscaping',
      description: `Our walkway packages include a minimum of 8 inches of base on each side of the walkway for support, your choice of color, paver and border. Contact us now!`,
    },
  },
  NEW_POOL_PATIO_PACKAGES: {
    label: 'New Pool Patio Packages',
    description: `
      <p class="text-light-400 mb-20">Pools are the centerpiece of many backyards and provide years of excitement for the entire family. Given the investment,  it's important to remember to budget for pool patios, don't end up short and get stuck with concrete.</p>
      <p class="text-light-400 mb-0">Pool patio packages are designed around your budget, pool  design and to maximize usable space.</p>
    `,
    info: [
      {
        label: 'Pool patio Packages',
        options: patioPackageOptions.NEW_POOL_PATIO_PACKAGES.options,
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.NEW_POOL_PATIO_PACKAGES.additional,
      },
    ],
    name: 'pool-patio',
    imageCount: 5,
    images: [
      'assets/images/landing-page/patio-packages/pool-patio/1.png',
      'assets/images/landing-page/patio-packages/pool-patio/2.png',
      'assets/images/landing-page/patio-packages/pool-patio/3.png',
      'assets/images/landing-page/patio-packages/pool-patio/4.png',
      'assets/images/landing-page/patio-packages/pool-patio/5.png',
    ],
    seo: {
      title: 'New Pool Patio Packages by J & D Landscaping',
      description: `All our Pool Patio Packages are designed around your budget, pool design and to maximize usable space. Schedule a free consultation now to learn more!`,
    },
  },
  HARDSCAPE_BAR: {
    label: 'Hardscapes Bar',
    description: `
      <p class="text-light-400 mb-0">Outdoor patios are all the rage right now, and being able to have a designated hangout or "bar" area where you can pull up a chair or rest your beer is where its at. That's why J & D Landscaping come up with their signature Hardscape Bar.</p>
    `,
    info: [
      {
        label: `Hardscape Bar  <span class="ml-40">$5,850</span>`,
      },
      {
        label: 'Specifications',
        options: [
          new PatioPackageOption('Your choice of color block and caps'),
          new PatioPackageOption(`9' 3" wide x 3" deep`),
          new PatioPackageOption(`New England winter durable `),
          new PatioPackageOption(`15 color combinations`),
        ],
      },
    ],
    name: 'hardscape-bar',
    imageCount: 3,
    images: [
      'assets/images/landing-page/patio-packages/hardscape-bar/1.png',
      'assets/images/landing-page/patio-packages/hardscape-bar/2.png',
      'assets/images/landing-page/patio-packages/hardscape-bar/3.png',
    ],
    seo: {
      title: 'Hardscape Bar Packages by J & D Landscaping',
      description: `Schedule a free consultation now to learn more about the Hardscape Bar Packages by J & D Landscaping!`,
    },
  },
  HARDSCAPE_COUCH: {
    label: 'Hardscapes Couch',
    description: `
      <p class="text-light-400 mb-0">If you are looking for a patio showpiece, adding a Hardscape couch will do the trick, these indestructible outdoor couches are great hang out locations, can be decorated with pillows and are designed to be the perfect height.</p>
    `,
    info: [
      {
        label: 'Hardscape Couch   <span class="ml-40">$8,850</span>',
      },
      {
        label: 'Specifications',
        options: [
          new PatioPackageOption(`Your choice of color block and caps`),
          new PatioPackageOption(`2 pillars plus matching caps`),
          new PatioPackageOption(`12 feet of sitting area`),
          new PatioPackageOption(`New England winter durable`),
          new PatioPackageOption(`15 color combinations`),
        ],
      },
    ],
    name: 'hardscape-couch',
    imageCount: 5,
    images: [
      'assets/images/landing-page/patio-packages/hardscape-couch/1.png',
      'assets/images/landing-page/patio-packages/hardscape-couch/2.png',
      'assets/images/landing-page/patio-packages/hardscape-couch/3.png',
      'assets/images/landing-page/patio-packages/hardscape-couch/4.png',
      'assets/images/landing-page/patio-packages/hardscape-couch/5.png',
    ],
    seo: {
      title: 'Hardscape Couch Packages by J & D Landscaping',
      description: `Schedule a free consultation now to learn more about the Hardscape Couch Packages by J & D Landscaping!`,
    },
  },
  HARDSCAPE_GRILL: {
    label: 'Hardscape Grill Island',
    description: `
      <p class="text-light-400 mb-0">If you are looking for an affordable outdoor grill island our basic package has everything you are looking for. </p>
    `,
    info: [
      {
        label: 'Hardscape Grill Island   <span class="ml-40">$9,850</span>',
      },
      {
        label: 'Specifications',
        options: [
          new PatioPackageOption(`Your choice of block or natural stone`),
          new PatioPackageOption(`Includes Granite Top`),
          new PatioPackageOption(`32" Sumerset Stainless steel Grill`),
          new PatioPackageOption(`Matching Stainless steel cabinet`),
          new PatioPackageOption(`New England winter durable `),
        ],
      },
    ],
    name: 'hardscape-grill',
    imageCount: 1,
    images: ['assets/images/landing-page/patio-packages/hardscape-grill/1.png'],
    seo: {
      title: 'Hardscape Grill Island Packages by J & D Landscaping',
      description: `If you are looking for an affordable outdoor grill island, our basic package has everything you are looking for. Schedule a free consultation now to learn more!`,
    },
  },
};

export const patioPackageCards = [
  { image: 'economy', label: 'Economy Series', id: PatioPackage.Economy },
  {
    image: 'entertainment',
    label: 'Entertainment Series',
    id: PatioPackage.Entertainment,
  },
  { image: 'executive', label: 'Executive Series', id: PatioPackage.Executive },
  {
    image: 'deck-extender',
    label: 'Deck Extender Series',
    id: PatioPackage.DeckExtender,
  },
  { image: 'walkway', label: 'Walkways Packages', id: PatioPackage.Walkway },
  {
    image: 'pool-patio',
    label: 'New Pool Patio Packages',
    id: PatioPackage.PoolPatio,
  },
  {
    image: 'hardscape-bar',
    label: 'Hardscape Bar',
    id: PatioPackage.HardscapeBar,
  },
  {
    image: 'hardscape-couch',
    label: 'Hardscape Couch',
    id: PatioPackage.HardscapeCouch,
  },
  {
    image: 'hardscape-grill',
    label: 'Hardscape Grill Island',
    id: PatioPackage.HardscapeGrill,
  },
];
