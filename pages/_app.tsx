import dynamic from 'next/dynamic';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '@/app/store/store';
import { Provider } from 'react-redux';

const Layout = dynamic(
  () => import('@/app/components/layout/layout.component'),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
