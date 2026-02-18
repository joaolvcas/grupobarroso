import Header from './Components/Header/header'
import Catalogo from './Components/Catalogo'
import Foot from './Components/Foot'
import './App.css'

import { GlobalProvider } from "./context/GlobalContext";


function App() {

  return (
    <GlobalProvider>
      <Header />
      <Catalogo />
      <Foot />
    </GlobalProvider>
  )
}

export default App
