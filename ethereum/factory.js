import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0xFD1E7d4AebcCeaD38fc52CcFAfdE607371d5D420'
);

export default instance;