
import './index.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Hola, bienvenidos a mi e-commerce"}/>
    </>
  )
}

export default App
