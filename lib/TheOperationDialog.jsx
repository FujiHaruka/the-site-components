/**
 * UserPasswordDialog component
 */
'use strict'

import React from 'react'
import {
  TheOkDialog,
  TheYesNoDialog,
  TheInfo,
} from 'the-components'

function TheOperationDialog ({
                               l,
                               active,
                               done,
                               spinning,
                               onClose,
                               onYes,
                               title,
                               lead,
                               doneTitle,
                               doneLead,
                               result,
                               entities,
                               renderItem = ({name}) => name,
                             }) {
  if (!active) {
    return null
  }
  if (done) {
    return (
      <TheOkDialog
        present
        title={doneTitle}
        lead={doneLead}
        hideCloseButton
        onClose={onClose}
      >
        <TheInfo data={result}/>
      </TheOkDialog>
    )
  }
  return (
    <TheYesNoDialog present
                    title={title}
                    yesText={l('buttons.DO_EXECUTE')}
                    noText={l('buttons.DO_CANCEL')}
                    lead={lead}
                    spinning={spinning}
                    onNo={onClose}
                    onClose={onClose}
                    onYes={onYes}
    >
      <ul>
        {
          entities.map((entity) => (
            <li key={entity.id}>{renderItem(entity)}</li>
          ))
        }
      </ul>
    </TheYesNoDialog>
  )
}

export default TheOperationDialog