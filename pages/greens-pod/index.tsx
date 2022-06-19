import dynamic from 'next/dynamic';
const AppLayout = dynamic(
  () => import('@/app/components/layout/layout.component'),
  { ssr: false }
);

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full text-5xl text-gray-400">
      <span>Oopss Sorry!</span>
      <span>Under Maintenance</span>
    </div>
  );
};

Home.layout = AppLayout;

export default Home;
