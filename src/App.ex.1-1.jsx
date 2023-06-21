import "./App.css";
import styled from "styled-components";
import TestPage from "./components/TestPage";
import GlobalStyle from "./GlobalStyle";

const StContainer = styled.div`
  display: flex;
`;

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

// box의 색
const boxList = ["red", "blue", "green", "pink"];

// 색을 넣으면, 이름을 반환
const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨강";
    case "blue":
      return "초록";
    case "green":
      return "파랑";
    default:
      return "검정";
  }
};

function App() {
  return (
    // <StContainer>
    //   {/* <StBox borderColor="red">Box</StBox>
    //   <StBox borderColor="green">Box</StBox>
    //   <StBox borderColor="blue">Box</StBox> */}
    //   {boxList.map((box) => {
    //     return <StBox borderColor={box}>{getBoxName(box)}</StBox>;
    //   })}
    // </StContainer>
    <>
      <GlobalStyle />
      <TestPage title="I'm title." contents="I'm contents." />
    </>
  );
}

// props : 부모 component -> 자식 component

export default App;
