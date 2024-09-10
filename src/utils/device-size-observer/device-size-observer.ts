import React from "react";

export const deviceSizeObserver = (setIsMobile: React.Dispatch<React.SetStateAction<boolean>>) => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
}
