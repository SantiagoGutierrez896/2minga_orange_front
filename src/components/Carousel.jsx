import {useEffect, useState} from "react"
import axios from "axios"
import apiUrl from "../apiUrl"
import Arrow from "./Arrow"

export default function Carousel({character_photo,cover_photo,name,description}) {
	const d_left = "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    const d_right = "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
	// let counter = 0
	const[categories,setCategories] = useState([])
	useEffect(
		()=> {
			axios(apiUrl+'/categories').then(res=>{
				// console.log(res)
				setCategories(res.data.response)
			}).catch(err=>console.log(err))
			
		},
		[]// si el array esta vacio el efecto se ejecuta por 1 unica vez cuando el componente se monta, 
		//si el array tiene algunas variables el efecto se va a ejecutar cada que se modifique el valor de esos parametros
	)
	const [counter,modify]=useState(0)
	const next =()=>{
		// counter= counter +1
		modify(counter+1)
		console.log(counter);
	}
	const prev =()=>{
		// counter= counter -1
		modify(counter-1)
		console.log(counter);
	}
	// console.log(categories)
  return (
    <div className='flex items-center justify-evenly bg-gradient-to-r from-[#ea580c] to-[#ea580c] rounded-lg mt-16 hidden px-5
				md:flex md:h-56'>
					
					<Arrow d={d_left} onClick={prev}/>
					<img className='h-64 self-end ' src={categories[counter]?.character_photo} />
					<img className='h-56 mb-12 sel-end' src={categories[counter]?.cover_photo} />
					<div className='text-l p-5 px-10 text-white
					sm:w-10/12
					xl:w-6/12'>
						<h3 className='text-2xl'>{categories[counter]?.name.toUpperCase()} </h3>
						<p className='text-xs
						xl:text-sm'>{categories[counter]?.description}</p>
					</div>
					
					<Arrow d={d_right} onClick={next} />
				</div>
  )
}