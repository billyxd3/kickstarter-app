import web3 from "./web3";
import Campaing from "./build/Campaign.json";

const campaignInstance = (address) => {
    return new web3.eth.Contract(
        Campaing.abi, 
        address
    );  
};
export default campaignInstance;