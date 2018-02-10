/**
 * TheUserCreateForm component
 */
'use strict'

import React from 'react'
import { TheButton, TheButtonGroup, TheForm, TheInput } from 'the-components'

const {Radio, Text} = TheInput
const {Field, Label, Value} = TheForm

function TheUserCreateForm ({
                              getFormAttributes,
                              getInputAttributesOf,
                              getLabelAttributesOf,
                              getSubmitAttributes,
                              l,
                              roles = {},
                            }) {
  return (
    <TheForm {...getFormAttributes()}
             autoComplete='off'
             required={['name']}
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
      <Field>
        <Label {...getLabelAttributesOf('role')}>
          {l('labels.USER_ROLE')}
        </Label>
        <Value>
          <Radio {...getInputAttributesOf('role')}
                 options={roles}
          />
        </Value>
      </Field>
      <Field>
        <TheButton primary wide {...getSubmitAttributes()}>
          {l('buttons.DO_CREATE')}
        </TheButton>
      </Field>
    </TheForm>
  )
}

export default TheUserCreateForm
