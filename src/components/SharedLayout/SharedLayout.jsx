import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={"Loading..."}>
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Suspense>
    </>
  );
};
