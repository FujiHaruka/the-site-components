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
                          formPropsOf,
                          inputPropsOfOf,
                          labelPropsOfOf,
                          submitPropsOf,
                          l,
                          nameParser = userNameParser,
                          onSubmit,
                        }) {
  return (
    <TheForm {...formPropsOf()}
    >
      <TheInput {...inputPropsOfOf('@')}
                onUpdate={() => null}
                type='hidden'/>
      <Field>
        <Label {...labelPropsOfOf('name')}>
          {l('labels.USER_NAME')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_NAME')}
                {...inputPropsOfOf('name')}
                parser={nameParser}
          />
        </Value>
      </Field>
      <Field>
        <Label {...labelPropsOfOf('password')}>
          {l('labels.USER_PASSWORD')}
        </Label>
        <Value>
          <Password {...inputPropsOfOf('password')}
                    onEnter={onSubmit}
          />
        </Value>
      </Field>
      {children}
      <Field>
        <TheButton primary wide {...submitPropsOf()}>
          {l('buttons.DO_SIGN_IN')}
        </TheButton>
      </Field>
    </TheForm>
  )
}

export default TheSigninForm
