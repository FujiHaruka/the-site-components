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
                            children,
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
      {children}
    </TheDialog>
  )
}

export default TheCreateDialog