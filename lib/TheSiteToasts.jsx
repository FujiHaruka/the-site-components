/**
 * Toasts component
 */
'use strict'

import React from 'react'
import { TheToastGroup, TheToast } from 'the-components'

function TheSiteToasts ({
                          info,
                          warn,
                          error,
                          onReset,
                          duration,
                        }) {
  return (
    <TheToastGroup>
      <TheToast.Info onUpdate={onReset} messages={info} clearAfter={duration}/>
      <TheToast.Warn onUpdate={onReset} messages={warn} clearAfter={duration}/>
      <TheToast.Error onUpdate={onReset} messages={error} clearAfter={duration}/>
    </TheToastGroup>
  )
}

export default TheSiteToasts
