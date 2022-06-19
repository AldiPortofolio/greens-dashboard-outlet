import dynamic from 'next/dynamic';

const Login = dynamic(
  () => import('@/components/pages/login/login.component'),
  { ssr: false }
);

const Index = () => {
  return (
    <div className="w-full h-screen bg-main-color flex flex-col justify-center items-center">
      <Login />
    </div>
  );
};

export default Index;
