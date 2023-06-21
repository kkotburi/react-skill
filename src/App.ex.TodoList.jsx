import React, { useState } from "react";
import uuid from "react-uuid";

function App() {
  const initialState = [
    {
      id: uuid(),
      title: "test tilte",
      content: "test content",
      isDone: false,
    },
    {
      id: uuid(),
      title: "test tilte",
      content: "test content",
      isDone: false,
    },
    {
      id: uuid(),
      title: "test tilte",
      content: "test content",
      isDone: false,
    },
  ];

  const [todos, setTodos] = useState(initialState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <header
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
        }}
      >
        header입니다.
      </header>
      <main
        style={{
          backgroundColor: "beige",
          padding: "10px",
        }}
      >
        <h3>input 영역</h3>
        <div>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              const newTodo = {
                id: uuid(),
                title,
                content,
                isDone: false,
              };

              console.log(newTodo.id);
              setTodos([...todos, newTodo]);
            }}
          >
            <input
              type="text"
              placeholder="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></input>
            <input
              type="text"
              placeholder="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            ></input>
            <button>add</button>
          </form>
        </div>
        <div>
          <h2>TODO LIST</h2>
          {todos.map((todo) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    const newTodos = todos.filter(
                      (filteredTodo) => filteredTodo.id != todo.id
                    );

                    setTodos(newTodos);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <h2>TODO LIST</h2>
          {todos
            .filter((done) => done.isDone === true)
            .map((todo) => {
              return (
                <div
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    margin: "10px",
                  }}
                >
                  <p>{todo.id}</p>
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                  <p>{todo.isDone.toString()}</p>
                  <button
                    onClick={() => {
                      const newTodos = todos.filter(
                        (filteredTodo) => filteredTodo.id != todo.id
                      );

                      setTodos(newTodos);
                    }}
                  >
                    delete
                  </button>
                </div>
              );
            })}
        </div>
      </main>
      <footer
        style={{
          backgroundColor: "palevioletred",
          padding: "10px",
        }}
      >
        footer입니다.
      </footer>
    </>
  );
}

export default App;
