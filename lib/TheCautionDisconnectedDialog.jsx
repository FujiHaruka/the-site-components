/**
 * CautionDisconnectedDialog component
 */
'use strict'

import React from 'react'
import { TheButton, TheButtonGroup, TheDialog, TheIcon } from 'the-components'

function TheCautionDisconnectedDialog ({
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
                 <span><TheIcon className={warningIcon}/>{l('titles.CAUTION_DISCONNECTED_TITLE')}</span>
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

export default TheCautionDisconnectedDialog
