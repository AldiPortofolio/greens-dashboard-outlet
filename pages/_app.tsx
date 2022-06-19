import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '@/app/store/store';
import { ReactNode, useEffect } from 'react';
import { productsApiSlice } from '@/app/store/product/product.slice';
import { menusApiSlice } from '@/app/store/menu/menu.slice';
import {
  setTabOrder,
  setTitle,
  setMenuActive,
  setTabMenu,
} from '@/app/store/layout/layout.slice';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { useRouter } from 'next/router';
import { getTabOrder, getTabAside, getTabMenu } from '@/app/utils/set-tab';
import { parseCookies } from 'nookies';

function MyApp({ Component, pageProps }: AppProps) {
  const { 'auth.AccessToken': token } = parseCookies();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const Layout =
    (Component as any).layout ||
    (({ children }: { children: ReactNode }) => <>{children}</>);

  useEffect(() => {
    if (token) {
      const tabOrder: any = getTabOrder(router.pathname);
      const tabAside: any = getTabAside(router.pathname);
      const tabMenu: any = getTabMenu(router.pathname);

      dispatch(setTabOrder(tabOrder));
      dispatch(setMenuActive(tabAside?.aside));
      dispatch(setTitle(tabAside?.title));
      dispatch(setTabMenu(tabMenu));

      dispatch(productsApiSlice.endpoints.geProducts.initiate(''));
      dispatch(menusApiSlice.endpoints.geMenus.initiate(null));
    }
  }, [dispatch, router, token]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
