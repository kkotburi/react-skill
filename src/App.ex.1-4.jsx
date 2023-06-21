import React, { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");

  // clean up ?
  useEffect(() => {
    console.log(`value: ${value}`);

    return () => {
      //
      console.log("사라져요");
    };
  }, [value]);

  // React Hooks - useEffect
  // 1. input에 값을 입력
  // 2. value, 즉 state가 변경
  // 3. state가 바뀌었기 때문에 -> App 컴포넌트가 리렌더링
  // 4. 리렌더링 -> useEffect()
  // 5. 1-4번 반복
  // => 의존성 배열 Dependency Array 필요

  // 의존성 배열 Dependency Array
  // useEffect(() => {}, []) 대괄호 추가!
  // 이 배열에 값을 넣으면, 그 값이 바뀔 때만 useEffect를 실행

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
