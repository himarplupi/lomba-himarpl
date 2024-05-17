
"use client";

import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", documentChangeHandler);
    return () => {
      mediaQueryList.removeEventListener("change", documentChangeHandler);
    };
  }, [query, isClient]);

  return matches;
};
