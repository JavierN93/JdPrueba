export enum ProjectAccessoryType {
  Steps = 'STEPS',
  SittingWall = 'SITTING_WALL',
  Pillars = 'PILLARS',
  Lighting = 'LIGHTING',
  Patio = 'PATIO',
  RaisedPatio = 'RAISED_PATIO',
  Walkway = 'WALKWAY',
  RetainingWall = 'RETAINING_WALL',
  PoolPatio = 'POOL_PATIO',
  FirePit = 'FIRE_PIT',
  DrivewayParking = 'DRIVEWAY_PARKING',
  Veneer = 'VENEER',
  Fireplace = 'FIREPLACE',
  OutdoorKitchen = 'OUTDOOR_KITCHEN',
  CleaningSanding = 'CLEANING_SANDING',
  MinorRepair = 'MINOR_REPAIR',
  LandscapingPlants = 'LANDSCAPING_PLANTS',
  StoneCurbing = 'STONE_CURBING',
  Other = 'OTHER',
}

export enum ProjectLocationType {
  FrontYard = 'FRONT_YARD',
  BackYard = 'BACK_YARD',
  SideYard = 'SIDE_YARD',
  PartOfPatioDesign = 'PART_OF_PATIO_DESIGN',
  Other = 'OTHER',
}

export enum MaterialType {
  Pavers = 'PAVERS',
  NaturalStone = 'NATURAL_STONE',
  BlueStone = 'BLUE_STONE',
  Granite = 'GRANITE',
  Brick = 'BRICK',
  SrwSystems = 'SRW_SYSTEMS',
  Slate = 'SLATE',
  FieldStone = 'FIELD_STONE',
  Boulders = 'BOULDERS',
  Concrete = 'CONCRETE',
  StampedConcrete = 'STAMPED_CONCRETE',
  SyntheticGrass = 'SYNTHETIC_GRASS',
  ManufacturedBlock = 'MANUFACTURED_BLOCK',
  Veneer = 'VENEER',
  Other = 'OTHER',
}

export interface Idea {
  id: string;
  indexNumber: number;
  url: string;
  projectType: ProjectAccessoryType;
  materialTypes: MaterialType[];
  createdAt: string;
  updatedAt: string;
  selected?: boolean;
  width: number;
  height: number;
}
