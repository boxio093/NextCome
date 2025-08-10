declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: Array<unknown> }) => Promise<unknown>;
      // Add more properties/methods as needed for your use case
    }; // You can replace this with a more complete type if available
  }
}

export async function connectMetaMask() {
  if (typeof window !== "undefined" && window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected accounts:", accounts);
      return accounts;
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null && "code" in error && (error as { code: number }).code === 4001) {
        console.log("User rejected the connection request.");
      } else {
        console.error("Error connecting to MetaMask:", error);
      }
    }
  } else {
    alert("MetaMask not detected. Please install MetaMask extension.");
  }
  return null;
}
