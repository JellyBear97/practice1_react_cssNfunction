// (색을 더 자주 바꿀 것 같아서) 버튼은 크기별로 묶기
import React from 'react';
import styled from 'styled-components';

const StButtonsWrapper = styled.div`
  display: grid;
  width: 450px;
  grid-template-columns: repeat(3, minmax(50px, auto));
  gap: 10px;
  padding: 10px;
`;
export const StLargeButton = styled.button`
  width: 200px;
  height: 50px;
  font-weight: 600;
  border: 3px solid
    ${props => {
      return props.color;
    }};
  color: ${props => {
    switch (props.color) {
      case '#C9DCF5':
        return '#00000';
      case '#fcc5c5':
        return '#d90000';
      default:
        return '#00000';
    }
  }};
`;
export const StMediumButton = styled.button`
  width: 130px;
  height: 45px;
  background-color: ${props => {
    return props.color;
  }};
  color: ${props => {
    switch (props.color) {
      case '#C9DCF5':
        return '#00000';
      case '#fcc5c5':
        return '#d90000';
      default:
        return '#00000';
    }
  }};
`;

export const StSmallButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${props => {
    return props.color;
  }};
  color: ${props => {
    switch (props.color) {
      case '#C9DCF5':
        return '#00000';
      case '#fcc5c5':
        return '#d90000';
      default:
        return '#00000';
    }
  }};
`;

function Button() {
  return (
    <section>
      <h2>Button</h2>
      <StButtonsWrapper>
        <StLargeButton color="#C9DCF5">
          Large Primary Button <div>{}</div>
        </StLargeButton>
        <StMediumButton color="#C9DCF5">Medium</StMediumButton>
        <StSmallButton color="#C9DCF5">Small</StSmallButton>

        <StLargeButton color="#fcc5c5">
          Large Negative Button<div>{}</div>
        </StLargeButton>
        <StMediumButton color="#fcc5c5">Medium</StMediumButton>
        <StSmallButton color="#fcc5c5">Small</StSmallButton>
      </StButtonsWrapper>
    </section>
  );
}

export default Button;
