/**
 * ThePasswordChangeForm component
 */
'use strict'

import React from 'react'
import { TheButton, TheForm, TheInput } from 'the-components'

const {Password} = TheInput
const {Field, Label, Value} = TheForm

function ThePasswordChangeForm ({
                                  formPropsOf,
                                  inputPropsOfOf,
                                  labelPropsOfOf,
                                  submitPropsOf,
                                  l,
                                  onSubmit,
                                  user,
                                }) {
  return (
    <TheForm {...formPropsOf()}
             required={['name']}
    >
      <Field>
        <Label>
          {l('labels.USER_NAME')}
        </Label>
        <Value>
          {user.name}
        </Value>
      </Field>
      <Field>
        <Label {...labelPropsOfOf('password')}>
          {l('labels.NEW_PASSWORD')}
        </Label>
        <Value>
          <Password autoFocus
                    onEnter={onSubmit}
                    placeholder={l('placeholders.NEW_PASSWORD')}
                    {...inputPropsOfOf('password')}/>
        </Value>
      </Field>
      <br/>
      <Field>
        <TheButton primary wide {...submitPropsOf()}>
          {l('buttons.DO_UPDATE')}
        </TheButton>
      </Field>
    </TheForm>
  )
}

export default ThePasswordChangeForm
