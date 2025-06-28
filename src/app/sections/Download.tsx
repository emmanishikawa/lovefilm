import Image from "next/image";
import { RefObject, useRef } from "react";
import { downloadElementAsPng } from "../DownloadFunction";
import FrameView from "../components/FrameView";

export default function Download_Page({ src } : DownloadProps) {

  const captureRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (captureRef?.current) {
      downloadElementAsPng(captureRef.current, "4-cut.png");
    }
  };
  
  return (
    <>
      <div className="flex justify-center mt-10" ref={captureRef}>
        <img src={src} alt="Generated PNG Preview" className="shadow-xl border border-gray-300" />
      </div>
      <button onClick={handleDownload}>
        Download PNG
      </button>
    </>
  );
}

interface DownloadProps{
  src: string;
}