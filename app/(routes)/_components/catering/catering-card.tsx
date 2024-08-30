import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

interface CateringCardProps {
  type: string;
  description: string;
  link_text: string;
  image: string;
}

export const CateringCard = ({ type, description, link_text, image }: CateringCardProps) => {
  return (
    <div className="relative">
      <div className="relative w-full lg:w-[300px] xl:w-[352px] h-[220px] xl:h-[248px] 2xl:w-[460px] 2xl:h-[280px]">
        <Image src={image} alt={type} fill className="object-cover" />
      </div>
      <div className="lg:absolute -bottom-32 lg:left-1/2 lg:-translate-x-1/2 bg-white shadow-xl space-y-3 w-full lg:w-[280px] xl:w-[312px] p-5">
        <span className="text-lg font-bold text-dark-red">{type}</span>
        <p className="leading-[1.5rem] text-neutral-cus">{description}</p>
        <Link href="#contact" className="text-dark-red flex items-center gap-x-1 transition-colors hover:text-red-600">
          {link_text} <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};
