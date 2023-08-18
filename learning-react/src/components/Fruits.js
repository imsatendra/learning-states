import React, { useState } from "react";

function Fruits() {
  const [fruit, setFruit] = useState("Apple");
  return (
    <>
      <p>the value of fruit is {fruit}</p>
      <button
        onClick={() => {
          setFruit("Papya");
        }}
      >
        Papya
      </button>

      <button
        onClick={() => {
          setFruit("Mango");
        }}
      >
        Mango
      </button>

      <button
        onClick={() => {
          setFruit("Orange");
        }}
      >
        Orange
      </button>
    </>
  );
}

export default Fruits;
