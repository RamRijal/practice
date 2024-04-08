import PlanetsList from "./api/PlanetsList";
import Carousel from "../components/Carousel";
import CarouselItem from "@/components/CarouselItem";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-screen flex justify-center items-center bg-gradient-to-t from-slate-950 to-slate-900">
        <div className="container mx-auto">
          <PlanetsList />
          <Carousel />
        </div>
      </div>
    </>
  );
}
