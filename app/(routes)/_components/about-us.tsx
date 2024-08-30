import { about_images } from "@/constants/content";
import { cn, dmSans, mrAlex } from "@/lib/utils";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";

export const AboutUs = () => {
  return (
    <section className="w-11/12 lg:w-[79%] mx-auto mt-20 flex flex-col lg:flex-row items-center justify-between">
      <div className="relative w-full lg:w-[48%] h-64 lg:h-[500px]">
        <Image src="/images/about-img.jpg" alt="image with drinks" fill className="object-cover rounded-[30px]" />
      </div>
      <div className="lg:w-[48%] flex flex-col gap-y-6 mt-6 lg:mt-0">
        <div>
          <span className={cn("text-red-cus", mrAlex.className)}>About us</span>
          <h2 className={cn("text-[2rem] leading-[2.5rem] font-bold text-dark-red", dmSans.className)}>
            Experience the Authentic Flavours of Turkey with Every Bite
          </h2>
        </div>
        <div className="w-full h-px bg-neutral-300" />
        <p className={cn("text-neutral-cus leading-[1.5rem]", dmSans.className)}>
          At Atlas Turkish Cuisine, we are a new brand established to bring you the rich and authentic street flavors of
          Turkey. By staying true to traditional recipes and using carefully selected ingredients, we bring the unique
          culinary culture of Turkey to your table. At Atlas Turkish Cuisine, with every bite, you will experience a
          flavorful journey through the streets of Turkey. Our mission is to present these special flavors to you in
          their freshest and most authentic form, and to introduce you to the taste of Turkish cuisine.
        </p>
        <a href="#" className="flex items-end gap-x-1 relative">
          <div className="border border-red-cus rounded-full p-2">
            <BsInstagram className="size-[18px] text-red-cus" />
          </div>
          <span className="text-red-cus">atlasturkishcuisine</span>
          <div className="bg-red-cus h-px w-[150px] absolute left-[22px] bottom-0" />
        </a>
        <div className="flex items-center justify-between">
          {about_images.map((img) => (
            <div key={img.name} className="w-[31%] h-36 relative">
              <Image src={img.imgSrc} alt={img.name} fill className="object-cover rounded-[10px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
