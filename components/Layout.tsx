// components/Layout.tsx
import React from 'react';
import { useLoading } from '../app/context/LoadingContext';
import Loading from './Loading';
import useLoadingOnRouteChange from '../hooks/useLoadingOnRouteChange';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoading();
  useLoadingOnRouteChange();

  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
};

export default Layout;