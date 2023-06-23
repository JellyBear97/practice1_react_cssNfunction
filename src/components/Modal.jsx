import React from 'react';
import { StLargeButton, StSmallButton } from './Button';
import styled from 'styled-components';

const StButtonWrapper = styled.div`
  width: 310px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

function Modal() {
  return (
    <section>
      <h2>Modal</h2>
      <StButtonWrapper>
        <StSmallButton color="#C9DCF5">open modal</StSmallButton>
        <StLargeButton color="#fcc5c5">open modal</StLargeButton>
      </StButtonWrapper>
    </section>
  );
}

export default Modal;
