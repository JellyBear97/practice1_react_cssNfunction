import React from 'react';
import { StSmallButton } from './Button';
import styled from 'styled-components';
const StModalBackground = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  background-color: rgba(76, 76, 76, 0.7);
  position: relative;
  top: 0;
  left: 0;
  z-index: 9;
`;
const StConfirmModal = styled.div`
  margin: auto;
  width: 500px;
  height: 500px;
  background-color: #ffffff;
  z-index: 10;
`;
function ModalPopUp() {
  return (
    <StModalBackground>
      <StConfirmModal>
        <p>닫기화 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않습니다.</p>
        <div>
          <button>닫기</button>
          <button>확인</button>
        </div>
      </StConfirmModal>
    </StModalBackground>
  );
}

export default ModalPopUp;
