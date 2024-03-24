import React from 'react'
import { BsFillBellFill, BsCarFrontFill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsGrid1X2Fill, BsPeopleFill, BsFillHeartFill, BsFillSignStopFill } from 'react-icons/bs'

export default function Sidebar({openSideBarToggle, OpenSideBar}) {
  return (
    <aside id='sidebar' className={openSideBarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCarFrontFill className='icon_header'/> NovTravel
            </div>
            <span className='icon close_icon' onClick={OpenSideBar}>X</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Agences Voyages
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Destinations
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Utilisateurs
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillBellFill className='icon'/> Transactions
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillHeartFill className='icon'/> Aide
                </a>
            </li>
        </ul>
        <ul className='sidebar-list-bottom'>
        <li className='sidebar-list-item-bottom'>
                <a href="">
                    <BsFillSignStopFill className='icon'/> Deconection
                </a>
            </li>
        </ul>
    </aside>
  )
}
