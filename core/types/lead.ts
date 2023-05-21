import { CustomerType } from '../data/how-it-works';
import { ColorClass, ProductCategory } from '../data/product';
import { SourceFoundUs } from './marketing';
import { Entity } from './base';

export interface ContactUs {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
  sourceFoundUs: string;
  message: string;
}

export interface RequestDesignEstimate {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  comment: string;
  attachments: string[];
  customerType: CustomerType;
}

export interface RequestConsultation {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
}

export interface ContactUs {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
  sourceFoundUs: string;
  message: string;
}

export interface JoinSupplier {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
}

export interface BuyKit {
  kitName: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
}

export interface ShowroomContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  customerType: CustomerType;
  productCategory: ProductCategory;
  colorClass: ColorClass;
  image: string;
  sourceFoundUs: SourceFoundUs;
}

export interface ShowroomDIYContact {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  comment: string;
  attachments: string[];
}

export enum LeadType {
  ContactUs = 'CONTACT_US',
  PatioPackage = 'PATIO_PACKAGE',
  LandingPage = 'LANDING_PAGE',
  Other = 'OTHER',
}

export enum LeadStatus {
  Lead = 'LEAD',
  Processed = 'PROCESSED',
  Archived = 'ARCHIVED',
  Declined = 'DECLINED',
}

export interface Lead extends Entity {
  type: LeadType;
  fullName: string;
  phone: string;
  email: string;
  status: LeadStatus;
  address?: string;
  latitude?: number;
  longitude?: number;
  sourceFoundUs?: SourceFoundUs;
  message?: string;
}
