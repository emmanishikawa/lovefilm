import EmojiButton from "./EmojiButton";
import * as React from "react"

export default function CustomizeBox({ onSelectEmoji, selectedEmoji }: CustomizeBoxProps) {

    const emojis = ["bubble", "bunny", "dango", "hearts", "polar", "ribbon", "sparkle", "teddy", "thinking"];

    return (
        <>
            <div className="">
                <div className="grid grid-cols-3 grid-rows-3 gap-5 mx-auto">
                    {emojis.map((emoji, index) => (
                        <EmojiButton
                            key={index}
                            emoji={emoji}
                            isSelected={selectedEmoji === emoji}
                            onClick={() => onSelectEmoji(emoji)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

interface CustomizeBoxProps {
    onSelectEmoji: (emoji: string) => void;
    selectedEmoji: string | null;
}


