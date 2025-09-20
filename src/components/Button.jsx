function Button({ onClick, name }) {
  return (
    <>
      <button onClick={onClick}>Click on me! {name}</button>
    </>
  );
}

export default Button;
