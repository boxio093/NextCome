"use client";

import React from "react";
import { connectMetaMask } from "@/utils/web3";

export default function ConnectButton() {
  const handleConnect = async () => {
    const accounts = await connectMetaMask();
    if (accounts) {
      alert(`Connected account: ${accounts[0]}`);
    }
  };

  return (
    <button onClick={handleConnect} className="btn-primary">
      Connect MetaMask
    </button>
  );
}
