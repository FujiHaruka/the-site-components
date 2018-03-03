/**
 * TheUserCreateForm component
 */
'use strict'

import React from 'react'
import { TheButton, TheButtonGroup, TheForm, TheInput } from 'the-components'

const {Radio, Text} = TheInput
const {Field, Label, Value} = TheForm

function TheUserCreateForm ({
                              formPropsOf,
                              inputPropsOfOf,
                              l,
                              labelPropsOfOf,
                              roles = {},
                              submitPropsOf,
                            }) {
  return (
    <TheForm {...formPropsOf()}
             autoComplete='off'
             required={['name']}
    >
      <Field>
        <Label {...labelPropsOfOf('name')}>
          {l('labels.USER_NAME')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_NAME')}
                {...inputPropsOfOf('name')}/>
        </Value>
      </Field>
      <Field>
        <Label {...labelPropsOfOf('profile.name')}>
          {l('labels.USER_PROFILE_NAME')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_PROFILE_NAME')}
                {...inputPropsOfOf('profile.name')}/>
        </Value>
      </Field>
      <Field>
        <Label {...labelPropsOfOf('profile.email')}>
          {l('labels.USER_EMAIL')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_EMAIL')}
                type='email'
                {...inputPropsOfOf('profile.email')}/>
        </Value>
      </Field>
      <Field>
        <Label {...labelPropsOfOf('role')}>
          {l('labels.USER_ROLE')}
        </Label>
        <Value>
          <Radio {...inputPropsOfOf('role')}
                 options={roles}
          />
        </Value>
      </Field>
      <Field>
        <TheButton primary wide {...submitPropsOf()}>
          {l('buttons.DO_CREATE')}
        </TheButton>
      </Field>
    </TheForm>
  )
}

export default TheUserCreateForm
