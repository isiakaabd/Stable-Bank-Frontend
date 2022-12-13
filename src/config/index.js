import DAO from "../utils/abi/DAO.json"
import SUSDC from "../utils/abi/SUSDC.json"
import USDCMinting from "../utils/abi/usdcMinting.json"

export const DAO_ADDRESS = "0x0c7C33686486A2e3a1f8E4F0c3F7584d0bf00dEC"
export const DAO_TOKEN_ADDRESS = "0x799A21ee3C1264e31382E50B95191f6A8A82868d"
export const sUSDC_TOKEN_ADDRESS = "0xC4D5D81271bc6a4585F248a5593f1B84030be584"
export const CROWDFUND_FACTORY_ADDRESS = "0x0c7C33686486A2e3a1f8E4F0c3F7584d0bf00dEC"
export const MINTING_CONTRACT_ADDRESS = "0x238908C108414b5db5A74655e487e1F0a16673Ff"
export const DAO_FUNDY_NFT_ADDRESS = "0x4d5D3ef4677De7638f109681C06893591749F7EE"


export const DAO_CONTRACT = {
    address: DAO_ADDRESS,
    abi: DAO.abi,
}

export const sUSDC_MINTING_CONTRACT = {
    address: MINTING_CONTRACT_ADDRESS,
    abi: USDCMinting.abi,
}

export const sUSDC_CONTRACT = {
    address: sUSDC_TOKEN_ADDRESS,
    abi: SUSDC.abi,
}


