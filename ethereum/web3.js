import Web3 from "web3";

// window.ethereum.request({ method: 'eth_requestAccounts' });

// const web3 = new Web3(window.ethereum);

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in the browser and Metamask is already installed
    window.ethereum.request({ method: 'eth_requestAccounts' });
    web3 = new Web3(window.ethereum);
} else {
    // we are on server or user is not running Metamask
    const provider = new Web3.providers.HttpProvider(
        'https://kovan.infura.io/v3/6032f92e14ff41948cef385eff625c42'
    );
    web3 = new Web3(provider);
}

export default web3;