import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'
import { toBeRequired } from '@testing-library/jest-dom/matchers'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })

  //open Side bar
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  //  close Side bar
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  //open modal
  const openSubmenu = (text, coordinates) => {
    //get  the correct Page when  you  open submenu, if  page  is  equal to  the page coming from my data set it  to  the page
    const page = sublinks.find(link => link.page === text)

    setPage(page)
    //for  the location  of  the Submenu
    setLocation(coordinates)
    setIsSubmenuOpen(true)
  }

  //close  modal
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

//Custom Hook for AppContext
export const useGLobalContext = () => {
  return useContext(AppContext)
}
