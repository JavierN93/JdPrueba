export enum CustomerType {
  InstallationCustomer = 'INSTALLATION_CUSTOMER',
  DIYCustomer = 'DIY_CUSTOMER',
}

export const howItWorksContent = [
  {
    type: CustomerType.InstallationCustomer,
    title: 'Installation Customers',
  },
  {
    type: CustomerType.DIYCustomer,
    title: 'DIY Home Owners/Contractors',
  },
];
