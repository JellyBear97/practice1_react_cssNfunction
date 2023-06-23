import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
ul,li {
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  background-color: white;
}
button:hover{
  cursor: pointer;
}
`;

export default GlobalStyle;
