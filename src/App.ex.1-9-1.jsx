import React from "react";
import HeavyComponent from "./components/HeavyComponent";

const styleNav = {
  backgroundColor: "yellow",
  marginBottom: "30px",
};

const styleFooter = {
  backgroundColor: "green",
  marginBottom: "30px",
};

// heavy work -> 무거운 작업
function App() {
  return (
    <>
      <nav style={styleNav}>nav</nav>
      <HeavyComponent />
      <footer style={styleFooter}>footer</footer>
    </>
  );
}

export default App;
