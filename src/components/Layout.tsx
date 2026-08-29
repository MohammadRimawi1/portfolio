import { type ReactNode } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }: { children?: ReactNode }) {
  const location = useLocation();

  return (
    <div className="grain min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          {children ?? <Outlet />}
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
