import { useState } from "react";
import { emojis as emojiMap } from "./components/EmojiImage";
import type { EmojiType } from "./components/EmojiImage";

const typedEmojis: Record<EmojiType, string> = emojiMap;


export default function ClickEmojiSpawner({ emoji, emojiSize = 30, emojis, setEmojis }: ClickEmojiSpawnerProps) {
  const [idCounter, setIdCounter] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!emoji) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) * 2 - 15;
    const y = (e.clientY - rect.top) * 2 - 15;

    setEmojis(prev => [...prev, { x, y, id: idCounter, type: emoji }]);
    setIdCounter(prev => prev + 1);
  };

  return (
    <div className="absolute inset-0 w-full h-full z-10" onClick={handleClick}>
      {emojis.map(em => (
        <div
          key={em.id}
          className="absolute pointer-events-none"
          style={{ left: em.x, top: em.y }}
        >
          <img
            src={typedEmojis[em.type]}
            width={emojiSize}
            height={emojiSize}
            className="object-contain scale-[2]"
          />
        </div>
      ))}
    </div>
  );
}

export interface EmojiDiv {
  x: number;
  y: number;
  id: number;
  type: EmojiType;
}

interface ClickEmojiSpawnerProps {
  emojiSize?: number;
  emoji: EmojiType | null;
  emojis: EmojiDiv[];
  setEmojis: React.Dispatch<React.SetStateAction<EmojiDiv[]>>;
}
