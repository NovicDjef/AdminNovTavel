
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import { useState } from 'react'

function App() {

  const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

  const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
  }
  return (
   <div className='grid-container'>
      <Header  OpenSideBar={OpenSideBar}/>
      <Sidebar  openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar}/>
      <Home />
   </div>
  )
}

export default App
