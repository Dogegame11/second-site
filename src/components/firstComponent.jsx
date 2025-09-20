export default function FirstComponent({ name, planet, hasPlanet }) {
  const text = hasPlanet
    ? `hello im from ${planet} and my name is ${name}`
    : "im not from here";

  return (
    <>
      <h1>{text}</h1>
    </>
  );
}
