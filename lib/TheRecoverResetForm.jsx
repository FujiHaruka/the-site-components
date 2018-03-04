/**
 * TheRecoverResetForm component
 */
'use strict'

import React from 'react'
import { TheButton, TheForm, TheInput } from 'the-components'

const {Password} = TheInput
const {Field, Label, Value} = TheForm

function TheRecoverResetForm ({
                                formPropsOf,
                                inputPropsOf,
                                l,
                                labelPropsOf,
                                onSubmit,
                                submitPropsOf,
                              }) {

  return (
    <TheForm {...formPropsOf()}
             required={['password']}
    >
      <Field>
        <Label {...labelPropsOf('password')}>
          {l('labels.NEW_PASSWORD')}
        </Label>
        <Value>
          <Password placeholder={l('placeholders.NEW_PASSWORD')}
                    {...inputPropsOf('password')}
                    onEnter={onSubmit}/>
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

export default TheRecoverResetForm
