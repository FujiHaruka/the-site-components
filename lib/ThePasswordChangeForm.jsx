/**
 * ThePasswordChangeForm component
 */
'use strict'

import React from 'react'
import { TheForm, TheInput, TheButton } from 'the-components'

const {Password} = TheInput
const {Field, Label, Value} = TheForm

function ThePasswordChangeForm ({
                                  l,
                                  user,
                                  getInputAttributesOf,
                                  getLabelAttributesOf,
                                  getFormAttributes,
                                  getSubmitAttributes,
                                  onSubmit
                                }) {
  return (
    <TheForm {...getFormAttributes()}
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
        <Label {...getLabelAttributesOf('password')}>
          {l('labels.NEW_PASSWORD')}
        </Label>
        <Value>
          <Password placeholder={l('placeholders.NEW_PASSWORD')}
                    autoFocus
                    onEnter={onSubmit}
                    {...getInputAttributesOf('password')}/>
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

export default ThePasswordChangeForm