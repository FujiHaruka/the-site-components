/**
 * TheProfileEditForm component
 */
'use strict'

import React from 'react'
import { TheForm, TheInput, TheButton } from 'the-components'

const {Text} = TheInput
const {Field, Label, Value} = TheForm

function TheProfileEditForm ({
                               l,
                               user,
                               getInputAttributesOf,
                               getLabelAttributesOf,
                               getFormAttributes,
                               getSubmitAttributes,
                               children
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
          {user && user.name}
        </Value>
      </Field>
      <Field>
        <Label {...getLabelAttributesOf('name')}>
          {l('labels.USER_PROFILE_NAME')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_PROFILE_NAME')}
                {...getInputAttributesOf('name')}/>
        </Value>
      </Field>
      <Field>
        <Label {...getLabelAttributesOf('email')}>
          {l('labels.USER_EMAIL')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_EMAIL')}
                type='email'
                pattern={Text.EMAIL_PATTERN}
                patternWarning={l('warnings.SEEMS_INVALID_EMAIL')}
                {...getInputAttributesOf('email')}/>
        </Value>
      </Field>
      {children}
      <br/>
      <Field>
        <TheButton wide primary {...getSubmitAttributes()}>
          {l('buttons.DO_UPDATE')}
        </TheButton>
      </Field>
    </TheForm>
  )
}

export default TheProfileEditForm
