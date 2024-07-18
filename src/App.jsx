import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'
import { Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path= '/' element={<View/>}></Route>   
      <Route path= '/add' element={<Add/>}></Route>
      <Route path= '/' element={<View/>}></Route>
      
      </Routes>
    </>
  )
}

export default App
