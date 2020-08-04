import React, { useState } from 'react'
import TriggersList from './TriggersList'
import ActionsList from './ActionsList'
import ConditionsList from './ConditionsList'

const TABS = {
  triggers: {
    name: 'Triggers',
    Component: TriggersList
  },
  actions: {
    name: 'Actions',
    Component: ActionsList
  },
  conditions: {
    name: 'Conditions',
    Component: ConditionsList
  }
}

export default function(props) {
  const [activeTab, setActiveTab] = useState('triggers')

  return (
    <>
      <div id="subnav">
        {Object.entries(TABS).map(([key, { name }]) => (
          <div
            key={key}
            id={key}
            className={`${activeTab === key ? 'navactive' : 'navdisabled'} side`}
            onClick={() =>
              { setActiveTab(key)}}
          >
            {name}
          </div>
        ))}
      </div>
      <div id="blocklist">{React.createElement(TABS[activeTab].Component)}</div>
    </>
  )
}
