import React from 'react';
import { Bars } from 'react-loader-spinner';

import { LoaderContainer } from './styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <Bars
        height='80'
        width='80'
        color='#aecde7'
        ariaLabel='bars-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
