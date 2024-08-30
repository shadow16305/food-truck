import { menu } from "@/constants/content";
import { cn, dmSans } from "@/lib/utils";
import Image from "next/image";

export const DefMenu = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-y-10 lg:gap-y-20">
      {menu.map((item) => (
        <div
          key={item.name}
          className={cn("flex flex-col-reverse lg:flex-row justify-between items-center lg:w-5/12", dmSans.className)}>
          <div className="lg:space-y-2">
            <div className="flex gap-x-1 items-center justify-center lg:justify-start">
              <p className="text-[28px] font-medium">{item.name}</p>
              <span className="text-red-cus font-bold hidden lg:block">$ {item.price}</span>
            </div>
            <p className="text-dark-red max-w-[320px] text-center lg:text-start">{item.description}</p>
            <span className="text-red-cus font-bold lg:hidden flex justify-center  whitespace-nowrap">
              $ {item.price}
            </span>
          </div>
          <Image src={item.imgSrc} alt={item.name} width={193} height={140} />
        </div>
      ))}
    </div>
  );
};
