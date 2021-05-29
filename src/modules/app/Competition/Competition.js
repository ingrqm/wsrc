import Head from 'next/head';

import React, { useState, useEffect } from 'react';

import { roles } from 'consts';

import { App } from '@layouts';

import { Competition as CompetitionForm } from '@forms';

const Competition = () => {
  const [role, setRole] = useState('');

  useEffect(() => {
    setRole(sessionStorage.getItem('role'));
  }, []);

  return (
    <>
      <Head>
        <title>Competition</title>
      </Head>
      <App>{role === roles.member && <CompetitionForm />}</App>
    </>
  );
};

export default Competition;
