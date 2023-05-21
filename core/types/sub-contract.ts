import { ContractorProfile, SubContractStatus } from './contractor';
import { ProjectDetail } from './project';
import { Entity } from './base';
import { SitePlan } from './site-plan';
import { User } from './auth';
import { MaterialAmountType } from './material';
import { MilestoneStatus } from './milestone';

export enum SubContractActivityType {
  ProjectAccepted = 'PROJECT_ACCEPTED',
  ProjectDeclined = 'PROJECT_DECLINED',
  SiteVisited = 'SITE_VISITED',
  Excavated = 'EXCAVATED',
  GradeSet = 'GRADE_SET',
  BaseInstalled = 'BASE_INSTALLED',
  Screeded = 'SCREEDED',
  HardscapeInstalled = 'HARDSCAPE_INSTALLED',
  Adjusted = 'ADJUSTED',
  CleanedUp = 'CLEANED_UP',
  FinalPhotosTaken = 'FINAL_PHOTOS_TAKEN',
  MaterialReturned = 'MATERIAL_RETURNED',
  Milestone1PaymentRequested = 'MILESTONE_1_PAYMENT_REQUESTED',
  ApprovedMilestone1Payment = 'APPROVED_MILESTONE_1_PAYMENT',
  Milestone2PaymentRequested = 'MILESTONE_2_PAYMENT_REQUESTED',
  ApprovedMilestone2Payment = 'APPROVED_MILESTONE_2_PAYMENT',
}

export interface SubContractActivity extends Entity {
  type: SubContractActivityType;
  date: Date;
}

export interface SubContract extends Entity {
  status: SubContractStatus;
  gradePhotos: string[];
  gradeComment: string;
  baseInstallationPhotos: string[];
  baseInstallationComment: string;
  finalPhotos: string[];
  declineReasons: SubContractDeclineReason[];
  declineComment: string;
  returnedMaterials: ReturnedMaterialItem[];
  milestones: SubContractMilestone[];
  activity: SubContractActivity[];

  project?: ProjectDetail;
  contractor?: ContractorProfile;
  sitePlan?: SitePlan;
  consultant?: User;
}

export enum SubContractDeclineReason {
  OverlapProjects = 'OVERLAP_PROJECTS',
  NoCrewAvailable = 'NO_CREW_AVAILABLE',
  OutOfServiceAreaRadius = 'OUT_OF_SERVICE_AREA_RADIUS',
  Other = 'OTHER',
}

export interface ReturnedMaterialItem extends Entity {
  name: string;
  amount: string;
  amountType: MaterialAmountType;
  brand: string;
  color: string;
  comment: string;
  attachments: string[];
}

export enum SubContractMilestoneType {
  Deposit = 'DEPOSIT',
  Final = 'FINAL',
}

export interface SubContractMilestone extends Entity {
  amount: number;
  paidAt: string;
  comment: string;
  paymentIntentId: string;
  status: MilestoneStatus;
  type: SubContractMilestoneType;
}
