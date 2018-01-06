/**
 * TheSignUpForm component
 */
'use strict'

import React from 'react'
import { TheForm, TheInput, TheButton } from 'the-components'

const {Text, Password} = TheInput
const {Field, Label, Value} = TheForm

function TheSignUpForm ({
                          l,
                          getInputAttributesOf,
                          getLabelAttributesOf,
                          getFormAttributes,
                          getSubmitAttributes,
                          required = ['name', 'password'],
                          children
                        }) {
  return (
    <TheForm {...getFormAttributes()}
             required={required}
             autoComplete='off'
    >
      <Field>
        <Label {...getLabelAttributesOf('name')}>
          {l('labels.USER_NAME')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_NAME')}
                {...getInputAttributesOf('name')}/>
        </Value>
      </Field>
      <Field>
        <Label {...getLabelAttributesOf('profile.name')}>
          {l('labels.USER_PROFILE_NAME')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_PROFILE_NAME')}
                {...getInputAttributesOf('profile.name')}/>
        </Value>
      </Field>
      <Field>
        <Label {...getLabelAttributesOf('profile.email')}>
          {l('labels.USER_EMAIL')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_EMAIL')}
                type='email'
                {...getInputAttributesOf('profile.email')}/>
        </Value>
      </Field>
      {children}
      <Field>
        <Label {...getLabelAttributesOf('password')}>
          {l('labels.USER_PASSWORD')}
        </Label>
        <Value>
          <Password {...getInputAttributesOf('password')}
          />
        </Value>
      </Field>
      <Field>
        <TheButton wide primary {...getSubmitAttributes()}>
          {l('buttons.DO_SIGNUP')}
        </TheButton>
      </Field>
    </TheForm>
  )
}

export default TheSignUpForm