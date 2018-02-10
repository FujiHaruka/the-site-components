/**
 * TheRecoverResetForm component
 */
'use strict'

import React from 'react'
import { TheButton, TheForm, TheInput } from 'the-components'

const {Password} = TheInput
const {Field, Label, Value} = TheForm

function TheRecoverResetForm ({
                                getFormAttributes,
                                getInputAttributesOf,
                                getLabelAttributesOf,
                                getSubmitAttributes,
                                l,
                                onSubmit,
                              }) {

  return (
    <TheForm {...getFormAttributes()}
             required={['password']}
    >
      <Field>
        <Label {...getLabelAttributesOf('password')}>
          {l('labels.NEW_PASSWORD')}
        </Label>
        <Value>
          <Password placeholder={l('placeholders.NEW_PASSWORD')}
                    {...getInputAttributesOf('password')}
                    onEnter={onSubmit}/>
        </Value>
      </Field>
      <br/>
      <Field>
        <TheButton primary wide {...getSubmitAttributes()}>
          {l('buttons.DO_UPDATE')}
        </TheButton>
      </Field>
    </TheForm>
  )
}

export default TheRecoverResetForm
