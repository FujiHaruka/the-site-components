/**
 * TheProfileEditForm component
 */
'use strict'

import React from 'react'
import { TheButton, TheForm, TheInput } from 'the-components'

const {Text, Upload} = TheInput
const {Field, Label, Value} = TheForm

function TheProfileEditForm ({
                               children,
                               formPropsOf,
                               inputPropsOf,
                               l,
                               labelPropsOf,
                               submitPropsOf,
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
          {user && user.name}
        </Value>
      </Field>
      <Field>
        <Label {...labelPropsOf('name')}>
          {l('labels.USER_PROFILE_NAME')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_PROFILE_NAME')}
                {...inputPropsOf('name')}/>
        </Value>
      </Field>
      <Field>
        <Label {...labelPropsOf('email')}>
          {l('labels.USER_EMAIL')}
        </Label>
        <Value>
          <Text pattern={Text.EMAIL_PATTERN}
                patternWarning={l('warnings.SEEMS_INVALID_EMAIL')}
                placeholder={l('placeholders.USER_EMAIL')}
                type='email'
                {...inputPropsOf('email')}/>
        </Value>
      </Field>
      <Field>
        <Label {...labelPropsOf('image')}>
          {l('labels.USER_IMAGE')}
        </Label>
        <Value>
          <Upload multiple={false}
                  {...inputPropsOf('image')}/>
        </Value>
      </Field>
      {children}
      <br/>
      <Field>
        <TheButton primary wide {...submitPropsOf()}>
          {l('buttons.DO_UPDATE')}
        </TheButton>
      </Field>
    </TheForm>
  )
}

export default TheProfileEditForm
