import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-45deg, #ffc796, #ff6b95);
  font-size: 48px;
  color: #fff;
`;

function App() {
  return (
    <Wrapper>
      <h1>REACT v18</h1>
      <h2>typescript template</h2>
      <h2>styled-components</h2>
    </Wrapper>
  );
}

export default App;
