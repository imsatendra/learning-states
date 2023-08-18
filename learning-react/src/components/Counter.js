import React, { useState } from 'react';

function Counter() {
    // let count = 0;
    let [count , setCount] = useState(0);

    // function updateCount(){
    //     count++;
    //     setCount(count);
    //     console.log("count is " , count);
    // }
  return (
    <div>
        <p>The value of count is : {count}</p>
        <button onClick={()=>{
            count++;
            setCount(count);
        }}>Increment</button>
    </div>


  )
}

export default Counter;