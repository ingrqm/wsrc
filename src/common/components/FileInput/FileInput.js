import React, { useRef, useState } from 'react';

import { object, string } from 'prop-types';

import { Button } from '@material-ui/core';

import { StyledFileInput } from './FileInput.styled';

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const FileInput = ({ formik, field }) => {
  const fileInput = useRef(null);
  const [file, setFile] = useState('');

  const handleFileInput = async () => {
    formik.setFieldValue(field, await toBase64(fileInput.current.files[0]));
    setFile(fileInput.current.files[0].name);
  };

  return (
    <StyledFileInput>
      <input onChange={handleFileInput} ref={fileInput} type="file" hidden />
      <Button onClick={() => fileInput.current.click()}>Upload File</Button>
      <p>{file}</p>
    </StyledFileInput>
  );
};

FileInput.propTypes = {
  formik: object,
  field: string,
};

export default FileInput;
