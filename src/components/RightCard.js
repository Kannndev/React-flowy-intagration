import React from 'react'
import images from '../images'

export default function({ open, onRemove, onClose }) {
  return (
    <>
      <div id="properties" className={open ? 'expanded' : ''}>
        <div className="right-block-overlay"></div>
        <div className="right-block-action-container">
        <div id="close" onClick={onClose}>
          <img src={images['./close.svg']} />
        </div>
        <p id="header2">Properties</p>
        <div id="propswitch">
          <div id="dataprop">Data</div>
          <div id="alertprop">Alerts</div>
          <div id="logsprop">Logs</div>
        </div>
        <div id="proplist">
          <p className="inputlabel">Select database</p>
          <div className="dropme">
            Database 1 <img src={images['./dropdown.svg']} />
          </div>
          <p className="inputlabel">Check properties</p>
          <div className="dropme">
            All
            <img src={images['./dropdown.svg']} />
          </div>
          <div className="checkus">
            <img src={images['./checkon.svg']} />
            <p>Log on successful performance</p>
          </div>
          <div className="checkus">
            <img src={images['./checkoff.svg']} />
            <p>Give priority to this block</p>
          </div>
        </div>
        <div id="removeblock" onClick={onRemove}>
          Delete blocks
        </div>
        </div>
      </div>
    </>
  )
}
