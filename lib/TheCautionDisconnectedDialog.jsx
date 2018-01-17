/**
 * CautionDisconnectedDialog component
 */
'use strict'

import React from 'react'
import { TheDialog, TheButton, TheButtonGroup, TheIcon } from 'the-components'

function TheCautionDisconnectedDialog ({
                                         l,
                                         active,
                                         busy,
                                         warningIcon = null,
                                         reloadIcon = null,
                                         onReload
                                       }) {
  return (
    <TheDialog present={active}
               spinning={busy}
               title={(
                 <span><TheIcon className={warningIcon}/>{l('titles.CAUTION_DISCONNECTED_TITLE')}</span>
               )}
               lead={l('messages.CONNECTION_SEEMS_TO_BE_LOST')}
    >

      <br/>
      <TheButtonGroup>
        <TheButton onClick={onReload}
                   icon={reloadIcon}
        >
          {l('buttons.DO_RELOAD')}
        </TheButton>
      </TheButtonGroup>
    </TheDialog>
  )
}

export default TheCautionDisconnectedDialog