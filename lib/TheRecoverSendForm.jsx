/**
 * TheRecoverSendForm component
 */
'use strict'

import React from 'react'
import { TheButton, TheForm, TheInput } from 'the-components'

const {Text} = TheInput

function TheRecoverSendForm ({
                               formPropsOf,
                               inputPropsOfOf,
                               l,
                               labelPropsOfOf,
                               onSubmit,
                               submitPropsOf,
                             }) {
  return (
    <TheForm inline
             {...formPropsOf()}
             autoComplete='off'
             required={['email']}
    >
      <Text autoFocus
            onEnter={onSubmit}
            placeholder={l('placeholders.USER_EMAIL')}
            {...inputPropsOfOf('email')}/>
      <TheButton primary {...submitPropsOf()}>
        {l('buttons.DO_SEND')}
      </TheButton>
    </TheForm>
  )
}

export default TheRecoverSendForm
