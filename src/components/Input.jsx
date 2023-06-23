import React, { useState } from 'react';
import styled from 'styled-components';
import { StSmallButton } from './Button';

const StForm = styled.form`
  padding: 10px;
  width: 700px;
  display: flex;
  justify-content: space-between;
`;

const StInput = styled.input`
  width: 200px;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 0 10px;
`;

function Input() {
  const [price, setPrice] = useState(0);
  const [goods, setGoods] = useState('');
  const [goodsCarts, setGoodsCarts] = useState([]);
  const onPriceChangeHandler = event => {
    /* TODO 1. 숫자만 입력가능(숫자 아닌거 공백처리) 2. state로 저장할 때는 콤마 붙이기 */
    const notNumber = /[^0-9]/g;
    const inputNumber = event.target.value;
    const inspectedNumber = Number(inputNumber.replace(notNumber, ''));
    const trimmedNumber = inspectedNumber.toLocaleString();
    setPrice(trimmedNumber);
  };
  const onGoodsChangeHandler = event => {
    setGoods(event.target.value);
  };
  const onGoodsPriceSubmitHandler = event => {
    event.preventDefault();
    const newGoodsCarts = { goods, price };
    setGoodsCarts([...goodsCarts, newGoodsCarts]);
    setGoods('');
    setPrice('');
  };
  return (
    <section>
      <h2>Input</h2>
      <StForm onSubmit={onGoodsPriceSubmitHandler}>
        <label>
          이름 <StInput type="text" value={goods} onChange={onGoodsChangeHandler} placeholder="상품 이름을 입력하세요" />
        </label>
        <label>
          가격 <StInput type="text" value={price} onChange={onPriceChangeHandler} />
        </label>
        <StSmallButton color="#C9DCF5">저장</StSmallButton>
      </StForm>
    </section>
  );
}

export default Input;
