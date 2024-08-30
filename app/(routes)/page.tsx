import { AboutUs } from "./_components/about-us";
import { Catering } from "./_components/catering/catering";
import { Contact } from "./_components/contact";
import { Hero } from "./_components/hero";
import { Menu } from "./_components/menu/menu";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Menu />
      <Catering />
      <Contact />
    </>
  );
}
