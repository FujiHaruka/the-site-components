/**
 * TheDestroyDialog component
 */
'use strict'

import React from 'react'
import { TheConfirmDialog, TheOkDialog, } from 'the-components'

function TheDestroyDialog ({
                             l,
                             title,
                             lead,
                             spinning,
                             onClose,
                             onSubmit,
                             active,
                             done,
                             entities,
                             renderItem = (entity) => entity.name,
                           }) {
  if (!active) {
    return null
  }
  if (done) {
    return null
  }
  return (
    <TheConfirmDialog present
                      checkText={l('checks.SURE_TO_DESTROY')}
                      submitText={l('buttons.DO_DESTROY')}
                      {...{
                        title,
                        lead,
                        onClose,
                        onSubmit,
                        spinning
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