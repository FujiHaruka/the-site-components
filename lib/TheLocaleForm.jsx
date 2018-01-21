'use strict'

import React from 'react'
import c from 'classnames'
import { TheInput, TheForm, TheIcon } from 'the-components'

function TheLocaleForm ({
                          className,
                          getFormAttributes,
                          getInputAttributesOf,
                          name = 'locale',
                          icon = 'fas fa-globe',
                          value,
                          options,
                        }) {
  return (
    <TheForm inline
             {...getFormAttributes()}
             className={c(className)}
    >
      <TheInput.Select {...getInputAttributesOf(name)}
                       {...{value}}
                       options={Object.assign({},
                         ...Object.keys(options).map((name) => ({
                           [name]: (
                             <span style={{whiteSpace: 'nowrap'}}>
                               <TheIcon className={icon}/>{options[name]}
                             </span>
                           )
                         }))
                       )}
      />
    </TheForm>
  )
}

export default TheLocaleForm