// layout.tsx
import React, { ReactNode } from 'react';
import Navbar from '../_component/website/Navbar';
import SideBar from '../_component/components/SideBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section>
      <Navbar />
      <div className="flex flex-row px-[60px]">
        <SideBar />
        <div className="flex flex-col px-[64px] py-[60px]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Layout;
