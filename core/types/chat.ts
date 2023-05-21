export enum MessageFrom {
  FromConsultant = 'FROM_CONSULTANT',
  FromCustomer = 'FROM_CUSTOMER',
}

export interface Message {
  id: string;
  chatId: string;
  text: string;
  from: MessageFrom;
  attachments?: string[];
  readAt: string;
  createdAt: string;
}
