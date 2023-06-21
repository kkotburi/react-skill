import React, { useState, useMemo } from "react";

function HeavyComponent() {
  const [count, setCount] = useState(0);

  const heavyWork = () => {
    for (let i = 0; i < 1000000000; i++) {}
    return 100;
  };

  //   const value = heavyWork();
  const value = useMemo(() => heavyWork(), []);
  console.log(`value는 ${value}입니다.`);

  return (
    <>
      <p>I'm Heavy Component.</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        누르면 아래 count가 올라가요!
      </button>
      <br />
      {count}
    </>
  );
}

export default HeavyComponent;

// App.ex.1-9.jsx
