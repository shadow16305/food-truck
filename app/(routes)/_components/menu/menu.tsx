import { cold_drinks, combo_menu, menu } from "@/constants/content";
import { cn, dmSans, mrAlex } from "@/lib/utils";
import Image from "next/image";
import { DefMenu } from "./def-menu";
import { ComboMenu } from "./combo-menu";
import { ColdDrinks } from "./cold-drinks";

export const Menu = () => {
  return (
    <section id="menu" className="mt-20 w-11/12 lg:w-[86%] mx-auto">
      <span className={cn("text-red-cus", mrAlex.className)}>Menu</span>
      <p className={cn("text-neutral-cus lg:text-xl mt-4", dmSans.className)}>
        Welcome to Atlas Turkish Cuisine, where we take your cravings to a whole new level! Our mouthwatering foods are
        made from 100% beef, 100% halal and are served on freshly baked buns.{" "}
      </p>
      <h3 className={cn("text-[2.5rem] mt-4 text-dark-red", mrAlex.className)}>TURKISH STREET FOOD MENU</h3>
      <DefMenu />
      <h3 className={cn("text-[2.5rem] mt-20 text-dark-red", mrAlex.className)}>TURKISH STREET FOOD COMBO MENU</h3>
      <p className={cn("text-neutral-cus lg:text-xl mt-4", dmSans.className)}>
        Elevate your meal with our combo options! Choose a combo Wrap or Plate, paired with a side and drink for
        ultimate satisfaction.
      </p>
      <ComboMenu />
      <h3 className={cn("text-[2.5rem] mt-20 text-dark-red", mrAlex.className)}>COLD DRINKS</h3>
      <ColdDrinks />
    </section>
  );
};
