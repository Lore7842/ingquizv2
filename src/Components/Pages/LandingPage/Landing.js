import { React, useState, useEffect } from "react";
import { NavBar } from ".../NavBar/NavBar";
import { Menu } from ".../Menu/Menu";

const Landing = () => {
  const [input, setInput] = useState("");
  return (
    <div className="Landing">
      <NavBar />
      <Menu inputProp={input} setInputProp={setInput} />
    </div>
  );
};


export default Landing;