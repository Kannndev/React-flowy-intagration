import React from 'react'
import BlockList from './BlockList'
import images from '../images'

export default function({ open, onToggle }) {
  return (
    <>
      <div id="leftcard" className={open ? 'expanded' : ''}>
        <p id="header">Blocks</p>
        <div id="search">
          <img src={images['./search.svg']} alt="search"/>
          <input type="text" placeholder="Search blocks" />
        </div>
        <BlockList />
      </div>
    </>
  )
}
