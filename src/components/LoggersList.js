import React from 'react'
import Block from './Block'
import images from '../images'

function LoggersList(props) {
  return (
    <>
      <Block icon={images['./log.svg']} title="Add new log entry" description="Adds a new log entry to this project" value={9} />
      <Block icon={images['./log.svg']} title="Update logs" description="Edits and deletes log entries in this project" value={10}/>
      <Block icon={images['./error.svg']} title="Prompt an error" description="Triggers a specified error" value={11}/>
    </>
  )
}

export default LoggersList
