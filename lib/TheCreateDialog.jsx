/**
 * UserCreateDialog component
 */
'use strict'

import React from 'react'
import { TheDialog, TheInfo, TheOkDialog } from 'the-components'

function TheCreateDialog ({
                            l,
                            active,
                            spinning,
                            done,
                            onClose,
                            title,
                            doneTitle = title,
                            cildren,
                            result
                          }) {
  if (!active) {
    return null
  }
  if (done) {
    return (
      <TheOkDialog present
                   title={doneTitle}
                   hideCloseButton
                   {...{spinning, onClose}}
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
      {...{spinning, onClose}}
    >
      {cildren}
    </TheDialog>
  )
}

export default TheCreateDialog