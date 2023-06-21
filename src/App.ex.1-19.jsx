// 1. page(우리는 원래 단일 page) component -> 다중 page
// 2. Router.js file 생성 -> router를 구성하는 설정 code 작성
//    (ex : redux 할 때도 설정 file을 만들어서 주입)
// 3. App.jsx import (2번) 후 적용  : 주입
// 4. page 이동 test

import React from "react";
import Router from "./shared/Router";

function App() {
  return <Router />;
}

export default App;
