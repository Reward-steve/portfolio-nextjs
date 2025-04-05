"use client";
import { useState, useEffect } from "react";
import { lazyContext } from "./lazyContext";

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timmer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timmer);
    };
  });

  useEffect(() => {
    console.log("isLoading", isLoading);
  }, [isLoading]);

  return (
    <lazyContext.Provider value={{ isLoading }}>
      {children}
    </lazyContext.Provider>
  );
}
