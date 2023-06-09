

import logo2 from "../assets/images/LogoDos.png"
import narutofooter from "../assets/images/narutofooter.png"


export default function Footer() {
  return (
    <footer className='flex flex-col w-full justify-between items-center pb-5 bg-white'>
    <img className='object-cover hidden w-full h-60 rounded-[0px_0px_50%_50%]
    md:flex' src={narutofooter}/>
    <div className='flex flex-col items-center px-5 w-full
    md:w-11/12 md:flex-row md:justify-between '>
        <div className='flex justify-evenly items-center mt-2'>
            <a className='mr-10 text-xl' href="">Home</a>
            <a className='text-xl' href="">Mangas</a>
        </div>
        <img className='my-6 w-20' src={logo2}/>
        <div className='flex flex-col items-center mt-2'>
            <div className='flex w-full justify-evenly'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-1" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-1" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-1" fill="currentColor" viewBox="0 0 16 16"><path d="M15.992 4.204c-.071 1.556-1.158 3.687-3.262 6.393-2.175 2.829-4.016 4.243-5.522 4.243-.933 0-1.722-.861-2.367-2.583L3.55 7.523C3.07 5.8 2.556 4.94 2.007 4.94c-.118 0-.537.253-1.254.754L0 4.724a209.56 209.56 0 0 0 2.334-2.081c1.054-.91 1.845-1.388 2.373-1.437 1.243-.123 2.01.728 2.298 2.553.31 1.968.526 3.19.646 3.666.36 1.631.756 2.446 1.186 2.445.334 0 .836-.53 1.508-1.587.671-1.058 1.03-1.863 1.077-2.415.096-.913-.263-1.37-1.077-1.37a3.022 3.022 0 0 0-1.185.261c.789-2.573 2.291-3.825 4.508-3.756 1.644.05 2.419 1.117 2.324 3.2z"/></svg>							<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-1" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
            </div>
            <button className="border-none bg-gradient-to-r from-[#ea580c] to-[#ea580c] w-full p-2 justify-center text-xl text-white mt-2 rounded-lg">Donate ♡</button>
        </div>
    </div>
</footer>
  )
}
