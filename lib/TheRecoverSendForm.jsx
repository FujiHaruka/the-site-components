/**
 * TheRecoverSendForm component
 */
'use strict'

import React from 'react'
import { TheButton, TheForm, TheInput } from 'the-components'

const {Text} = TheInput

function TheRecoverSendForm ({
                               getFormAttributes,
                               getInputAttributesOf,
                               getLabelAttributesOf,
                               getSubmitAttributes,
                               l,
                               onSubmit,
                             }) {
  return (
    <TheForm inline
             {...getFormAttributes()}
             autoComplete='off'
             required={['email']}
    >
      <Text autoFocus
            onEnter={onSubmit}
            placeholder={l('placeholders.USER_EMAIL')}
            {...getInputAttributesOf('email')}/>
      <TheButton primary {...getSubmitAttributes()}>
        {l('buttons.DO_SEND')}
      </TheButton>
    </TheForm>
  )
}

export default TheRecoverSendForm
