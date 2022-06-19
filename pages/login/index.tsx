import dynamic from 'next/dynamic';
import Head from 'next/head';

const Login = dynamic(
  () => import('@/components/pages/login/login.component'),
  { ssr: false }
);

const Index = () => {
  return (
    <>
      <Head>
        <title>Greens - Outlet Login</title>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <div className="w-full h-screen bg-main-color flex flex-col justify-center items-center">
        <Login />
      </div>
    </>
  );
};

export default Index;
