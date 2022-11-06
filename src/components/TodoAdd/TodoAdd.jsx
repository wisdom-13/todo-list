import React, { useRef } from 'react';

export default function TodoAdd({ onSubmit }) {

  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="할 일을 입력하세요."></input>
        <button>추가</button>
      </form>
    </>
  );
};