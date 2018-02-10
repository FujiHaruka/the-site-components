/**
 * TheDestroyDialog component
 */
'use strict'

import React from 'react'
import { TheConfirmDialog, TheOkDialog } from 'the-components'

function TheDestroyDialog ({
                             active,
                             done,
                             entities,
                             l,
                             lead,
                             onClose,
                             onSubmit,
                             renderItem = (entity) => entity.name,
                             spinning,
                             title,
                           }) {
  if (!active) {
    return null
  }
  if (done) {
    return null
  }
  return (
    <TheConfirmDialog checkText={l('checks.SURE_TO_DESTROY')}
                      present
                      submitText={l('buttons.DO_DESTROY')}
                      {...{
                        lead,
                        onClose,
                        onSubmit,
                        spinning,
                        title,
                      }}
    >
      <ul>
        {entities.map((entity) => (
          <li key={entity.id}>{renderItem(entity)}</li>
        ))}
      </ul>
    </TheConfirmDialog>
  )
}

export default TheDestroyDialog
