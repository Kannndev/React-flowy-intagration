import React from 'react'
import Block from './Block'
import images from '../images'
import {actionList} from './workflow.config';
function ActionsList(props) {
  return (
    <>
    {actionList.map(action => 
    <Block icon={images['./eye.svg']} title={action.title} description={action.description} value={action.id} />)}
  </>
  )
}

export default ActionsList
