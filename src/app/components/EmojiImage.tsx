export type EmojiType = 'bubble' | 'bunny' | 'dango' | 'hearts' | 'polar' | 'ribbon' | 'sparkle' | 'teddy' | 'thinking';

export const emojis: Record<EmojiType, string> = {
  bubble: "/assets/bubble.png",
  bunny: "/assets/bunny.png",
  dango: "/assets/dango.png",
  hearts: "/assets/hearts.png",
  polar: "/assets/polar.png",
  ribbon: "/assets/ribbon.png",
  sparkle: "/assets/sparkle.png",
  teddy: "/assets/teddy.png",
  thinking: "/assets/thinking.png"
};

type EmojiProps = {
  EmojiType: EmojiType;
};

export default function EmojiImage({ EmojiType }: EmojiProps) {
  return <img src={emojis[EmojiType]}/>;
}
