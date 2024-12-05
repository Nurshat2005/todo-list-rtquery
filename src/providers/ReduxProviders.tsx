'use client';
import { api } from '@/redux/api';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { FC, ReactNode } from 'react';

interface IReduxProvider {
  children: ReactNode;
}

const ReduxProviders: FC<IReduxProvider> = ({ children }) => {
  return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default ReduxProviders;
