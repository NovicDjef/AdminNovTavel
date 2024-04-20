import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBellFill, BsCarFrontFill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsGrid1X2Fill, BsPeopleFill, BsFillHeartFill, BsFillSignStopFill } from 'react-icons/bs'
import { BiRestaurant } from 'react-icons/bi'

export default function Sidebar({openSideBarToggle, OpenSideBar}) {
  return (
    <aside id='sidebar' className={openSideBarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BiRestaurant className='icon_header'/> FoodTech Admin
            </div>
            <span className='icon close_icon' onClick={OpenSideBar}>X</span>
        </div>
        <ul className='sidebar-list'>
             <li className='sidebar-list-item'>
                <Link to="/dashboard">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/commande">
                    <BsFillArchiveFill className='icon'/> Commandes
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/users">
                    <BsPeopleFill className='icon'/> Utilisateurs 
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/restaurant">
                    <BsFillGrid3X3GapFill className='icon'/> Restaurants
                </Link>
            </li>
           
            <li className='sidebar-list-item'>
                <Link to="/repas">
                    <BsFillBellFill className='icon'/> Repas
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/aide">
                    <BsFillHeartFill className='icon'/> Aide
                </Link>
            </li>
        </ul>
        <ul className='sidebar-list-bottom'>
        <li className='sidebar-list-item-bottom'>
                <Link to="/deconection">
                    <BsFillSignStopFill className='icon'/> Deconection
                </Link>
            </li>
        </ul>
    </aside>
  )
}
