import React, { useRef } from 'react';

function UseRefDemo() {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Use Ref Demo</h1>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Click Me For Focus</button>
    </div>
  );
}

export default UseRefDemo;
