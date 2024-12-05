import LayoutSite from '@/components/layout/LayoutSite';
import React, { FC, ReactNode } from 'react';

interface LayoutSiteProps {
  children: ReactNode;
}
const layout: FC<LayoutSiteProps> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default layout;
