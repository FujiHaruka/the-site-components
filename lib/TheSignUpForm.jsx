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
                          getFormAttributes,
                          getInputAttributesOf,
                          getLabelAttributesOf,
                          getSubmitAttributes,
                          l,
                          nameParser = userNameParser,
                          onStep,
                          onSubmit,
                          required = ['name', 'password', 'profile.email'],
                          step = 0,
                        }) {
  const toStepZero = () => onStep(0)
  const toStepOne = () => onStep(1)
  return (
    <TheForm {...getFormAttributes()}
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
            <Label {...getLabelAttributesOf('profile.email')}>
              {l('labels.USER_EMAIL')}
            </Label>
            <Value>
              <Text placeholder={l('placeholders.USER_EMAIL')}
                    type='email'
                    {...getInputAttributesOf('profile.email')}
                    onEnter={toStepOne}
                    onFocus={toStepZero}
                    pattern={Text.EMAIL_PATTERN}
                    patternWarning={l('warnings.SEEMS_INVALID_EMAIL')}
              />
            </Value>
          </Field>
        </TheStep.Content>
        <TheStep.Content>
          <TheCondition if={!!getInputAttributesOf('profile.email').value}>
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
          </TheCondition>
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
              <Text onFocus={toStepOne}
                    placeholder={l('placeholders.USER_PROFILE_NAME')}
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
