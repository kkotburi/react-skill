import React, { useRef } from "react";

function App() {
  // ref : reference
  const anony = useRef("초기값");
  console.log("ref1", anony);

  anony.current = "변경값";
  console.log("ref2", anony);

  anony.current = "재변경값";
  console.log("ref3", anony);

  return <div>App</div>;
}

export default App;
