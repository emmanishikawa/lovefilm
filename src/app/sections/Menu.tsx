"use client"
import * as React from "react"
import { useState } from "react";
import Frames_Style from "./Frames";
import Logo from "../components/Logo";
export default function Menu() {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => setIsClicked(true);
 

  return (
    <>
    {!isClicked && (<div className="flex flex-col items-center justify-center min-h-screen">
      <Logo/>
    <div className="flex items-center justify-center h-[345px] w-[432px] bg-white rounded-[15px]">
        <button 
        onClick={handleClick}
        className="h-[250px] w-[250px] text-center align-middle bg-white rounded-[50%] border-[1px] border-[#D8E8F8] hover:bg-[rgba(216,232,248,0.5)] active:bg-[#D8E8F8] transition ease-in-out">
            start!
        </button>
    </div>
    </div>)}
    {isClicked && <Frames_Style />}
    </>
  );
}
