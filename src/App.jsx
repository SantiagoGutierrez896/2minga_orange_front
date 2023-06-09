import Main from './layouts/Main'
import Index from './pages'
import imagenMain from "./assets/images/Images+Rectangle.svg"

function App() {
	let data = [
		{
			title: 'Shonen',
			character_photo: './src/assets/images/personaje.png',
			cover_photo: './src/assets/images/card.png',
			description: 'Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.'
		}
	]

  return (
    <>
      <div className='relative flex flex-col items-center w-full h-full' >
        <img className='w-full h-full p-0' src={imagenMain} alt="image" />
		
		<Main>
			<Index data={data} />
		</Main>
		
      </div>

    </>
  )
}

export default App