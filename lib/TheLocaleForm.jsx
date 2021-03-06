'use strict'

import c from 'classnames'
import React from 'react'
import { TheForm, TheIcon, TheInput } from 'the-components'

function TheLocaleForm ({
                          className,
                          formPropsOf,
                          icon = 'fas fa-globe',
                          inputPropsOf,
                          name = 'locale',
                          options,
                          value,
                        }) {
  return (
    <TheForm inline
             {...formPropsOf()}
             className={c(className)}
    >
      <TheInput.Select {...inputPropsOf(name)}
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
