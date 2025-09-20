import { useState } from "react";

export default function GetNumber({ maxNumber }) {
  const [getNum, setNum] = useState(maxNumber);

  function handleClick() {
    setNum(Math.floor(Math.random() * maxNumber));
  }
  return (
    <>
      <h1>{getNum}</h1>
      <button onClick={handleClick}>Get random button</button>
    </>
  );
}
