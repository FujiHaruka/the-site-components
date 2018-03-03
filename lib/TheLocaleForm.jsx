'use strict'

import c from 'classnames'
import React from 'react'
import { TheForm, TheIcon, TheInput } from 'the-components'

function TheLocaleForm ({
                          className,
                          formPropsOf,
                          inputPropsOfOf,
                          icon = 'fas fa-globe',
                          name = 'locale',
                          options,
                          value,
                        }) {
  return (
    <TheForm inline
             {...formPropsOf()}
             className={c(className)}
    >
      <TheInput.Select {...inputPropsOfOf(name)}
                       {...{value}}
                       options={Object.assign({},
                         ...Object.keys(options).map((name) => ({
                           [name]: (
                             <span style={{whiteSpace: 'nowrap'}}>
                               <TheIcon className={icon}/>{options[name]}
                             </span>
                           ),
                         }))
                       )}
      />
    </TheForm>
  )
}

export default TheLocaleForm
