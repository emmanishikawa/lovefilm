"use client"
import * as React from "react"
import { useState } from "react";
import Camera from "./Camera";
import Logo from "../components/Logo";
export default function Frames_Style() { //style
    
    const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (style: string) => {
        if (!selectedStyle) {
          setSelectedStyle(style);
          setIsClicked(true);
        }
      };
    
   
     return (
       <>
       {!selectedStyle && !isClicked && (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Logo/>
          <div className="flex items-center justify-center h-[345px] w-[432px] bg-white rounded-[15px]">
            <button
              onClick={() => handleClick("SmallFrame")}
              className="h-[150px] w-[150px] m-5 text-center align-middle bg-white rounded-[50%] border-[1px] border-[#D8E8F8] hover:bg-[rgba(216,232,248,0.5)] active:bg-[#D8E8F8] transition ease-in-out"
            >
              small frame
            </button>
            <button
              onClick={() => handleClick("BigFrame")}
              className="h-[150px] w-[150px] m-5 text-center align-middle bg-white rounded-[50%] border-[1px] border-[#D8E8F8] hover:bg-[rgba(216,232,248,0.5)] active:bg-[#D8E8F8] transition ease-in-out"
            >
              big frame
            </button>
          </div>
        </div>
      )}
      {isClicked && selectedStyle && <Camera selectedStyle={selectedStyle}/>}
      </>
     );

} 