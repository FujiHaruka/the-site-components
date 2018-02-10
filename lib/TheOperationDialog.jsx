/**
 * UserPasswordDialog component
 */
'use strict'

import React from 'react'
import {
  TheInfo,
  TheOkDialog,
  TheYesNoDialog,
} from 'the-components'

function TheOperationDialog ({
                               active,
                               done,
                               doneLead,
                               doneTitle,
                               entities,
                               l,
                               lead,
                               onClose,
                               onYes,
                               renderItem = ({name}) => name,
                               result,
                               spinning,
                               title,
                             }) {
  if (!active) {
    return null
  }
  if (done) {
    return (
      <TheOkDialog
        hideCloseButton
        lead={doneLead}
        onClose={onClose}
        present
        title={doneTitle}
      >
        <TheInfo data={result}/>
      </TheOkDialog>
    )
  }
  return (
    <TheYesNoDialog lead={lead}
                    noText={l('buttons.DO_CANCEL')}
                    onClose={onClose}
                    onNo={onClose}
                    onYes={onYes}
                    present
                    spinning={spinning}
                    title={title}
                    yesText={l('buttons.DO_EXECUTE')}
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
