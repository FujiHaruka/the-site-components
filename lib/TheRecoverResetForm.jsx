/**
 * TheRecoverResetForm component
 */
'use strict'

import React from 'react'
import { TheForm, TheInput, TheButton } from 'the-components'

const {Password} = TheInput
const {Field, Label, Value} = TheForm

function TheRecoverResetForm ({
                                l,
                                getInputAttributesOf,
                                getLabelAttributesOf,
                                getFormAttributes,
                                getSubmitAttributes,
                                onSubmit
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
        <TheButton wide primary {...getSubmitAttributes()}>
          {l('buttons.DO_UPDATE')}
        </TheButton>
      </Field>
    </TheForm>
  )
}

export default TheRecoverResetForm