async function connectMetaMask() {
  if (typeof window.ethereum !== "undefined") {
    try {
      // Request accounts from MetaMask
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected accounts:", accounts);
      // You can now use accounts[0] to interact with the wallet
    } catch (error) {
      if (error.code === 4001) {
        console.log("User rejected the connection request.");
      } else {
        console.error("Error connecting to MetaMask:", error);
      }
    }
  } else {
    alert("MetaMask not detected. Please install MetaMask extension.");
  }
} where will this file be 