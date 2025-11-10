import { StaticImageData } from "next/image";

export interface AnimatedHeroProps {
  image?: string | StaticImageData;
  video?: string;
  title: string;
  subtitle?: string;
  overlay?: ReactNode;
  height?: string;
  showConnectingAnimation?: boolean;
}

export type Service =
  | "education"
  | "immigration"
  | "investment"
  | "conferences"
  | "jobs"
  | "industry"
  | "trade"
  | "travel";


  export interface AnimatedBlockProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
}
