import { BsFillCartFill } from 'react-icons/bs'
import eth from '../assets/eth.png'
import Image from 'next/image'

const style = {
  Item: `flex px-4 py-5 font-medium`,
  event: `flex items-center`,
  eventIcon: `mr-2 text-xl`,
  eventName: `text-lg font-semibold`,
  eventPrice: `flex items-center`,
  eventPriceValue: `text-lg`,
  ethLogo: `h-5 mr-2`,
  accent: `text-[#2081e2]`,
}

const EventItem = ({ event }) => {
  return (
    <div className={style.Item}>
      <div className={`${style.event} flex-[2]`}>
        <div className={style.eventIcon}>
          <BsFillCartFill />
        </div>
        <div className={style.eventName}>Sale</div>
      </div>
      <div className={`${style.eventPrice} flex-[2]`}>
        {/* <img
          src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
          alt="eth"
          className={style.ethLogo}
        /> */}
        <Image src={eth} height={15} width={15} />

        <div className={style.eventPriceValue}>{event.price}</div>
      </div>
      <div className={`${style.accent} flex-[3]`}>{event.from}</div>
      <div className={`${style.accent} flex-[3]`}>{event.to}</div>
      <div className={`${style.accent} flex-[2]`}>{event.date}</div>
    </div>
  )
}

export default EventItem