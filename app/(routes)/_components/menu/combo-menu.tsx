import { combo_menu } from "@/constants/content";
import { cn, dmSans } from "@/lib/utils";
import Image from "next/image";

export const ComboMenu = () => {
  return (
    <div className="flex flex-col gap-y-10 lg:flex-row justify-between mt-10">
      {combo_menu.map((item, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col gap-y-4 lg:w-[30%] shadow-lg px-4 py-6 lg:shadow-none lg:p-0 rounded-lg",
            dmSans.className
          )}>
          <Image src={item.imgSrc} alt={item.name} width={148} height={40} className="rounded-lg" />
          <h4 className="text-[1.75rem] text-red-cus font-bold">{item.name}</h4>
          <div className="space-y-2">
            <div
              className={cn(
                "flex justify-between lg:justify-normal xl:gap-x-2 font-bold",
                index === 0 && "lg:items-center"
              )}>
              <p className="text-xl text-dark-red">{item.main_item}</p>
              <span className="text-red-cus whitespace-nowrap">$ {item.price}</span>
            </div>
          </div>
          <p className="text-dark-red italic text-xl">{item.main_item_description}</p>
          <ul className="text-dark-red text-xl space-y-4 font-medium">
            <li>{item.extra_one}</li>
            <li>{item.extra_two}</li>
            <li>{item.extra_three}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};
