import React from 'react'
import images from '../images'

export default function({ title, description, onSave }) {
  return (
    <>
      <div id="navigation">
        <div id="leftside">
          <div id="details">
            <div id="back">
              <img src={images['./arrow.svg']} />
            </div>
            <div id="names">
              <p id="title">{title}</p>
              <p id="subtitle">{description}</p>
            </div>
          </div>
        </div>
        <div id="centerswitch">
        </div>
        <div id="buttonsright">
          <div id="discard">Discard</div>
          <div id="publish" onClick={onSave}>Publish to site</div>
        </div>
      </div>
    </>
  )
}
