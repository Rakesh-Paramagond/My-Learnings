import { useState } from "react";

const Form = function () {
  const [input, setInput] = useState("");

  const handleForm = (e) => {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={handleForm} />;
      <button onClick={handleForm}>Set</button>
      <p>{input}</p>
    </>
  );
};
export default Form;
