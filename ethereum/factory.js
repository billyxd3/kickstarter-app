import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x1037278A62CF668e11559D3c34bDb5AE8619A035'
);

export default instance;