"use client"
import Image from "next/image";
import * as React from "react"
import Webcam from "react-webcam";
import { useState } from "react";
import Customize from "./Customize";
import Logo from "../components/Logo";

const videoConstraints_s = {
  width: 864,
  height: 690,
  facingMode: "user"
}

const videoConstraints_b = {
  width: {ideal: 724},
  height: {ideal: 1086},
  facingMode: "user"
}

let count = 0;


export default function Camera({ selectedStyle }: CameraProps) {
    
    const [imgSrcArray, setImgSrcArray] = useState<string[]>([]);

    const [captureCount, setCaptureCount] = useState(0);

    const [isActive, setIsActive] = useState(true);
    const webcamRef = React.useRef<Webcam>(null);

    const currentConstraints = 
      selectedStyle === "BigFrame" ? videoConstraints_b : videoConstraints_s;

    const containerSizeClass = 
      selectedStyle === "BigFrame"
        ? "h-[678.75px] w-[452.5]"
        : "h-[690px] w-[864px]";
    
    const capture = React.useCallback(() => {
        if (webcamRef.current && (captureCount < 4)) {
            const imgSrc = webcamRef.current.getScreenshot();
            if (imgSrc) {
                setImgSrcArray(prev => [...prev, imgSrc]); // Add new image to array
            }
            setCaptureCount(prev => prev + 1);
            count++;
        }

    }, [webcamRef]);
    

    React.useEffect(() => {
        if (captureCount >= 4) {
          setIsActive(false);
        }
      }, [captureCount]);
    
  return (
    <>
   {isActive ? (
    <div className="flex flex-row justify-center">
    <div className="flex items-center justify-center min-h-screen">
                  <div className="flex items-center justify-center ${containerSizeClass} bg-white overflow-hidden">
                      <Webcam
                          audio={false}
                          mirrored={true}
                          imageSmoothing={true}
                          ref={webcamRef}
                          videoConstraints={currentConstraints}
                          screenshotFormat="image/png"
                          className={`${containerSizeClass} object-cover`} />
                  </div>
              </div>
      <div className="flex flex-col justify-center m-5">
        <div className="flex justify-center"><Logo/></div>
        <div className="flex justify-center m-5">{count} / 4</div>
        <button className="flex items-center justify-center bg-white h-24 w-24 rounded-[50%] border-[1px] hover:bg-opacity-50 active:bg-[#D8E8F8] transition ease-in-out" onClick={capture}>
          <div className="flex h-20 w-20 rounded-[50%] border-[1px] bg-opacity-0"></div>
        </button>
      </div>
    </div>
    ): (
    <Customize images={imgSrcArray} selectedStyle={selectedStyle}/>
    )}
    </>
  );
}



interface CameraProps {
  selectedStyle: string;
}