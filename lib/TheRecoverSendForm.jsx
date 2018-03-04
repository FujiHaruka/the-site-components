/**
 * TheRecoverSendForm component
 */
'use strict'

import React from 'react'
import { TheButton, TheForm, TheInput } from 'the-components'

const {Text} = TheInput

function TheRecoverSendForm ({
                               formPropsOf,
                               inputPropsOf,
                               l,
                               labelPropsOf,
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
            {...inputPropsOf('email')}/>
      <TheButton primary {...submitPropsOf()}>
        {l('buttons.DO_SEND')}
      </TheButton>
    </TheForm>
  )
}

export default TheRecoverSendForm
