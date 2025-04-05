"use client";
import { createContext } from "react";

export const lazyContext = createContext<{ isLoading: boolean } | undefined>(
  undefined
);
