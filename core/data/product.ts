export enum CustomerType {
  InstallationCustomer = 'INSTALLATION_CUSTOMER',
  DIYCustomer = 'DIY_CUSTOMER',
}

export enum ProductCategory {
  Pavers = 'PAVERS',
  RetainingWalls = 'RETAINING_WALL',
}

export enum ColorClass {
  GreyTones = 'GREY_TONES',
  BrownTonesAndTans = 'BROWN_TONES_AND_TANS',
  EarthTones = 'EARTH_TONES',
  RedTones = 'RED_TONES',
  BlueTones = 'BLUE_TONES',
}

export const customerTypes = [
  {
    type: CustomerType.InstallationCustomer,
    title: 'I will use J & D Landscaping for project installation',
    image: '/assets/images/showroom/customer-types/installation-customer.jpg',
  },
  {
    type: CustomerType.DIYCustomer,
    title: "I will install the hardscape project myself / I'm a contractor",
    image: '/assets/images/showroom/customer-types/diy-customer.jpg',
  },
];

export const productCategories = [
  {
    category: ProductCategory.Pavers,
    title: 'Gorgeous Pavers',
    description: 'Patios, Walkways, Driveways, Stairs',
    image: '/assets/images/showroom/pavers.jpg',
  },
  {
    category: ProductCategory.RetainingWalls,
    title: 'Awesome Walls',
    description: 'Retaining Walls, Sitting Walls',
    image: '/assets/images/showroom/walls.jpg',
  },
];

export const paverColors = [
  {
    colorClass: ColorClass.GreyTones,
    title: 'Grey Tones',
    image: '/assets/images/showroom/paver-colors/grey-tones.jpg',
  },
  {
    colorClass: ColorClass.BrownTonesAndTans,
    title: 'Brown Tones and Tans',
    image: '/assets/images/showroom/paver-colors/brown-tones-and-tans.jpg',
  },
  {
    colorClass: ColorClass.EarthTones,
    title: 'Earth Tones',
    image: '/assets/images/showroom/paver-colors/earth-tones.jpg',
  },
  {
    colorClass: ColorClass.RedTones,
    title: 'Red Tones',
    image: '/assets/images/showroom/paver-colors/red-tones.jpg',
  },
  {
    colorClass: ColorClass.BlueTones,
    title: 'Blue Tones',
    image: '/assets/images/showroom/paver-colors/blue-tones.jpg',
  },
];

export const wallColors = [
  {
    colorClass: ColorClass.GreyTones,
    title: 'Grey Tones',
    image: '/assets/images/showroom/wall-colors/grey-tones.jpg',
  },
  {
    colorClass: ColorClass.BrownTonesAndTans,
    title: 'Brown Tones and Tans',
    image: '/assets/images/showroom/wall-colors/brown-tones-and-tans.jpg',
  },
  {
    colorClass: ColorClass.EarthTones,
    title: 'Earth Tones',
    image: '/assets/images/showroom/wall-colors/earth-tones.jpg',
  },
  {
    colorClass: ColorClass.RedTones,
    title: 'Red Tones',
    image: '/assets/images/showroom/wall-colors/red-tones.jpg',
  },
  {
    colorClass: ColorClass.BlueTones,
    title: 'Blue Tones',
    image: '/assets/images/showroom/wall-colors/blue-tones.jpg',
  },
];
