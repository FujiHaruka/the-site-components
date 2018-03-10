/**
 * TheUserImage component
 */
'use strict'

import c from 'classnames'
import React from 'react'
import { TheImage } from 'the-components'

function TheUserImage ({
                         altImage,
                         className,
                         size = 48,
                         user,
                       }) {
  if (!user) {
    return null
  }
  const {displayImage, displayName} = user
  if (!displayImage) {
    return null
  }
  return (
    <TheImage alt={displayName}
              className={c(className)}
              height={size}
              scale='fit'
              src={displayImage || altImage}
              width={size}
    />
  )
}

export default TheUserImage
