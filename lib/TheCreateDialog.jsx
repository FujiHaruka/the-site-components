/**
 * UserCreateDialog component
 */
'use strict'

import React from 'react'
import { TheDialog, TheInfo, TheOkDialog } from 'the-components'

function TheCreateDialog ({
                            active,
                            children,
                            done,
                            doneTitle = title,
                            l,
                            onClose,
                            result,
                            spinning,
                            title,
                          }) {
  if (!active) {
    return null
  }
  if (done) {
    return (
      <TheOkDialog hideCloseButton
                   present
                   title={doneTitle}
                   {...{onClose, spinning}}
      >
        <TheInfo data={result}
        />
      </TheOkDialog>
    )
  }
  return (
    <TheDialog
      present
      title={title}
      {...{onClose, spinning}}
    >
      {children}
    </TheDialog>
  )
}

export default TheCreateDialog
