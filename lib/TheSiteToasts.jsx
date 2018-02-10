/**
 * Toasts component
 */
'use strict'

import React from 'react'
import { TheToast, TheToastGroup } from 'the-components'

function TheSiteToasts ({
                          duration,
                          error,
                          info,
                          onReset,
                          warn,
                        }) {
  return (
    <TheToastGroup>
      <TheToast.Info clearAfter={duration} messages={info} onUpdate={onReset}/>
      <TheToast.Warn clearAfter={duration} messages={warn} onUpdate={onReset}/>
      <TheToast.Error clearAfter={duration} messages={error} onUpdate={onReset}/>
    </TheToastGroup>
  )
}

export default TheSiteToasts
