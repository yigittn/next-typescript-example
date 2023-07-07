"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import React, { useContext } from "react";

const Header = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const changeTheme = () => {
    dispatch({ theme: "CHANGE_THEME" });
  };

  return (
    <div className="h-20 flex items-center justify-between border-b">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <nav className="flex gap-x-6">
        <Link href="/blog">Blog</Link>
        <Link href="/post">Post</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="flex gap-x-2 justify-center">
        <button onClick={changeTheme}>Theme</button>
        <p className="text-[10px] mt-2 text-zinc-400">Theme:{state.theme} </p>
      </div>
    </div>
  );
};

export default Header;
