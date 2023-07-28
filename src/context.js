import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'
import { toBeRequired } from '@testing-library/jest-dom/matchers'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  //open Side bar
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  //  close Side bar
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  //open modal
  const openSubmenu = () => {
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
        closeSidebar
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
