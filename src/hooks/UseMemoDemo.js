import React, { useState, useMemo } from 'react';

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function UseMemoDemo() {
  const [number, setNumber] = useState(1);

  // Calculate the Fibonacci value only when the number changes
  const fibValue = useMemo(() => fibonacci(number), [number]);

  return (
    <div>
        <h1>Use Memo Demo</h1>
      <p>Calculate Fibonacci value for: {number}</p>
      <p>Fibonacci Value: {fibValue}</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
    </div>
  );
}

export default UseMemoDemo;
