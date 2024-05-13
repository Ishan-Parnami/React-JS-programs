import React, { useState } from 'react'

const ClickCount = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}

export default ClickCount;