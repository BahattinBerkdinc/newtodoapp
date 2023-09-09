import React from 'react'
import { Outlet } from 'react-router-dom'
import "./commonlayout.scss"

const CommonLayout = () => {
  return (
    <div className='common-layout'>
      <Outlet/>
    </div>
  )
}

export default CommonLayout
