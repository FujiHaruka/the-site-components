/**
 * TheSearchForm component
 */
'use strict'

import c from 'classnames'
import React from 'react'
import { TheButton, TheForm, TheInput } from 'the-components'

function TheSearchForm ({
                          autoFocus = false,
                          className,
                          getFormAttributes,
                          getInputAttributesOf,
                          getSubmitAttributes,
                          l,
                          name = 'q',
                          onSubmit,
                          placeholder,
                        }) {
  return (
    <TheForm className={c(className)}
             inline
             {...getFormAttributes()}
             autoComplete='off'
             required={[name]}
    >
      <TheInput.Text {...getInputAttributesOf(name)}
                     autoFocus={autoFocus}
                     onEnter={onSubmit}
                     placeholder={placeholder}
      />
      <TheButton primary {...getSubmitAttributes()}>
        {l('buttons.DO_SEARCH')}
      </TheButton>
    </TheForm>
  )
}

export default TheSearchForm
