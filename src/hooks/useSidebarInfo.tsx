"use client";
import { useState, useEffect } from 'react';

const useSidebarInfo = () => {
  const [navbarClass, setNavbarClass] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const addClasses = () => {
    setNavbarClass(true);
    setIsSidebarOpen(true);
    document.body.classList.add('on-side');
  };

  const removeClasses = () => {
    setNavbarClass(false);
    setIsSidebarOpen(false);
    document.body.classList.remove('on-side');
  };

  useEffect(() => {
    // Cleanup function to remove the 'on-side' class if the component unmounts
    return () => {
      document.body.classList.remove('on-side');
    };
  }, []);

  return {
    navbarClass,
    isSidebarOpen,
    addClasses,
    removeClasses,
  };
};

export default useSidebarInfo;