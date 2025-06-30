import EmojiButton from "./EmojiButton";
import * as React from "react"
import { EmojiType } from "./EmojiImage";

export const emojiKeys: EmojiType[] = [
  'bubble',
  'bunny',
  'dango',
  'hearts',
  'polar',
  'ribbon',
  'sparkle',
  'teddy',
  'thinking',
];

export default function CustomizeBox({ onSelectEmoji, selectedEmoji }: CustomizeBoxProps) {

    return (
        <>
            <div className="">
                <div className="grid grid-cols-3 grid-rows-3 gap-5 mx-auto">
                    {emojiKeys.map((emojiKey) => (
                        <EmojiButton
                            key={emojiKey}
                            emojiKey={emojiKey}
                            isSelected={selectedEmoji === emojiKey}
                            onClick={() => onSelectEmoji(emojiKey)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

interface CustomizeBoxProps {
    onSelectEmoji: (emoji: EmojiType) => void;
    selectedEmoji: EmojiType | null;
}


