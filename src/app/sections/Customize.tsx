import { useRef, useState } from "react";
import { generatePngFromElement } from "../GenerateImage";
import { downloadElementAsPng } from "../DownloadFunction";
import CustomizeBox from "../components/CustomizeBox";
import FrameView from "../components/FrameView";
import Logo from "../components/Logo";
import ClickEmojiSpawner from "../EmojiClick";
import { emojis, type EmojiType } from '../components/EmojiImage';
import type { EmojiDiv } from '../EmojiClick';

export default function Customize({ images, selectedStyle }: CustomizeProps) {

  const [isClicked, setIsClicked] = useState(false);

  const [selectedEmoji, setSelectedEmoji] = useState<EmojiType | null>(null);
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

  const [placedEmojis, setPlacedEmojis] = useState<EmojiDiv[]>([]);
  const handleUndoClick = () => {
    setPlacedEmojis((prev) => {
        if (prev.length === 0) return prev;
        return prev.slice(0, prev.length - 1);
      });
  };




  if(!isClicked){
      return (
      <>
        <div className="flex flex-row justify-center h-[100vh] overflow-hidden">
          <div ref={captureRef}>
            <div className="flex items-center justify-center h-screen overflow-hidden">
              <div className="bg-blue-500 scale-[0.5] origin-center">
                <ClickEmojiSpawner emoji={selectedEmoji} onUpdateEmojis={(emojis) => setPlacedEmojis(emojis)}/>
                <FrameView images={images} selectedStyle={selectedStyle} />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center mt-36">
              <Logo/>
              <CustomizeBox onSelectEmoji={(emoji) => setSelectedEmoji(emoji)} selectedEmoji={selectedEmoji} />
            </div>
            <div className="flex flex-row justify-center">
              <button onClick={handleUndoClick} className="bg-white m-5 px-2 rounded-md hover:bg-[#bac8d6] active:bg-[#bac8d6]">undo</button>
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
