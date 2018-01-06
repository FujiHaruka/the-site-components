/**
 * TheUserImage component
 */
'use strict'

import React from 'react'
import c from 'classnames'
import { TheImage } from 'the-components'

function TheUserImage ({
                         className,
                         user,
                         size = 48
                       }) {
  if (!user) {
    return null
  }
  const {displayImage, displayName} = user
  if (!displayImage) {
    return null
  }
  return (
    <TheImage className={c(className)}
              alt={displayName}
              width={size}
              height={size}
              src={displayImage}
              scale={'fit'}
    />
  )
}

export default TheUserImage
