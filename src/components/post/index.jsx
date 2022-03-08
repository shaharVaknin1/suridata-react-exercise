import React from "react";
import { Continuer } from "./styles";

export const Post = ({ title, body, date }) => {
  return (
    <Continuer>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{new Date(date).toLocaleDateString()}</p>
    </Continuer>
  );
};
