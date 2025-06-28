import Image from "next/image";
import { RefObject } from "react";
import { downloadElementAsPng } from "../DownloadFunction";
import ColorOverlay from "./ColorOverlay";

export default function FrameView({images, selectedStyle} : FrameViewProps) {

  /*const handleDownload = () => {
    if (imgRef.current) {
      downloadElementAsPng(imgRef.current, "4-cut.png");
    }
  };*/
  
  if(selectedStyle == "SmallFrame"){
    return(
        <>
        <div className="flex justify-start h-[100vh] overflow-hidden mr-2">
          <div className="flex scale-[0.5] h-[1530px] w-[514px] self-center bg-white"> 
            <div className="flex flex-col h-[345px] w-[543px] mt-[81px] ml-[41px] mr-[41px]">
              {images.map((src, index) => (
                <div key={index} className="relative mt-[4px]">
                  <img draggable="false" src={src} className="object-cover w-full h-full" />
                  <ColorOverlay/>
                </div>
              ))}
            </div>
          </div>
        </div>
        </>
    );
  }
  if(selectedStyle == "BigFrame"){
    return(
        <>
            <div className="flex justify-start h-[100vh] overflow-hidden mr-2">
                <div className="flex scale-[0.5] h-[1086px] w-[724px] self-center bg-white items-center justify-center">
                    <div className="grid grid-cols-2 grid-rows-2 gap-5 mx-auto">
                        {images.map((src, index) => (
                            <div key={index} className="relative w-[314px] h-[470px]">
                                <img draggable="false" src={src} className="w-full h-full object-cover" />
                                <ColorOverlay/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  return null;
}

interface FrameViewProps {
  images: string[];
  selectedStyle: string;
}