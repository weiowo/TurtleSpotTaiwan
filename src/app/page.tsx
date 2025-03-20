import TurtleProfile from '@/components/TurtleProfile';
import Banner from '@/components/Banner';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Banner />
      <TurtleProfile />
      <Carousel />
    </div>
  );
}
