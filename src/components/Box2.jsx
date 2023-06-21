import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "#4e93ed",
  color: "white",
};

function Box2() {
  console.log("Box2 rendering");

  return <div style={style}>Box2</div>;
}

export default React.memo(Box2);

// App.ex.1-7.jsx
