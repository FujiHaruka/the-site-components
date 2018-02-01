/**
 * TheSigninForm component
 */
'use strict'

import React from 'react'
import { TheForm, TheInput, TheButton } from 'the-components'
import { userNameParser } from './helpers'

const {Text, Password} = TheInput
const {Field, Label, Value} = TheForm

function TheSigninForm ({
                          l,
                          getInputAttributesOf,
                          getLabelAttributesOf,
                          getFormAttributes,
                          getSubmitAttributes,
                          onSubmit,
                          children,
                          nameParser = userNameParser
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
        <TheButton wide primary {...getSubmitAttributes()}>
          {l('buttons.DO_SIGN_IN')}
        </TheButton>
      </Field>
    </TheForm>
  )
}

export default TheSigninForm
