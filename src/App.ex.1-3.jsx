import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <div>Number State : {number}</div>
      <button
        onClick={() => {
          // 기존 update
          // 배치성으로 처리
          // setNumber(number + 1);
          // setNumber(number + 1);
          // setNumber(number + 1);

          // 렌더링이 잦다 => 성능에 이슈가 있다

          // 함수형 update
          setNumber((newNumber) => newNumber + 1);
          setNumber((newNumber) => newNumber + 1);
          setNumber((newNumber) => newNumber + 1);
        }}
      >
        누르면 up!
      </button>
    </>
  );
}

export default App;
