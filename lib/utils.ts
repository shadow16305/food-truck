import { DM_Sans } from "next/font/google";
import MrAlex from "next/font/local";

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mrAlex = MrAlex({
  src: [
    {
      path: "../public/fonts/MrAlex-Bold.woff2",
      weight: "400",
    },
  ],
});

export const dmSans = DM_Sans({ subsets: ["latin"] });
