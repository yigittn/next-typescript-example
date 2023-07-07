import React from "react";
import { postTypes } from "@/type";

const PostCard = (props: postTypes) => {
  return (
    <div className="flex flex-col gap-y-10 p-4 border border-zinc-600">
      <h1 className="text-2xl">{props.title}</h1>
      <h3 className="text-[10px] text-zinc-500">From: {props.userId}</h3>
      <p className="text-red-800">{props.body}</p>
    </div>
  );
};

export default PostCard;
