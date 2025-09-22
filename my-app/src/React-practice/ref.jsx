import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null); // create a ref

  const handleFocus = () => {
    inputRef.current.focus(); // directly access input DOM
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
