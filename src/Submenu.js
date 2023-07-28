import React, { useState, useRef, useEffect } from 'react'

import { useGLobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen } = useGLobalContext()

  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'} `}>
      submenu
    </aside>
  )
}

export default Submenu
