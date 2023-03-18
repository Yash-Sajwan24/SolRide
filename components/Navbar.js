import Image from 'next/image'
import avatar from '../temp/avatar.jpg'
import { BsPerson } from 'react-icons/bs'
import { useContext } from 'react'
import { SolWagContext } from '../context/solWagContext'
import SolWagLogo from '../assets/SolWagLogo.png'



const style = {
  wrapper: `md:h-full px-32 md:w-52 h-16 bg-primary text-white flex md:justify-around items-center px-4 fixed z-20 md:flex-col text-sm bg-[#251749]`,
  leftMenu: `gap-4 md:flex-col justify-center flex`,
  logo: `md:text-3xl flex cursor-pointer bg-gradient-to-r from-[#D900FA] via-[#00DBFD] to-[#00FF9D] text-transparent bg-clip-text w-full font-bold text-left ml-2`,
  menuItem: `md:text-lg text-sm text-white font-medium flex items-center my-4 cursor-pointer hover:text-slate-500 connect`,
  rightMenu: `flex gap-3 items-center md:flex-col w-52`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
  logoContainer: `flex items-center `
}

const Navbar = () => {
  const { currentAccount, connectWallet, currentUser, setRide, setOffer, offer } = useContext(SolWagContext)

  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
      {/* <Image src={SolWagLogo} height={30} width={30} /> */}
        <div className={style.logoContainer}>
          <div className="sol-logo">SolRide</div>
        </div>
        <div className="leftopt" onClick={()=>{setOffer('hidden'); setRide('block'); console.log(offer)}}>Ride Pool</div>
        <div className="leftopt" onClick={()=>{setOffer('block'); setRide('hidden')}}>Offer Pool</div>
        <div className={`leftopt md:block hidden`}><a href="https://docs.google.com/document/d/1zsikHSiVQscm2C_g5148DYDx7WeUF6isvKnBppvdzWg/edit?usp=sharing" target="blank" rel="noreferrer">White Paper</a></div>
      </div>
      <div className={`${style.rightMenu} md:block hidden`}>
        {/* <div className={style.menuItem}></div> */}
        <div className="connect">Wallet connected</div>
        <div className={style.userImageContainer}>
          {/* <Image
            className={style.userImage}
            src={avatar}
            width={40}
            height={40}
          /> */}
        </div>
        {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className="login" onClick={() => connectWallet()}>
            {/* <BsPerson /> */}
            <span className="login2">Log in</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
