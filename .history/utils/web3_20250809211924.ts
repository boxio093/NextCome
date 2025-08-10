export async function connectMetaMask() {
  if (typeof window !== "undefined" && window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected accounts:", accounts);
      return accounts;
    } catch (error: any) {
      if (error.code === 4001) {
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
