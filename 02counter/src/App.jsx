import { useState } from 'react'

function App() {

  let [count, setCount] = useState(15)

  const addValue = () => {
    // console.log("Value Added", Math.random());
    let value = 20;
    if (count >= value) {
      value = 19;
    } else {
      value = count;
    }
    setCount(value + 1)
    console.log(count)
    

  }

  const removeValue = () => {
    // console.log("Value Added", Math.random());
    let value = 0;
    if (count <= value) {
      value = 1;
    } else {
      value = count;
    }
    setCount(value - 1)
    console.log(count)
  }

  return (
    <>
      <h1>Counter Changing</h1>
      <h2>Counter Value {count}</h2>

      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button onClick={removeValue}>Decrement Value</button>
      
      {/* <br /><br />
      <button onClick={() => setCount(count + 1)} disabled={count == 20}>Add Value1</button>
      <br /><br />
      <button onClick={() => setCount(count - 1)} disabled={count == 0}>Decrement Value1</button> */}
    </>
  )
}

export default App
