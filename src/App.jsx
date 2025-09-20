import { useState } from "react";
import "./App.css";
import FirstComponent from "./components/firstComponent";
import GetNumber from "./components/RandomNuber";
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = (multiply) => {
    setCount(count + multiply);
  };
  return (
    <>
      <FirstComponent name="Oleksii" planet="earth" hasPlanet />
      <FirstComponent />
      <GetNumber maxNumber={5} />
      <Counter countClick={count} />
      <Button onClick={() => incrementCount(1)} name="1x" />
      <Button onClick={() => incrementCount(2)} name="2x" />
      <Button onClick={() => incrementCount(3)} name="3x" />
    </>
  );
}

export default App;
