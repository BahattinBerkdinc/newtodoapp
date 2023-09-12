import React from 'react'
import { Outlet } from 'react-router-dom'
import "./commonlayout.scss"
import { Col, Container, Row } from 'react-bootstrap'

const CommonLayout = () => {
  return (
    <div className='common-layout'>
      <Outlet />
    </div>
  )
}

export default CommonLayout
