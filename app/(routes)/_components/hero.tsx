import { cn, dmSans, mrAlex } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="bg-yellow-cus relative lg:h-[91vh] pt-32 pb-20 lg:py-0">
      <div className="max-w-[91%] lg:max-w-[86%] mx-auto flex items-center h-full">
        <div className="max-w-[600px] lg:w-1/2 flex flex-col">
          <span className={cn("text-[22px] font-medium", dmSans.className)}>Genuine Flavors in Every Bite</span>
          <h1 className={cn("text-3xl lg:text-6xl text-red-cus mt-2", mrAlex.className)}>
            Authentic turkish street sandwiches
          </h1>
          <p className="text-dark-red/70 lg:text-xl tracking-[0.5px] leading-[32px] mt-6">
            Welcome to Atlas Turkish Cuisine, where we bring the vibrant flavors of Turkey straight to you! Our wraps
            are crafted with premium, halal beef and wrapped in soft, freshly baked flatbreads.
          </p>
          <div className={cn("flex lg:flex-col gap-6 mt-6", mrAlex.className)}>
            <Link
              href="#menu"
              className="bg-red-cus py-3 w-32 lg:w-56 text-center rounded-lg text-neutral-300 hover:bg-red-600 transition-colors">
              See the menu
            </Link>
            <Link
              href="#contact"
              className="bg-red-cus py-3 w-32 rounded-lg lg:w-56 text-center text-neutral-300 hover:bg-red-600 transition-colors">
              Book catering
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[49%] h-full absolute top-0 right-0 hidden lg:block">
        <Image src="/images/hero-img.jpg" alt="hero image" fill className="object-cover rounded-l-[261px]" />
      </div>
    </section>
  );
};
