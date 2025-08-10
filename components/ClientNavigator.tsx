"use client";

import PageLoader from "@/components/PageLoader";
import { useState } from "react";
import { useRouter } from "next/navigation";

function useDelayedNavigation(delay: number): {
  loading: boolean;
  navigateWithDelay: (path: string) => void;
} {
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

export default function ClientNavigator() {
  const { loading, navigateWithDelay } = useDelayedNavigation(1000);

  if (loading) return <PageLoader />;

  return (
    <div>
      <button
        onClick={() => navigateWithDelay("/about")}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Go to About (with delay)
      </button>
    </div>
  );
}
