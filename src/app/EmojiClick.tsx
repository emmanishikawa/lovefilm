import { useState } from "react";
import { emojis as emojiSrcMap, EmojiType } from "./components/EmojiImage";


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

export default function ClickEmojiSpawner({ emoji, emojiSize = 30 , onUpdateEmojis}: ClickEmojiSpawnerProps) {
  
    const [spawnedEmojis, setSpawnedEmojis] = useState<EmojiDiv[]>([]);
    const [idCounter, setIdCounter] = useState(0);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!emoji) {console.log("not working"); return};

        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) * 2;
        const y = (e.clientY - rect.top) * 2;

        setSpawnedEmojis((prev) => {
            const updated = [...prev, { x, y, id: idCounter, type: emoji }];
            if (onUpdateEmojis) onUpdateEmojis(updated);
            return updated;
        });

        setIdCounter((prev) => prev + 1);

        console.log(`${emoji} clicked at (${x}, ${y})`);
  };

  return (
    <div className="absolute inset-0 w-full h-full z-10" onClick={handleClick}>
      {spawnedEmojis.map((em) => (
        <div
            key={em.id}
            className="absolute pointer-events-none"
            style={{ left: em.x, top: em.y }}
        >
        {emoji && (
            <img
                src={emojiSrcMap[em.type]}
                alt={emoji}
                width={emojiSize}
                height={emojiSize}
                className="object-contain scale-[2]"
            />
        )}
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
  onUpdateEmojis?: (emojis: EmojiDiv[]) => void;
}