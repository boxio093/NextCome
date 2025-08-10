// components/ClientNavigator.tsx
"use client";

import { useDelayedNavigation } from "../lib/useDelayedNavigation";
import PageLoader from "./PageLoader";

export default function ClientNavigator() {
  const { loading, navigateWithDelay } = useDelayedNavigation(1000);

  return (
    <>
      {loading && <PageLoader />}
      <button
        onClick={() => navigateWithDelay("/about")}
        disabled={loading}
        className="px-6 py-3 bg-indigo-600 text-white rounded-md"
      >
        Go to About
      </button>
    </>
  );
}
