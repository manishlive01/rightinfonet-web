import InView, { type InViewProps } from "./motion/InView";
import motion from "./motion/Motion.module.css";

type RevealProps = InViewProps & { delay?: number };

export default function Reveal({ className = "", delay, style, ...rest }: RevealProps) {
  const revealStyle = delay ? { ...style, "--reveal-delay": `${delay}s` } : style;
  return <InView className={`${motion.reveal} ${className}`} style={revealStyle} {...rest} />;
}
