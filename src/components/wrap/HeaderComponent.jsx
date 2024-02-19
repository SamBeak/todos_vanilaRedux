import React from 'react'
import { Outlet } from 'react-router-dom'

export default function HeaderComponent() {
  return (
    <>
        <div>HeaderComponent</div>
    <Outlet />
    </>
  )
}
