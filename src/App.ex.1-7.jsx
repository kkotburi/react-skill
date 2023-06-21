import React, { useCallback, useState } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

const style = {
  display: "flex",
  marginTop: "10px",
};

function App() {
  console.log("App component rendering");
  const [count, setCount] = useState(0);

  // 1 증가
  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };

  // 1 감소
  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  };

  // count를 초기화해주는 함수
  const initCount = useCallback(() => {
    console.log(`${count}에서 0으로 변경되었습니다.`);
    setCount(0);
  }, [count]);

  return (
    <>
      <h3>count ex</h3>
      <p>현재 count: {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div style={style}>
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
