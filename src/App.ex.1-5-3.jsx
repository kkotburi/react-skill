import React, { useEffect, useRef, useState } from "react";

function App() {
  const idRef = useRef("");
  const pwRef = useRef("");

  const [id, setId] = useState("");

  // 화면이 렌더링될 때, 어떤 작업을 하고 싶은 경우 : useEffect!
  useEffect(() => {
    idRef.current.focus();
    // pwRef.current.focus();
  }, []);

  // useEffect(() => {
  //   if (id.length >= 10) {
  //     pwRef.current.focus();
  //   }
  // }, [id]);

  return (
    <>
      <div>
        ID:
        <input
          value={id}
          onChange={(event) => {
            setId(event.target.value);
            // TIL 20230619
            // react에서 state => 배치 update
            console.log("id", id);
            if (id.length >= 10) {
              pwRef.current.focus();
            }
          }}
          type="text"
          ref={idRef}
        />
      </div>
      <div>
        PW: <input type="password" ref={pwRef} />
      </div>
    </>
  );
}

export default App;
