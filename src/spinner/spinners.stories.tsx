import React, { FunctionComponent } from 'react';

import { Spinner, LightSpinner, Loading, LoadingBar } from './index';

export default {
  title: 'Spinner',
};

export const Spinners: FunctionComponent = () => {
  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };
  const labelStyle = { marginRight: '10px' };

  return (
    <>
      <p style={rowStyle}>
        <span style={labelStyle}>Spinner</span>
        <Spinner />
      </p>
      <p style={rowStyle}>
        <span style={labelStyle}>Large Spinner</span>
        <Spinner large />
      </p>
      <p style={rowStyle}>
        <span style={labelStyle}>Light Spinner</span>
        <LightSpinner />
      </p>
      <p style={rowStyle}>
        <span style={labelStyle}>Large Light Spinner</span>
        <LightSpinner large />
      </p>
      <p style={rowStyle}>
        <span style={labelStyle}>Loading</span>
        <Loading />
      </p>
      <p style={rowStyle}>
        <span style={labelStyle}>Large Loading</span>
        <Loading large />
      </p>
      <p style={rowStyle}>
        <span style={labelStyle}>Loading Bar</span>
        <LoadingBar />
      </p>
    </>
  );
};
