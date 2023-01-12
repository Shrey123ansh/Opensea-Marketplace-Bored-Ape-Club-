import Header from '../../components/Header'
import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
import NFTImage from '../../components/nft/NFTImage'
import GeneralDetails from '../../components/nft/GeneralDetails'
import ItemActivity from '../../components/nft/ItemActivity'
import Purchase from '../../components/nft/Purchase'

const style = {
    wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
    container: `container p-6`,
    topContent: `flex`,
    nftImgContainer: `flex-1 mr-4`,
    detailsContainer: `flex-[2] ml-4`,
  }
  
  const NftId = () => {
    const { provider } = useWeb3()
    const [selectedNft, setSelectedNft] = useState()
    const [listings, setListings] = useState([])
    const router = useRouter()
  
    const nftModule = useMemo(() => {
      if (!provider) return
  
      const sdk = new ThirdwebSDK(
        provider.getSigner(),
        'https://eth-goerli.g.alchemy.com/v2/5Qnk0lstR1dxr4yqP-ZHslx-fHLhHOJy'
      )
      return sdk.getNFTModule('0x4F94f8FF69F6366f432f261Ef1324a3078E14181')
    }, [provider])
  
    // get all NFTs in the collection
    useEffect(() => {
      if (!nftModule) return
      ;(async () => {
        const nfts = await nftModule.getAll()
  
        const selectedNftItem = nfts.find((nft) => nft.id === router.query.nftId)
  
        setSelectedNft(selectedNftItem)
      })()
    }, [nftModule])
  
    const marketPlaceModule = useMemo(() => {
      if (!provider) return
  
      const sdk = new ThirdwebSDK(
        provider.getSigner(),
        'https://eth-goerli.g.alchemy.com/v2/5Qnk0lstR1dxr4yqP-ZHslx-fHLhHOJy'
      )
  
      return sdk.getMarketplaceModule(
        '0x6788921aCBC464434A08e3b37e6bCab02d7b4b1f'
      )
    }, [provider])
  
    useEffect(() => {
      if (!marketPlaceModule) return
      ;(async () => {
        setListings(await marketPlaceModule.getAllListings())
      })()
    }, [marketPlaceModule])
    

    return(
        <div>
      <Header />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTImage selectedNft={selectedNft} />
            </div>
            <div className={style.detailsContainer}>
              <GeneralDetails selectedNft={selectedNft} />
               <Purchase
                isListed={router.query.isListed}
                selectedNft={selectedNft}
                listings={listings}
                marketPlaceModule={marketPlaceModule}
              />
            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
    </div>
    )
  }
  
export default NftId
  