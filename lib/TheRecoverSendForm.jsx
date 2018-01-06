/**
 * TheRecoverSendForm component
 */
'use strict'

import React from 'react'
import { TheForm, TheInput, TheButton } from 'the-components'

const {Text} = TheInput

function TheRecoverSendForm ({
                               l,
                               onSubmit,
                               getInputAttributesOf,
                               getLabelAttributesOf,
                               getFormAttributes,
                               getSubmitAttributes
                             }) {
  return (
    <TheForm inline
             {...getFormAttributes()}
             required={['email']}
             autoComplete='off'
    >
      <Text placeholder={l('placeholders.USER_EMAIL')}
            autoFocus
            onEnter={onSubmit}
            {...getInputAttributesOf('email')}/>
      <TheButton primary {...getSubmitAttributes()}>
        {l('buttons.DO_SEND')}
      </TheButton>
    </TheForm>
  )
}

export default TheRecoverSendForm