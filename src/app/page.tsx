import TurtleProfile from '@/components/TurtleProfile';
import Banner from '@/components/Banner';
import Carousel from '@/components/Carousel';
import Location from '@/components/Location';
// import Stories from '@/components/Stories';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Banner />
      <TurtleProfile />
      <Carousel />
      <Location />
      {/* <Stories /> */}
    </div>
  );
}
