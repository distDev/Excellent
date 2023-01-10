import React, { useState } from 'react';
import styled from 'styled-components/macro';
import AppoitmentBanner from './AppoitmentBanner';
import SearchModal from '../../../../Components/search-modal';

type Props = {};

const MainBanners = (props: Props) => {

  return (
    <MainBannersContainer>
      <AppoitmentBanner />
      <SearchModal />
    </MainBannersContainer>
  );
};

export default MainBanners;

const MainBannersContainer = styled.div`
  width: 100%;

  overflow: hidden;
  margin-top: 30px;

  @media screen and (max-width: 480px) {
    width: 100%;
    
    overflow: hidden;
    margin-top: 30px;
  }
  @media screen and (max-width: 391px) {
    margin-top: 15px;
 
  }
`;
