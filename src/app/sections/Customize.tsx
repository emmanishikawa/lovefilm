import { useRef, useState } from "react";
import { generatePngFromElement } from "../GenerateImage";
import Logo from "../components/Logo";
import CustomizeBox from "../components/CustomizeBox";
import FrameView from "../components/FrameView";
import { downloadElementAsPng } from "../DownloadFunction";


export default function Customize({ images, selectedStyle }: CustomizeProps) {

  const [isClicked, setIsClicked] = useState(false);

  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [imageData, setImageData] = useState<string | undefined>(undefined);


  const captureRef = useRef<HTMLDivElement>(null);

const handleDoneClick = async () => {
    if (captureRef.current) {
      try {
        const dataUrl = await generatePngFromElement(captureRef.current);
        if (dataUrl) {
          downloadElementAsPng(captureRef.current, "4-cut.png");
        }
      } catch (error) {
        console.error("Error generating or downloading PNG:", error);
      }
    }
  };



  if(!isClicked){
      return (
      <>
        <div className="flex flex-row justify-center h-[100vh] overflow-hidden">
          <div ref={captureRef}>
            
              <FrameView images={images} selectedStyle={selectedStyle} />
            
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