/**
 * TheSigninForm component
 */
'use strict'

import React from 'react'
import { TheButton, TheForm, TheInput } from 'the-components'
import { userNameParser } from './helpers'

const {Password, Text} = TheInput
const {Field, Label, Value} = TheForm

function TheSigninForm ({
                          children,
                          getFormAttributes,
                          getInputAttributesOf,
                          getLabelAttributesOf,
                          getSubmitAttributes,
                          l,
                          nameParser = userNameParser,
                          onSubmit,
                        }) {
  return (
    <TheForm {...getFormAttributes()}
    >
      <TheInput {...getInputAttributesOf('@')}
                onUpdate={() => null}
                type='hidden'/>
      <Field>
        <Label {...getLabelAttributesOf('name')}>
          {l('labels.USER_NAME')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_NAME')}
                {...getInputAttributesOf('name')}
                parser={nameParser}
          />
        </Value>
      </Field>
      <Field>
        <Label {...getLabelAttributesOf('password')}>
          {l('labels.USER_PASSWORD')}
        </Label>
        <Value>
          <Password {...getInputAttributesOf('password')}
                    onEnter={onSubmit}
          />
        </Value>
      </Field>
      {children}
      <Field>
        <TheButton primary wide {...getSubmitAttributes()}>
          {l('buttons.DO_SIGN_IN')}
        </TheButton>
      </Field>
    </TheForm>
  )
}

export default TheSigninForm
