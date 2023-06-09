import Carousel from "../components/Carousel.jsx"
import Welcome from "../components/Welcome.jsx"

export default function Index({data}) {
  return (
    <>
    <Welcome/>
		<Carousel name={data[0].title} character_photo={data[0].character_photo} cover_photo={data[0].cover_photo} 
		description={data[0].description} />,
    </>
            
  )
}