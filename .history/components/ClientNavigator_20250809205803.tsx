// components/ClientNavigator.tsx
"use client";

//import { useDelayedNavigation } from "@/lib/useDelayedNavigation";
import PageLoader from "@/components/PageLoader";
import { useState } from "react";
import { useRouter } from "next/navigation";

function useDelayedNavigation(delay: number): { loading: boolean; navigateWithDelay: (path: string) => void } {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const navigateWithDelay = (path: string) => {
    setLoading(true);
    setTimeout(() => {
      router.push(path);
      setLoading(false);
    }, delay);
  };

  return { loading, navigateWithDelay };
}

