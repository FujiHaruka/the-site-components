/**
 * TheSignUpForm component
 */
'use strict'

import React from 'react'
import { TheStep, TheForm, TheInput } from 'the-components'
import { userNameParser } from './helpers'

const {Text, Password} = TheInput
const {Field, Label, Value} = TheForm

function TheSignUpForm ({
                          l,
                          values,
                          getInputAttributesOf,
                          getLabelAttributesOf,
                          getFormAttributes,
                          getSubmitAttributes,
                          required = ['name', 'password', 'email'],
                          children,
                          nameParser = userNameParser,
                          step = 0,
                          onStep,
                          onSubmit
                        }) {
  const email = values['profile.email']
  const toStepZero = () => onStep(0)
  const toStepOne = () => onStep(email ? 1 : 0)
  return (
    <TheForm {...getFormAttributes()}
             required={required}
             autoComplete='off'
    >
      <TheStep {...{onStep}}
               step={email ? step : 0}
               onSubmit={onSubmit}
               submitText={l('buttons.DO_SIGNUP')}
               isSubmit={step === 1}
      >
        <TheStep.Content>
          <Field>
            <Label {...getLabelAttributesOf('profile.email')}>
              {l('labels.USER_EMAIL')}
            </Label>
            <Value>
              <Text placeholder={l('placeholders.USER_EMAIL')}
                    type='email'
                    {...getInputAttributesOf('profile.email')}
                    pattern={Text.EMAIL_PATTERN}
                    patternWarning={l('warnings.SEEMS_INVALID_EMAIL')}
                    onFocus={toStepZero}
                    onEnter={toStepOne}
              />
            </Value>
          </Field>
        </TheStep.Content>
        <TheStep.Content>
          <Field>
            <Label {...getLabelAttributesOf('profile.email')}>
              {l('labels.USER_EMAIL')}
            </Label>
            <Value>
              <Text {...getInputAttributesOf('profile.email')}
                    onFocus={toStepOne}
                    readOnly
              />
            </Value>
          </Field>
          <Field>
            <Label {...getLabelAttributesOf('name')}>
              {l('labels.USER_NAME')}
            </Label>
            <Value>
              <Text placeholder={l('placeholders.USER_NAME')}
                    {...getInputAttributesOf('name')}
                    onFocus={toStepOne}
                    parser={nameParser}
              />
            </Value>
          </Field>
          <Field>
            <Label {...getLabelAttributesOf('profile.name')}>
              {l('labels.USER_PROFILE_NAME')}
            </Label>
            <Value>
              <Text placeholder={l('placeholders.USER_PROFILE_NAME')}
                    onFocus={toStepOne}
                    {...getInputAttributesOf('profile.name')}/>
            </Value>
          </Field>
          {children}
          <Field>
            <Label {...getLabelAttributesOf('password')}>
              {l('labels.USER_PASSWORD')}
            </Label>
            <Value>
              <Password {...getInputAttributesOf('password')}
                        onFocus={toStepOne}
                        autoComplete='new-password'
              />
            </Value>
          </Field>
        </TheStep.Content>
      </TheStep>
    </TheForm>
  )
}

export default TheSignUpForm