import React from 'react';
import styled from 'styled-components';

const StSection = styled.section`
  height: 200px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin: 50px 0 200px;

  // TODO 조건 : 여기(부모컴포넌트)에 'overflow:hidden' 속성이 들어가있어도 자식컴포넌트는 가려지지 않아야함
`;
const StSelectionTitle = styled.button`
  width: 300px;
  height: 40px;
  border: 1px solid #000000;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StUl = styled.ul`
  width: 300px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 10px;
`;

const StLi = styled.li`
  height: 40px;
  width: 100%;
  padding: 0 20px;
  line-height: 40px;
  text-align: start;
`;

function Select() {
  return (
    <StSection>
      <h2>Select</h2>
      <StSelectionTitle>
        <div>프레임워크</div>
        <div>▼</div>
      </StSelectionTitle>
      <StUl>
        <StLi value="react">리액트</StLi>
        <StLi value="spring">스프링</StLi>
        <StLi value="reactNative">리액트네이티브</StLi>
        <StLi value="nextJS">넥스트JS</StLi>
      </StUl>
    </StSection>
  );
}

export default Select;
