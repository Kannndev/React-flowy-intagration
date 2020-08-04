import React from 'react'
import Block from './Block'
import images from '../images'
import {conditionList} from './workflow.config';

function ConditionsList(props) {
  return (
    <>
    {conditionList.map(condition => 
    <Block icon={images['./eye.svg']} title={condition.title} description={condition.description} value={condition.id} />)}
  </>
  )
}

export default ConditionsList
