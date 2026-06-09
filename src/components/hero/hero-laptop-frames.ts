export type LaptopScreenInset = {
  top: string;
  left: string;
  width: string;
  height: string;
  transform?: string;
  transformOrigin?: string;
  borderRadius?: string;
};

export type HeroLaptopFrame = {
  src: string;
  alt: string;
  screen: LaptopScreenInset;
  flipHorizontal?: boolean;
};

/**
 * Screen bounds on 1024×768 photos — tuned to the laptop display bezel.
 */
export const HERO_LAPTOP_FRAMES: HeroLaptopFrame[] = [
  {
    src: "/images/hero-laptop-1.png",
    alt: "9X Wealth portfolio preview on laptop — angled view",
    screen: {
      top: "13%",
      left: "37.5%",
      width: "31.5%",
      height: "47%",
      transform: "perspective(900px) rotateY(12deg) rotateX(-2deg)",
      transformOrigin: "left center",
      borderRadius: "5px 3px 3px 5px",
    },
  },
  {
    src: "/images/hero-laptop-2.png",
    alt: "9X Wealth services preview on laptop — front view",
    screen: {
      top: "8.5%",
      left: "21.8%",
      width: "56.4%",
      height: "55%",
      borderRadius: "9px",
    },
  },
  {
    src: "/images/hero-laptop-3.png",
    alt: "9X Wealth advisory preview on laptop — mirror angled view",
    flipHorizontal: true,
    screen: {
      top: "12%",
      left: "31%",
      width: "31%",
      height: "48%",
      transform: "perspective(900px) rotateY(-12deg) rotateX(-2deg)",
      transformOrigin: "right center",
      borderRadius: "3px 5px 5px 3px",
    },
  },
];

export const LAPTOP_IMAGE_ASPECT = 1024 / 768;
