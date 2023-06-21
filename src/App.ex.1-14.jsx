// redux : redux 관련 code를 모두 몰아넣음
// config : redux 설정 관련 file 전부
// configStore : 중앙 state 관리소 -> 설정 code(.js)
// module : state의 group! Todolist. todo.js

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PLUS_ONE, MINUS_ONE } from "./redux/modules/counter";
import { plusOne, minusOne } from "./redux/modules/counter";
import { plusN, minusN } from "./redux/modules/counter";

function App() {
  const [number, setNumber] = useState(0);
  // 여기서 store에 접근하여, counter의 값을 읽어오고 싶다!
  // useSelector
  const counter = useSelector((state) => {
    return state.counter;
  });

  useEffect(() => {
    console.log("number -> " + number);
  }, [number]);

  // dispatch를 가져와보자.
  const dispatch = useDispatch();

  // console.log("counter", counter.number);

  return (
    <>
      <div>현재 count : {counter.number}</div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(event) => {
            // TIL 20230620
            // event 앞에 + 입력하여 숫자로 인식
            // setNumber(+event.target.value);

            const { value } = event.target;
            setNumber(+value);
          }}
        />
      </div>
      <button
        onClick={() => {
          // +1을 해주는 logic을 써주면 된다.
          // dispatch({
          //   type: PLUS_ONE,
          // });
          // dispatch(plusOne());
          dispatch(plusN(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // dispatch({
          //   type: MINUS_ONE,
          // });
          // dispatch(minusOne());
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
