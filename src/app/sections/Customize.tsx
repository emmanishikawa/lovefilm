import { useEffect, useRef, useState } from "react";
import Camera from "./Camera";
import { downloadElementAsPng } from "../DownloadFunction";
import Logo from "../components/Logo";
import CustomizeBox from "../components/CustomizeBox";
import ColorOverlay from "../components/ColorOverlay";
import Download_Page from "./Download";


export default function Customize({ images, selectedStyle }: CustomizeProps) {

  const [isClicked, setIsClicked] = useState(false);
  const handleDoneClick = () => {
  console.log("done button clicked!");
  setIsClicked(true);
};



  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);

  const [scale, setScale] = useState(1);

  useEffect(() => {
  const handleResize = () => {
    const frameWidth = selectedStyle === "BigFrame" ? 724 : 514;
    const maxWidth = window.innerWidth * 0.9;
    const newScale = Math.min(maxWidth / frameWidth, 1);
    setScale(newScale);
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [selectedStyle]);


  const captureRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (captureRef.current) {
      downloadElementAsPng(captureRef.current, "4-cut.png");
    }
  };

  if (isClicked) {
    return <Download_Page />;
  }

  if(!isClicked && selectedStyle == "SmallFrame"){

    return (
    <>
      <div className="flex flex-row justify-center h-[100vh] overflow-hidden">
        <div className="flex justify-start h-[100vh] overflow-hidden mr-2">
          <div ref={captureRef} className="flex scale-[0.5] h-[1530px] w-[514px] self-center bg-white"> 
            <div className="flex flex-col h-[345px] w-[543px] mt-[81px] ml-[41px] mr-[41px]">
              {images.map((src, index) => (
                <div key={index} className="relative mt-[4px]">
                  <img src={src} className="object-cover w-full h-full" />
                  <ColorOverlay/>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center mt-36">
            <Logo/>
            <CustomizeBox onSelectEmoji={(emoji) => setSelectedEmoji(emoji)} selectedEmoji={selectedEmoji} />
          </div>
          <div className="flex flex-row justify-center">
            <button className="bg-white m-5 px-2 rounded-md hover:bg-[#bac8d6] active:bg-[#bac8d6]">undo</button>
            <button onClick={handleDoneClick} className="bg-white m-5 px-2 rounded-md hover:bg-[#bac8d6] active:bg-[#bac8d6]">done</button>
          </div>
        </div>
      </div>
    </>
  );
  } else if(!isClicked && selectedStyle == "BigFrame"){
    return (
    <>
      <div className="flex flex-row justify-center h-[100vh] overflow-hidden">
        <div className="flex justify-start h-[100vh] overflow-hidden mr-2">
          <div ref={captureRef} className="flex scale-[0.65] h-[1086px] w-[724px] self-center bg-white items-center justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-5 mx-auto">
              {images.map((src, index) => (
                <div key={index} className="relative w-[314px] h-[470px]">
                  <img src={src} className="w-full h-full object-cover" />
                  <ColorOverlay/>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center mt-36">
            <Logo/>
            <CustomizeBox onSelectEmoji={(emoji) => setSelectedEmoji(emoji)} selectedEmoji={selectedEmoji} />
          </div>
          <div className="flex flex-row justify-center">
            <button className="bg-white m-5 px-2 rounded-md hover:bg-[#bac8d6] active:bg-[#bac8d6]">undo</button>
            <button onClick={handleDoneClick} className="bg-white m-5 px-2 rounded-md hover:bg-[#bac8d6] active:bg-[#bac8d6]">done</button>
          </div>
        </div>
      </div>
    </>
  );
  } 
}
interface CustomizeProps {
    images: string[];
    selectedStyle: string;
  }

  //h-[1530px] w-[514px] for frame
  //h-[345px] w-[543px] mt-[81px] ml-[41px] mr-[41px] for individual pic
  //<button onClick={handleDownload} className="flex justify-center"><div className="flex">download</div></button>
  