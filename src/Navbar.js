import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

import { useGLobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGLobalContext()

  const displaySubmenu = e => {
    // console.log(e.target)
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()

    // console.log(tempBtn)
    //this  is   formular to get  the middle of  the Btn Object OR simply  put, center  of  the Button
    const center = (tempBtn.left + tempBtn.right) / 2

    //this is Going to Give  the bottom   value,  lift it three  pixels up
    const bottom = tempBtn.bottom - 3

    openSubmenu(page, { center, bottom })
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
