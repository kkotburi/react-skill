import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/data";

function Work() {
  const params = useParams();
  //   console.log("params", params);

  // 어떤 todo인지 찾아보기
  const foundData = data.find((item) => {
    return item.id === parseInt(params.id);
    // == 동등연산자, === 일치연산자
    // parseInt : 문자열를 정수로 반환
    // TIL 20230621
  });

  console.log("foundData: ", foundData);

  return (
    <>
      <h2>{foundData.todo}</h2>
    </>
  );
}

export default Work;
