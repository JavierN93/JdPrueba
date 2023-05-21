import { doPost } from './http';
import {
  ContactUs,
  RequestDesignEstimate,
  ShowroomContact,
  ShowroomDIYContact,
} from '../types/lead';
import { CustomerRegisterPayload } from '../types/auth';

export const leadApiService = {
  contactUs: (body: ContactUs) => {
    return doPost('/contact', body);
  },
  requestDesignEstimate: (body: RequestDesignEstimate) => {
    return doPost('/request-design-estimate', body);
  },
  showRoomContact: (body: ShowroomContact) => {
    return doPost('/showroom-contact', body);
  },
  showRoomDIYContact: (body: ShowroomDIYContact) => {
    return doPost('/showroom-diy-contact', body);
  },
  submitDesignProject: (body: any) => {
    return doPost('/submit-design-project', body);
  },
  register: (body: CustomerRegisterPayload) => {
    return doPost('/customer/register', body);
  },
};
