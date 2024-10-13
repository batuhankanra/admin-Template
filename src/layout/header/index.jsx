import  { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import user1 from '../../assets/user/user2.jpg'

export default function Header() {
  const [cart,setCart]=useState(false)
  const [user,setUser]=useState(false)
  const handleUser=()=>{
    if(cart===true){
      setCart(false)
    }
    setUser(!user)
  }
  const notificationHandle=()=>{
    if(user===true){
      setUser(false)
    }
    setCart(!cart)
  }
  return (
    <header className="bg-primary text-third sticky top-0 p-3  border-b-2 shadow-inner">
     <div className='flex items-center justify-between container mx-auto'>
      {/*Search section */}
      <div className='relative flex items-center  group '>
        <input type="text" placeholder='biseyler ara' className='bg-secondary rounded-md outline-none border border-primary p-1 text-black focus:border-blue-500'/>
        <FaSearch className='absolute top-1/4 right-2 group-focus:text-black' />
      </div>
        <div className='flex items-center gap-x-4'>
          <div className='flex items-center relative'>
            <button onClick={notificationHandle}>
            <IoMdNotifications  className='hover:text-white text-xl' />
            </button>
            {cart===true && (
              <div className='absolute top-11   flex-col items-center -left-20'>
                <div className='w-52   shadow-md flex bg-zinc-300 rounded-t-md '>
                  <div className="w-full">sa</div>
                </div>
            
            </div>
            )}
          </div>
          <div className='flex items-center relative'>
            <button onClick={handleUser}><FaUser  className='hover:text-white text-xl' /></button>
            {user===true && (
              <div className='absolute top-11   flex-col items-center -left-20'>
                <div className='w-48   shadow-md flex bg-zinc-300 rounded-t-md '>
                  <img src={user1} className='w-16 h-16 p-2 rounded-full ' alt="" />
                  <div className='flex flex-col text-nowrap pt-3'>
                    <h1 className='text-lg  font-semibold'>Batuhan Kanra</h1>
                    <p className='text-sm text-gray-500'>Super Admin</p>
                  </div>
                </div>
                <div className='flex flex-col  gap-y-1 pt-2 bg-zinc-200 rounded-b-md'>
                  <button className='hover:text-black transition-colors duration-100 w-full text-center p-1 '>Profil Duzenle</button>
                  <button className='hover:text-black transition-colors duration-100 w-full text-center p-1 '>Filmlerim </button>
                  <button className='hover:text-black transition-colors duration-100 w-full text-center p-1 '>bildirimlerim</button>
                  <div className='bg-zinc-300 p-[0.5px] w-full'></div>
                  <button className='hover:text-black transition-colors duration-100 w-full text-center p-1 '> Cikis Yap</button>
                  
                </div>
              </div>
            )}
          </div>

          
          

      </div>
     </div>
     
    </header>
  )
}
