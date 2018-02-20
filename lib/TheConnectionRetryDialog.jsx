/**
 * ConnectionRetryDialog component
 */
'use strict'

import React from 'react'
import { TheButton, TheButtonGroup, TheDialog, TheIcon } from 'the-components'

function TheConnectionRetryDialog ({
                                         active,
                                         busy,
                                         l,
                                         onReload,
                                         reloadIcon = null,
                                         warningIcon = null,
                                       }) {
  return (
    <TheDialog lead={l('messages.CONNECTION_SEEMS_TO_BE_LOST')}
               present={active}
               spinning={busy}
               title={(
                 <span><TheIcon className={warningIcon}/>{l('titles.CONNECTION_RETRY_TITLE')}</span>
               )}
    >

      <br/>
      <TheButtonGroup>
        <TheButton icon={reloadIcon}
                   onClick={onReload}
        >
          {l('buttons.DO_RELOAD')}
        </TheButton>
      </TheButtonGroup>
    </TheDialog>
  )
}

export default TheConnectionRetryDialog
