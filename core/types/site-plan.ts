import { ProjectAccessoryType } from './project';
import { MaterialType } from './idea-board';

export enum CustomPaymentItemType {
  Rent = 'RENT',
}

export interface CostItem {
  id: string;
  type: ProjectAccessoryType;
  comment: string;
  cost: number;
}

export interface CustomPaymentItem {
  id: string;
  name: string;
  type: CustomPaymentItemType;
  comment: string;
  cost: number;
  accepted: boolean;
}

export interface AccessoryMaterialDetail {
  id: string;
  type: ProjectAccessoryType;
  materials: MaterialType[];
  comment: string;
  attachments: string[];
}

export interface SitePlan {
  id: string;
  brief: string;
  existingSiteAssessment: string;
  costItems: CostItem[];
  customPaymentItems: CustomPaymentItem[];
  accessoryMaterialDetails: AccessoryMaterialDetail[];
  discount: number;
  startDate: Date;
  endDate: Date;
  comment: string;
}
