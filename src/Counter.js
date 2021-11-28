import React, { useState } from "react";
function Counter() {
  const [number, setNumber] = useState(0)
  function up () {
    setNumber(number + 13) 
  }
  function down () {
    setNumber(number - 12) 
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={up}>IN</button>
      <button onClick={down}>oN</button>
    </>
  );
}

export default Counter;
