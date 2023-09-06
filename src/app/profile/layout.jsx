import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      <h1 className='mainheading text-8xl font-semibold my-5 mx-0'>
        Our Works 
      </h1>
      {children}
    </div>
  )
}

export default Layout