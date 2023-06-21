import React from "react";
import { useNavigate, useLocation, Link, useParams } from "react-router-dom";

function Works() {
  const navigate = useNavigate();
  const location = useLocation();
  //   const params = useParams();

  console.log("location: ", location);
  //   console.log("params: ", params);

  return (
    <>
      <div>Works</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home page로 이동
      </button>
      <Link to="/contact">contact page로 이동</Link>
    </>
  );
}

export default Works;
