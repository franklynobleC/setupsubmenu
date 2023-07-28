import React, { useState, useRef, useEffect } from 'react'

import { useGLobalContext } from './context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links }
  } = useGLobalContext()

  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')
  //use useEffect  to render change  location every time location changes

  //this is  show  a  sub menu component when  you hover around a  button,
  useEffect(() => {
    setColumns('col-2')

    const submenu = container.current

    console.log(submenu)
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if (links.length === 3) {
      setColumns('col-3')
    }

    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [location, links])
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'} `}
      ref={container}
    >
      <h4>{page}</h4>

      <div className={`isSubmenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link

          return (
            <a key={index} href={url}>
              {' '}
              {icon} {label} {url}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
