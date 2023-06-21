import React, { useRef, useState } from "react";

const style = {
  border: "1px solid black",
  margin: "10px",
  padding: "10px",
};

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const plusStateCountButtonHandler = () => {
    setCount(count + 1);
    // count++ 입력 시 오류
  };

  const plusRefCoutButtonHandler = () => {
    countRef.current++;
  };

  return (
    <>
      <div style={style}>
        state 영역입니다. {count}
        <br />
        <button onClick={plusStateCountButtonHandler}>state 증가</button>
      </div>
      <div style={style}>
        state 영역입니다. {countRef.current}
        <br />
        <button onClick={plusRefCoutButtonHandler}>state 증가</button>
      </div>
    </>
  );
}

export default App;
