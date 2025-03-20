import TurtleProfile from '@/components/TurtleProfile';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Banner />
      <TurtleProfile />
    </div>
  );
}
