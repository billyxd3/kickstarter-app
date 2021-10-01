const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'cover toy melody animal panda cigar patch faculty hundred draft pumpkin session',
    'https://kovan.infura.io/v3/6032f92e14ff41948cef385eff625c42'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({ data: compiledFactory.evm.bytecode.object })
        .send({ from: accounts[0], gasPrice: '5000000000' });

    console.log('Contract deployed to ', result.options.address);
}
deploy();