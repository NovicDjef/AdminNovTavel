import React from 'react'
import {BsFillBellFill, BsFillEnvelopeAtFill, BsPersonCircle, BsSearch, BsJustify} from "react-icons/bs"

export default function Header({OpenSideBar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify  className='icon' onClick={OpenSideBar}/>
        </div>
        <div className='header-left'>
            <BsSearch className='icon'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill  className='icon-header'/>
            <BsFillEnvelopeAtFill  className='icon-header'/>
            <BsPersonCircle  className='icon-header'/>
        </div>
      
    </header>
  )
}
