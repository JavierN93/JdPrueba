import { doPost } from './http';

interface UploadResponse {
  url: string;
}

export const uploadService = {
  upload: (file: any): Promise<UploadResponse> => {
    const form = new FormData();
    form.append('file', file);
    return doPost('/upload', form, true);
  },
};
