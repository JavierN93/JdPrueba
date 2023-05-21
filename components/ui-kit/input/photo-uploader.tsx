import Image from 'next/image';
import { useEffect, useState } from 'react';
import { noop } from '../../../core/types/common';
import Icon from '../icon';
import { uploadService } from '../../../core/api-services/upload.service';
import Spinner from '../common/spinner';

interface Props {
  name: string;
  value: string[];
  id?: string;
  align?: string;
  readonly?: boolean;
  onChange: (v: any) => void;
}

interface File {
  url?: string;
  loading: boolean;
  failed: boolean;
}

export function PhotoUploader({
  id,
  name,
  value,
  align,
  readonly,
  onChange,
}: Props) {
  const [files, setFiles] = useState<File[]>(
    value.map((url) => ({ url, loading: false, failed: false }))
  );

  const deleteItem = (index: number) => {
    const updated = [...files];
    updated.splice(index, 1);
    setFiles(updated);
  };

  const uploadFiles = async (event: any) => {
    const uploadFiles = event.target.files;
    const count = uploadFiles.length;
    for (let i = 0; i < count; i++) {
      const item: File = { loading: true, failed: false };
      const updatedFiles = [...files, item];
      try {
        setFiles(updatedFiles);
        const res = await uploadService.upload(uploadFiles[i]);
        item.url = res.url;
        item.loading = false;
      } catch (e) {
        item.failed = true;
      } finally {
        item.loading = false;
      }
      setFiles([...files, { ...item }]);
    }
  };

  useEffect(() => {
    onChange({
      target: {
        name,
        value: files.map((file) => file.url).filter((url) => url),
      },
    });
  }, [files]);

  return (
    <div
      id={id}
      className={
        'flex flex-wrap mb-20 ' +
        (align === 'center' ? 'justify-center' : 'justify-left')
      }
    >
      {files.map((file, index) => (
        <div className="relative mr-10 mb-10 w-85 h-85" key={index}>
          {!file.loading && !readonly && (
            <Icon
              className="absolute cursor-pointer right-0 mr-5 z-10 top-5"
              name="trash"
              color="white"
              size={15}
              onClick={() => deleteItem(index)}
            />
          )}
          <Image
            src={file.url || '/assets/images/placeholder.jpg'}
            layout="fill"
            objectFit="cover"
            alt="image"
          />
          {file.loading && <Spinner isLoading={file.loading} />}
        </div>
      ))}
      {!readonly && (
        <label className="flex items-center justify-center cursor-pointer mb-0 w-85 h-85">
          <input
            accept="image/x-png,image/gif,image/jpeg"
            className="hidden"
            type="file"
            onChange={uploadFiles}
          />
          <Plus />
        </label>
      )}
    </div>
  );
}

PhotoUploader.defaultProps = {
  id: '',
  value: [],
  align: 'center',
  readonly: false,
  onChange: noop,
};

function Plus() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6Z"
        stroke="#07A39D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 16V32"
        stroke="#07A39D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 24H32"
        stroke="#07A39D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
