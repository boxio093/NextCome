// Extend window.ethereum typing first
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      // add other ethereum properties if needed
    };
  }
}

// Define an error type for MetaMask errors
interface MetaMaskError extends Error {
  code?: number;
  message: string;
}

export async function connectMetaMask(): Promise<string[] | null> {
  if (typeof window !== "undefined" && window.ethereum) {
    try {
      // Request accounts from MetaMask
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      if (Array.isArray(accounts)) {
        console.log("Connected accounts:", accounts);
        return accounts as string[];
      }
      return null;
    } catch (error) {
      const e = error as MetaMaskError;
      if (e.code === 4001) {
        console.log("User rejected the connection request.");
      } else {
        console.error("Error connecting to MetaMask:", e.message);
      }
      return null;
    }
  } else {
    alert("MetaMask not detected. Please install MetaMask extension.");
    return null;
  }
}
