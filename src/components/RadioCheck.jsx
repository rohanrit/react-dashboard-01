import { useState } from "react";

const RadioCheck = () => {
  const [style, setStyle] = useState("light");

  const changeStyle = () => {
    console.log("you just clicked");
    if (style !== "light") setStyle("light");
    else setStyle("dark");
  };
  return (
    <button className="button" onClick={changeStyle}>
      Click me!
    </button>
  );
};

export default RadioCheck;
