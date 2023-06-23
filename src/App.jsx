import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Modal from './components/Modal';
import Select from './components/Select';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import ModalPopUp from './components/ModalPopUp';

const StLayout = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <StLayout>
      <GlobalStyle />
      {/* <ModalPopUp /> */}
      <Button></Button>
      <Input></Input>
      <Modal></Modal>
      <Select></Select>
    </StLayout>
  );
}

export default App;
