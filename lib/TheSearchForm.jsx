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
                          formPropsOf,
                          inputPropsOfOf,
                          submitPropsOf,
                          l,
                          name = 'q',
                          onSubmit,
                          placeholder,
                        }) {
  return (
    <TheForm className={c(className)}
             inline
             {...formPropsOf()}
             autoComplete='off'
             required={[name]}
    >
      <TheInput.Text {...inputPropsOfOf(name)}
                     autoFocus={autoFocus}
                     onEnter={onSubmit}
                     placeholder={placeholder}
      />
      <TheButton primary {...submitPropsOf()}>
        {l('buttons.DO_SEARCH')}
      </TheButton>
    </TheForm>
  )
}

export default TheSearchForm
