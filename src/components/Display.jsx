import logo from "../assets/images/Logo.png"
import profile from "../assets/images/profile_Lucas.png"

export default function Display({ options,show,setShow }) {

    let name = 'Lucas Ezequiel Silva'
    let email = 'lucasezequielsilva@gmail.com'

    return (
        <div className="absolute z-20 top-0 left-0 h-full w-full bg-gradient-to-r from-[#F97316] to-[#F97322] 
        md:w[500px] flex flex-col">
            <div className="w-11/12 my-1 p-2 flex justify-between items-center flex flex-col">
                <img className="h-14" src={profile} alt="Lucas" />
                <div className="w-full px-3 flex flex-col">
                    <span className="font-semibold text-gray-100">{name}</span>
                    <span className="font-semibold text-gray-100">{email}</span>    
                </div>
                <p onClick={()=>setShow(!show)} className="w-full my-1 p-1 pe-5 hover:bg-white text-end">X</p>
                {options?.map((each,index)=> <p key={index} className="w-11/12 my-1 p-1 ps-5 hover:bg-white"> {each.title} </p> )}
            </div>
             
            </div>
    )

}
