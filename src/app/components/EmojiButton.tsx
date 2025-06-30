import Image from "next/image";
import { emojis, type EmojiType } from './EmojiImage';

export default function EmojiButton({ emojiKey, isSelected, onClick }: EmojiProps) {
  return (
    <>
        <div className="flex justify-center h-16 w-16">
            <button onClick={onClick}
                className={`flex h-16 w-16 rounded-md  transition ease-in-out duration-400 items-center justify-center ${
                            isSelected ? "bg-[#D8E8F8] border-[1px] border-white" : "bg-white hover:bg-[#EDF3FB]"
                            }`}>
                <img
                  src={emojis[emojiKey]}
                  alt={emojiKey}
                  width={30}
                  height={30}
                  className="object-contain"
                />
            </button>
        </div>
    </>
  );
}

interface EmojiProps {
    emojiKey: EmojiType;
    isSelected: boolean;
    onClick: () => void;
}
