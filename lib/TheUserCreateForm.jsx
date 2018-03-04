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
                              inputPropsOf,
                              l,
                              labelPropsOf,
                              roles = {},
                              submitPropsOf,
                            }) {
  return (
    <TheForm {...formPropsOf()}
             autoComplete='off'
             required={['name']}
    >
      <Field>
        <Label {...labelPropsOf('name')}>
          {l('labels.USER_NAME')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_NAME')}
                {...inputPropsOf('name')}/>
        </Value>
      </Field>
      <Field>
        <Label {...labelPropsOf('profile.name')}>
          {l('labels.USER_PROFILE_NAME')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_PROFILE_NAME')}
                {...inputPropsOf('profile.name')}/>
        </Value>
      </Field>
      <Field>
        <Label {...labelPropsOf('profile.email')}>
          {l('labels.USER_EMAIL')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_EMAIL')}
                type='email'
                {...inputPropsOf('profile.email')}/>
        </Value>
      </Field>
      <Field>
        <Label {...labelPropsOf('role')}>
          {l('labels.USER_ROLE')}
        </Label>
        <Value>
          <Radio {...inputPropsOf('role')}
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
