import Cta from "@/components/Cta";
import Description from "@/components/Description";
import DraggableCarousel from "@/components/DraggableCarousel";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import StandardProduct from "@/components/StandardProduct";

export default function Home() {
  return (
    <main className="flex flex-col container p-8 xl:px-0 space-y-4 md:space-y-8 lg:space-y-16 mx-auto items-center w-full">
      <Hero />
      <Description />
      <DraggableCarousel />
      <Products />
      <StandardProduct />
      <Cta />
    </main>
  );
}
