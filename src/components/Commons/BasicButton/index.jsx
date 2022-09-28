import { ButtonStyle } from "./styles";
import React from "react";

function BasicButton(props) {
  console.log(props);
  return <ButtonStyle>{props.children}</ButtonStyle>;
}

export default BasicButton;
