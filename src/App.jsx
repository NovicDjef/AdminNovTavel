
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Users from './screens/pages/Users'
import Dashboard from './screens/pages/Dashboard'
import Commandes from './screens/pages/Commandes'
import Restaurants from './screens/pages/Restaurants'
import Repas from "./screens/pages/Repas"
import Aide from "./screens/pages/Aide"
import Deconection from "./screens/pages/Deconection"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

  const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
  }
  return (
    
   <div className='grid-container'>
        <Header  OpenSideBar={OpenSideBar}/>
        <Sidebar  openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar}/>
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/commande" Component={Commandes} />
          <Route path="/users" Component={Users} />
          <Route path="/restaurant" Component={Restaurants} />
          <Route path="/repas" Component={Repas} />
          <Route path="/aide" Component={Aide} />
          <Route path="/deconection" Component={Deconection} />
        </Routes>
      </div>
  )
}

export default App
