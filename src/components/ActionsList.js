import React from 'react'
import Block from './Block'
import images from '../images'

function ActionsList(props) {
  return (
    <>
      <Block icon={images['./database.svg']} title="New database entry" description="Adds a new entry to a specified database" value={5} />
      <Block
        icon={images['./database.svg']}
        title="Update database"
        description="Edits and deletes database entries and properties"
        value={6}
      />
      <Block icon={images['./action.svg']} title="Perform an action" description="Performs or edits a specified action" value={7}/>
      <Block icon={images['./twitter.svg']} title="Make a tweet" description="Makes a tweet with a specified query" value={8} />
    </>
  )
}

export default ActionsList
