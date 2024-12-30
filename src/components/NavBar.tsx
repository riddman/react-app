import React from 'react'

interface Props {
    customersCount: number
}

const NavBar = ({ customersCount }:Props) => {
  return (
    <div>NavBar: {customersCount}</div>
  )
}

export default NavBar