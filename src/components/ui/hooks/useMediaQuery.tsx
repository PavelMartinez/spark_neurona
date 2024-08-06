'use client';

import { useMemo, useSyncExternalStore } from "react";

const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1200,
};

export function useCustomMediaQuery(mediaQuery: string): boolean {
  const getServerSnapshot = () => {
    // You can use a default value or a server-side check here
    return false; // Or true, based on your preference
  };
  const [subscribe, getSnapshot] = useMemo(() => {
    // Check if matchMedia is available
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return [() => {}, (): boolean => false];
    }

    const mediaQueryList = window.matchMedia(mediaQuery);

    function subscribe(onStoreChange: () => void) {
      mediaQueryList.addEventListener("change", onStoreChange);
      return () => mediaQueryList.removeEventListener("change", onStoreChange);
    }

    const getSnapshot = () => mediaQueryList.matches;

    return [subscribe, getSnapshot];
  }, [mediaQuery]);

  //@ts-ignore
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export const useMediaQuery = () => {
  const isMobile = useCustomMediaQuery(`(max-width: ${breakpoints.tablet - 1}px)`);
  const isTablet = useCustomMediaQuery(`(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`);
  const isDesktop = useCustomMediaQuery(`(min-width: ${breakpoints.desktop}px)`);
  const isTabletUp = useCustomMediaQuery(`(min-width: ${breakpoints.tablet}px)`);
  const isTabletDown = useCustomMediaQuery(`(max-width: ${breakpoints.desktop - 1}px)`);

  const matches = useMemo(() => {
    return {
      isMobile,
      isTablet,
      isDesktop,
      isTabletUp,
      isTabletDown,
    };
  }, [isMobile, isTablet, isDesktop, isTabletUp, isTabletDown]);

  return matches;
};