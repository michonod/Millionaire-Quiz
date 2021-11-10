import React, { useRef } from "react";

const Login = ({ setUsername }) => {
  const formSubmitHandler = () => {
    setUsername(inputRef.current.value);
  };

  const inputRef = useRef();
  return (
    <form className="inputFull" onSubmit={formSubmitHandler}>
      <div className="inputBox">
        <h1>Enter your name:</h1>
        <input type="text" ref={inputRef} />
        <button>Start</button>
      </div>
    </form>
  );
};

export default Login;
