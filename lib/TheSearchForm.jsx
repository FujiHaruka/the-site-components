/**
 * TheSearchForm component
 */
'use strict'

import React from 'react'
import c from 'classnames'
import { TheForm, TheInput, TheButton } from 'the-components'

function TheSearchForm ({
                          l,
                          className,
                          name = 'q',
                          placeholder,
                          onSubmit,
                          getInputAttributesOf,
                          getFormAttributes,
                          getSubmitAttributes
                        }) {
  return (
    <TheForm className={c(className)}
             inline
             {...getFormAttributes()}
             required={[name]}
             autoComplete='off'
    >
      <TheInput.Text {...getInputAttributesOf(name)}
                     placeholder={placeholder}
                     onEnter={onSubmit}
      />
      <TheButton primary {...getSubmitAttributes()}>
        {l('buttons.DO_SEARCH')}
      </TheButton>
    </TheForm>
  )
}

export default TheSearchForm
