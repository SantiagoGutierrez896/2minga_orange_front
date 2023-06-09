import { useState } from "react"
import Display from "./Display"
import menu from "../assets/images/menu.svg"
import logo from "../assets/images/Logo.png"

export default function NavBar() {

  const [show,setShow] = useState(false)

  let options = [
    {title: 'Home'}, 
    {title: 'Comics'},
    {title: 'My Comics'},
    {title: 'Favorites'},
    {title: 'Logout'}
]

  return (
    <>
        {show && <Display options={options} show={show} setShow={setShow} /> }       
        <nav className='flex w-full justify-between items-center px-5 h-20 absolute z-10 md:w-11/12 2xl:w-[1200px]'>
          <svg onClick={()=>setShow(!show)} className="h-14 p-1 text-[#FF5722] hover:text-orange bg-orange hover:bg-[#f1f5f9] rounded-lg "  viewBox="0 0 55 55" strokeWidth={1.5} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 16H37" stroke="#F97316" stroke-width="3" stroke-linecap="round"/>
              <path d="M11 27H37" stroke="#F97316" stroke-width="3" stroke-linecap="round"/>
              <path d="M11 39H37" stroke="#F97316" stroke-width="3" strokeLinecap="round"/>
          </svg>
          <img className='h-12 mt-2' src={logo} alt="logo" />
        </nav> 
   </>
    
  )
}

