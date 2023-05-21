import { Entity } from './base';
import {
  DrainageType,
  MachineAccessType,
  PreferredColor,
  Project,
  PropertyGradeType,
  SoilType,
} from './project';

export interface SiteVisitAccessory {
  comment: string;
  attachments: string[];
}

export interface SiteVisitAccessoryWithType<T> extends SiteVisitAccessory {
  type: T;
}

export interface SiteVisit extends Entity {
  project: Project;
  attachments: string[];
  manufacturer: string;
  productName: string;
  preferredColors: PreferredColor[];
  preferredSize: string;
  preferredTexture: string;
  preferredPrice: string;
  additionalDesign: string;
  machineAccess: SiteVisitAccessoryWithType<MachineAccessType>;
  soil: SiteVisitAccessoryWithType<SoilType>;
  propertyGrade: SiteVisitAccessoryWithType<PropertyGradeType>;
  drainage: SiteVisitAccessoryWithType<DrainageType>;
  exteriorUtilities: SiteVisitAccessory;
  exteriorHazards: SiteVisitAccessory;
  exteriorInconveniences: SiteVisitAccessory;
  materialStorage: SiteVisitAccessory;
  materialHaulOut: SiteVisitAccessory;
  downspouts: SiteVisitAccessory;
  shrubRemoval: SiteVisitAccessory;
}
