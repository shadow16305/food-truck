import { catering } from "@/constants/content";
import { cn, dmSans, mrAlex } from "@/lib/utils";
import { CateringCard } from "./catering-card";

export const Catering = () => {
  return (
    <section className="w-11/12 lg:w-[86%] space-y-12 mt-20 mx-auto" id="catering">
      <div className="flex flex-col items-center gap-y-4 text-center">
        <span className={cn("text-red-cus", mrAlex.className)}>CATERING</span>
        <h5 className={cn("text-[2rem] font-bold text-dark-red", dmSans.className)}>
          Crafting Culinary Success for Your Event
        </h5>
        <p className={cn("text-neutral-cus", dmSans.className)}>
          Bring the rich, authentic flavours of Turkey to your next event with Atlas Turkish Cuisine's top-notch
          catering services. Whether you're hosting a BBQ event, a corporate gathering, or a special celebration, we've
          got you covered. Our team will craft a tailored menu that suits your needs, delivering fresh, delicious food
          that will leave your guests raving. Let us handle the cooking, so you can focus on making memories!
        </p>
      </div>
      <div className={cn("flex flex-col gap-y-10 lg:flex-row justify-between", dmSans.className)}>
        {catering.map((item) => (
          <CateringCard
            key={item.type}
            type={item.type}
            description={item.description}
            image={item.imgSrc}
            link_text={item.link_text}
          />
        ))}
      </div>
    </section>
  );
};
