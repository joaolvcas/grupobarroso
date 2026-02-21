import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/header'
import Catalogo from './Components/Catalogo'
import Videos from './Components/Videos'
import Foot from './Components/Foot'
import './App.css'
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Catalogo />} />
         <Route path="/videos" element={<Videos />} />
      </Routes>

      <Foot />
    </GlobalProvider>
  )
}

export default App
