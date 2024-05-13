import React, { useState, useCallback } from 'react';

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Use Callback Demo</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}

export default UseCallbackDemo;
