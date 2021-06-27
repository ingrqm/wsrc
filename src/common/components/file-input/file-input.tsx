import { useRef, useState, FC } from 'react';

import { Button } from '@material-ui/core';

import { StyledFileInput } from './file-input.styled';

const toBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const FileInput: FC<{
  formik: { setFieldValue: (field: string, value: string | ArrayBuffer | null) => void };
  field: string;
}> = ({ formik, field }) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState('');

  const handleFileInput = async (): Promise<void> => {
    const ref = fileInput && fileInput.current && fileInput.current.files && fileInput.current.files[0];
    if (ref) {
      formik.setFieldValue(field, await toBase64(ref));
      setFile(ref.name);
    }
  };

  return (
    <StyledFileInput>
      <input onChange={handleFileInput} ref={fileInput} type='file' hidden />
      <Button onClick={() => fileInput?.current?.click()}>Upload File</Button>
      <p>{file}</p>
    </StyledFileInput>
  );
};

export default FileInput;
