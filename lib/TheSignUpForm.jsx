/**
 * TheSignUpForm component
 */
'use strict'

import React from 'react'
import { TheCondition, TheForm, TheInput, TheStep } from 'the-components'
import { userNameParser } from './helpers'

const {Password, Text} = TheInput
const {Field, Label, Value} = TheForm

function TheSignUpForm ({
                          children,
                          formPropsOf,
                          inputPropsOfOf,
                          l,
                          labelPropsOfOf,
                          nameParser = userNameParser,
                          onStep,
                          onSubmit,
                          required = ['name', 'password', 'profile.email'],
                          step = 0,
                          submitPropsOf,
                        }) {
  const toStepZero = () => onStep(0)
  const toStepOne = () => onStep(1)
  return (
    <TheForm {...formPropsOf()}
             autoComplete='off'
             required={required}
    >
      <TheStep {...{onStep, step}}
               isSubmit={step === 1}
               onSubmit={onSubmit}
               submitText={l('buttons.DO_SIGN_UP')}
      >
        <TheStep.Content>
          <Field>
            <Label {...labelPropsOfOf('profile.email')}>
              {l('labels.USER_EMAIL')}
            </Label>
            <Value>
              <Text placeholder={l('placeholders.USER_EMAIL')}
                    type='email'
                    {...inputPropsOfOf('profile.email')}
                    onEnter={toStepOne}
                    onFocus={toStepZero}
                    pattern={Text.EMAIL_PATTERN}
                    patternWarning={l('warnings.SEEMS_INVALID_EMAIL')}
              />
            </Value>
          </Field>
        </TheStep.Content>
        <TheStep.Content>
          <TheCondition if={!!inputPropsOfOf('profile.email').value}>
            <Field>
              <Label {...labelPropsOfOf('profile.email')}>
                {l('labels.USER_EMAIL')}
              </Label>
              <Value>
                <Text {...inputPropsOfOf('profile.email')}
                      onFocus={toStepOne}
                      readOnly
                />
              </Value>
            </Field>
          </TheCondition>
          <Field>
            <Label {...labelPropsOfOf('name')}>
              {l('labels.USER_NAME')}
            </Label>
            <Value>
              <Text placeholder={l('placeholders.USER_NAME')}
                    {...inputPropsOfOf('name')}
                    onFocus={toStepOne}
                    parser={nameParser}
              />
            </Value>
          </Field>
          <Field>
            <Label {...labelPropsOfOf('profile.name')}>
              {l('labels.USER_PROFILE_NAME')}
            </Label>
            <Value>
              <Text onFocus={toStepOne}
                    placeholder={l('placeholders.USER_PROFILE_NAME')}
                    {...inputPropsOfOf('profile.name')}/>
            </Value>
          </Field>
          {children}
          <Field>
            <Label {...labelPropsOfOf('password')}>
              {l('labels.USER_PASSWORD')}
            </Label>
            <Value>
              <Password {...inputPropsOfOf('password')}
                        autoComplete='new-password'
                        onFocus={toStepOne}
              />
            </Value>
          </Field>
        </TheStep.Content>
      </TheStep>
    </TheForm>
  )
}

export default TheSignUpForm
