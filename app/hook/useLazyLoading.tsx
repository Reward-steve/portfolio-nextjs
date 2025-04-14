"use client";
import { useContext } from "react";
import { lazyContext } from "../context/lazyContext";

export const useLazyLoading = () => {
  const loading = useContext(lazyContext);

  if (!loading) {
    throw new Error(
      "useLazyLoading must be used within the LazyLoading provider"
    );
  }

  return loading;
};
