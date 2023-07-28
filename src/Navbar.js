import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

import { useGLobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGLobalContext()
  const displaySubmenu = e => {
    // console.log(e.target)
    const page = e.target.textContext
    const tempBtn = e.target.getBoundingClientReact()
//this  is   formular to get  the middle of  the Btn Object  of  the
const center =(tempBtn.left + tempBtn.right)/2
    openSubmenu()
  }

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='stripe' />

          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>

          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>

          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>

        <button className='btn signin-btn'>Sign in </button>
      </div>
    </nav>
  )
}

export default Navbar
