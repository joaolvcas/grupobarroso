import Header from './Components/Header/header'
import Catalogo from './Components/Catalogo'
import './App.css'

import { GlobalProvider } from "./context/GlobalContext";


function App() {

  return (
    <GlobalProvider>
      <Header />
      <Catalogo />
    </GlobalProvider>
  )
}

export default App
