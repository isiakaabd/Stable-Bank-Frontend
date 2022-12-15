import DAO from "../utils/abi/DAO.json";
import SUSDC from "../utils/abi/SUSDC.json";
import USDCMinting from "../utils/abi/usdcMinting";
import StableBank from "../utils/abi/StableBank.json";
import CrowdFundFactory from "../utils/abi/crowdFundFactory.json";

export const DAO_ADDRESS = "0x6Af366e15196D13997287A5F7760c7cE5C18a291";
export const DAO_TOKEN_ADDRESS = "0x2144683943E349562830B5bB2D559650B46F1f11";
export const sUSDC_TOKEN_ADDRESS = "0x5468b0FDdC8DB2FDCb665EFf28eb35Bbf0AF342d";
export const CROWDFUND_FACTORY_ADDRESS =
  "0xA5641e07F05cE12D2a7F35Cc549421dC1c141eF2";
export const MINTING_CONTRACT_ADDRESS =
  "0xc5167Df8A995b4A89D27c430ECB393106aF7CFa9";
export const DAO_FUNDY_NFT_ADDRESS =
  "0xc5167Df8A995b4A89D27c430ECB393106aF7CFa9";

export const DAO_CONTRACT = {
  address: DAO_ADDRESS,
  abi: DAO.abi,
};

export const sUSDC_MINTING_CONTRACT = {
  address: MINTING_CONTRACT_ADDRESS,
  abi: USDCMinting.abi,
};

export const sUSDC_CONTRACT = {
  address: sUSDC_TOKEN_ADDRESS,
  abi: SUSDC.abi,
};

export const DAO_TOKEN_CONTRACT = {
  address: DAO_TOKEN_ADDRESS,
  abi: StableBank.abi,
};

export const CROWDFUND_FACTORY_CONTRACT = {
  address: CROWDFUND_FACTORY_ADDRESS,
  abi: CrowdFundFactory.abi,
};
