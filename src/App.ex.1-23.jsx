import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData([...json]);
        return console.log(json);
      });
  }, []);

  return (
    <>
      <h3>JSONPlacehoder DATA</h3>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              margin: "5px",
            }}
          >
            <ul>
              <li>{item.userId}</li>
              <li>{item.id}</li>
              <li>{item.title}</li>
              <li>{item.body}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default App;
