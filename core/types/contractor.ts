import { Entity } from './base';
import { ProjectAccessoryType } from './project';
import { MaterialType } from './idea-board';
import { User } from './auth';

export enum HardscapingPropertyType {
  Residential = 'RESIDENTIAL',
  Commercial = 'COMMERCIAL',
  Municipality = 'MUNICIPALITY',
}

export enum ContractorStatus {
  Rejected = 'REJECTED',
  UserCreated = 'CREATED',
  BasicProfileApproved = 'BASIC_PROFILE_APPROVED',
  QualityCheckPassed = 'QUALITY_CHECK_PASSED',
  ReputationCheckPassed = 'REPUTATION_CHECK_PASSED',
  SignedLegalTerms = 'SIGNED_LEGAL_TERMS',
  PaymentVerified = 'PAYMENT_VERIFIED',
}

export enum ContractorClass {
  A = 'A',
  B = 'B',
}

export enum SubContractStatus {
  Invited = 'INVITED',
  Declined = 'DECLINED',
  SitePlanned = 'SITE_PLANNED',
  Accepted = 'ACCEPTED',
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
}

export interface ContractorPortfolio {
  name: string;
  comment: string;
  attachments: string[];
}

export interface ContractorProfile extends Entity {
  companyName: string;
  companyWebsite: string;
  propertyTypes: HardscapingPropertyType[];
  serviceTypes: ProjectAccessoryType[];
  materialTypes: MaterialType[];
  preferredBudget: number[];
  businessComment: string;
  operationComment: string;
  timePerProject: string;
  instagramLink: string;
  facebookLink: string;
  googleBusinessLink: string;
  otherSocialLink: string;
  status: ContractorStatus;
  contractorClass: ContractorClass;
  subContractorAgreementSignedDate: string;
  ndaSignedDate: string;
  workingAgreementSignedDate: string;
  portfolios: ContractorPortfolio[];
  user?: User;
  bankName: string;
  bankAccountName: string;
  bankAccountNumber: string;
  bankAccountAddress: string;
  bankRoutingNumber: string;
}
