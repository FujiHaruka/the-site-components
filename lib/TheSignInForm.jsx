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
                          inputPropsOf,
                          l,
                          labelPropsOf,
                          nameParser = userNameParser,
                          onSubmit,
                          submitPropsOf,
                        }) {
  return (
    <TheForm {...formPropsOf()}
    >
      <TheInput {...inputPropsOf('@')}
                onUpdate={() => null}
                type='hidden'/>
      <Field>
        <Label {...labelPropsOf('name')}>
          {l('labels.USER_NAME')}
        </Label>
        <Value>
          <Text placeholder={l('placeholders.USER_NAME')}
                {...inputPropsOf('name')}
                autoCapitalize='off'
                autoCorrect='off'
                parser={nameParser}
          />
        </Value>
      </Field>
      <Field>
        <Label {...labelPropsOf('password')}>
          {l('labels.USER_PASSWORD')}
        </Label>
        <Value>
          <Password {...inputPropsOf('password')}
                    autoCapitalize='off'
                    autoCorrect='off'
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
