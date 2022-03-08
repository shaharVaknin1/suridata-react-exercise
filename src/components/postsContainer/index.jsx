import React from "react";
import { Continuer } from "./styles";

import { Post } from "../post";
import { useSelector } from "react-redux";
import { selectPosts } from "../../store/posts";

export const AllPosts = () => {
  const posts = useSelector(selectPosts);

  return (
    <Continuer>
      {posts.map(({ id, title, body, date }) => (
        <Post key={id} title={title} body={body} date={date} />
      ))}
    </Continuer>
  );
};
