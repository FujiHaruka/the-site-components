/**
 * ThePasswordChangeForm component
 */
'use strict'

import React from 'react'
import { TheButton, TheForm, TheInput } from 'the-components'

const {Password} = TheInput
const {Field, Label, Value} = TheForm

function ThePasswordChangeForm ({
                                  getFormAttributes,
                                  getInputAttributesOf,
                                  getLabelAttributesOf,
                                  getSubmitAttributes,
                                  l,
                                  onSubmit,
                                  user,
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
          <Password autoFocus
                    onEnter={onSubmit}
                    placeholder={l('placeholders.NEW_PASSWORD')}
                    {...getInputAttributesOf('password')}/>
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

export default ThePasswordChangeForm
