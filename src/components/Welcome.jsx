export default function Welcome() {
  return (
    <main className='grid grid-cols-1 gap-5 absolute  w-screen' >
    <div className='flex flex-col justify-center items-center flex-grow mt-5 mb-10 text-white w-full h-96 rounded-lg px-5 mx-auto bg-none 
            md:items-start md:bg-center md:bg-cover'>
                <h2 className='font-bold text-5x1 mb-1 text-center
                md:text-left
                xl:text-6xl'>For the love of manga</h2>
                <p className='text-2xl mb-1'>Explore our varieties</p>
                <p className='text-2xl hidden font-bold mb-2
                md:flex'>#MingaLove🧡</p>
                <button className="border-none bg-gradient-to-r from-[#fafafa] to-[#fafafa] w-40 p-2 justify-center text-xl text-orange-600	 rounded-lg">Sign In!</button>
            </div>             
    </main>
  )
}
