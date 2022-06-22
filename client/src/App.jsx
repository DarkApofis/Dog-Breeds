import MainContainer from "./containers/MainContainer"
import { GlobalStyle } from "./styles/GlobalStyles"
import {Routes, Route} from 'react-router-dom'
import CardDetails from "./components/CardDetails"
import CreateBreed from "./components/CreateBreed"
import FirstPage from "./components/FirstPage"
import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_APP_API || "http://localhost:3001"

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path='/home' element={<MainContainer/> }/>
        <Route path='/create' element={<CreateBreed/>}/>
        <Route path='/breeds/:breedId' element={<CardDetails/>}/>
        <Route path='*' element={<h1>Ups</h1>}/>
      </Routes>
    </div>
  )
}

export default App
