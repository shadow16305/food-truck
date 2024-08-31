import { cn, dmSans } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BiCalendar } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="bg-dark-red pt-12 lg:pt-[70px] mt-20">
      <div className={cn("w-11/12 lg:w-[86%] mx-auto relative", dmSans.className)}>
        <div className="flex justify-between items-center">
          <h6 className="text-white text-2xl lg:text-[2rem] lg:leading-tight max-w-[86%] lg:max-w-[580px]">
            Come hungry, leave happy—let us bring the joy of Turkish cuisine to your event.
          </h6>
          <div className="absolute w-[60px] h-[130px] lg:w-[130px] lg:h-[200px] -top-[70px] right-0">
            <Image src="/images/logo.svg" alt="logo" fill className="" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-20 gap-y-8">
          <Link
            href="#contact"
            className="bg-white rounded-lg text-dark-red w-full lg:w-[30%] flex items-center justify-center gap-x-2 py-4">
            <BiCalendar /> Book and Event
          </Link>
          <div className="bg-white rounded-lg text-dark-red w-full lg:w-[30%] flex items-center justify-center gap-x-2 py-4">
            <BiCalendar /> +1 (416) 388-5847
          </div>
          <a
            href="mailto:atlasturkishcuisine@gmail.com"
            className="bg-white rounded-lg text-dark-red w-full lg:w-[30%] flex items-center justify-center gap-x-2 py-4">
            <BiCalendar /> atlasturkishcuisine@gmail.com
          </a>
        </div>
        <div className="flex justify-between items-center"></div>
      </div>
      <div className="border-t border-t-neutral-300 text-neutral-300 py-8 mt-12">
        <div
          className={cn(
            "w-11/12 lg:w-[86%] mx-auto relative flex flex-col lg:flex-row items-center justify-between font-light",
            dmSans.className
          )}>
          <div className="flex flex-col lg:flex-row items-center gap-y-2 gap-x-6 text-lg">
            <Link href="#contact">BBQ Event</Link>
            <Link href="#contact">Special Event</Link>
            <Link href="#contact">Corporate Event</Link>
            <Link href="#contact">Menu</Link>
            <Link href="#contact">Contact us</Link>
          </div>
          <p className="mt-6 lg:mt-0">@ 2024 by Sanemuix. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};
