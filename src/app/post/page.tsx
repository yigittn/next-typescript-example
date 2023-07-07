"use client";
import React, { useEffect, useState } from "react";
import PostCard from "@/components/PostCard";
import { postTypes } from "@/type";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      const firstFiveData = data.slice(0, 5);
      setPosts(firstFiveData);
    };
    getData();
  }, []);

  return (
    <div>
      <span className=" text-red-600 text-2xl">These Are First 5 Posts</span>
      <div>
        {posts.map((post: postTypes) => {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              userId={post.userId}
              body={post.body}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Post;
