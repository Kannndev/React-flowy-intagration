import React from 'react'
import Block from './Block'
import images from '../images'

function TriggersList(props) {
  return (
    <>
      <Block icon={images['./eye.svg']} title="New visitor" description="Triggers when somebody visits a specified page" value={1} />
      <Block
        icon={images['./action.svg']}
        title="Action is performed"
        description="Triggers when somebody performs a specified action"
        value={2}
      />
      <Block icon={images['./time.svg']} title="Time has passed" description="Triggers after a specified amount of time" value={3} />
      <Block icon={images['./error.svg']} title="Error prompt" description="Triggers when a specified error happens" value={4} />
    </>
  )
}

export default TriggersList
