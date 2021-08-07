import { React, useState } from "react";
import NavBar from "./NavBar/NavBar";
import Menu from "./Menu/Menu";
import { useMediaQuery } from "react-responsive";
import NavBarResp from './NavBar/NavBarResp';
import MenuResp from "./Menu/MenuResp";

function Home(props) {
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  const [input, setInput] = useState("");
  const currentUser = props.user;

  return (
    <div>
      {!isSmall ? <NavBar userProp={currentUser} /> : <NavBarResp/>}
      {!isSmall ? <Menu inputProp={input} setInputProp={setInput} /> : null}
    </div>
  );
}

export default Home;
