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
                          inputPropsOf,
                          l,
                          labelPropsOf,
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
            <Label {...labelPropsOf('profile.email')}>
              {l('labels.USER_EMAIL')}
            </Label>
            <Value>
              <Text placeholder={l('placeholders.USER_EMAIL')}
                    type='email'
                    {...inputPropsOf('profile.email')}
                    onEnter={toStepOne}
                    onFocus={toStepZero}
                    pattern={Text.EMAIL_PATTERN}
                    patternWarning={l('warnings.SEEMS_INVALID_EMAIL')}
              />
            </Value>
          </Field>
        </TheStep.Content>
        <TheStep.Content>
          <TheCondition if={!!inputPropsOf('profile.email').value}>
            <Field>
              <Label {...labelPropsOf('profile.email')}>
                {l('labels.USER_EMAIL')}
              </Label>
              <Value>
                <Text {...inputPropsOf('profile.email')}
                      onFocus={toStepOne}
                      readOnly
                />
              </Value>
            </Field>
          </TheCondition>
          <Field>
            <Label {...labelPropsOf('name')}>
              {l('labels.USER_NAME')}
            </Label>
            <Value>
              <Text placeholder={l('placeholders.USER_NAME')}
                    {...inputPropsOf('name')}
                    onFocus={toStepOne}
                    parser={nameParser}
              />
            </Value>
          </Field>
          <Field>
            <Label {...labelPropsOf('profile.name')}>
              {l('labels.USER_PROFILE_NAME')}
            </Label>
            <Value>
              <Text onFocus={toStepOne}
                    placeholder={l('placeholders.USER_PROFILE_NAME')}
                    {...inputPropsOf('profile.name')}/>
            </Value>
          </Field>
          {children}
          <Field>
            <Label {...labelPropsOf('password')}>
              {l('labels.USER_PASSWORD')}
            </Label>
            <Value>
              <Password {...inputPropsOf('password')}
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
