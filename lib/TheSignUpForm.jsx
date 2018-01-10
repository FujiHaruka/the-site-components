/**
 * TheSignUpForm component
 */
'use strict'

import React from 'react'
import { TheForm, TheInput, TheButton, TheButtonGroup, TheCondition } from 'the-components'
import { userNameParser } from './helpers'

const {Text, Password} = TheInput
const {Field, Label, Value} = TheForm

function TheSignUpForm ({
                          l,
                          getInputAttributesOf,
                          getLabelAttributesOf,
                          getFormAttributes,
                          getSubmitAttributes,
                          required = ['name', 'password'],
                          children,
                          nameParser = userNameParser,
                          step = 0,
                          onStep,
                          prevIcon = 'fas fa-caret-left',
                          nextIcon = 'fas fa-caret-right',
                        }) {
  return (
    <TheForm {...getFormAttributes()}
             required={required}
             autoComplete='off'
    >

      <TheCondition if={step === 0}>
        <div>
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
                    onEnter={() => onStep(1)}
              />
            </Value>
          </Field>
          <Field>
            <TheButtonGroup align={'right'}>
              <TheButton onClick={() => onStep(1)}
                         style={{flexGrow: 0}}
                         iconRight={nextIcon}
              >
                {l('buttons.SHOW_NEXT')}
              </TheButton>
            </TheButtonGroup>
          </Field>
        </div>
      </TheCondition>
      <TheCondition if={step === 1}>
        <div>
          <Field>
            <Label {...getLabelAttributesOf('profile.email')}>
              {l('labels.USER_EMAIL')}
            </Label>
            <Value>
              <Text {...getInputAttributesOf('profile.email')}
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
              />
            </Value>
          </Field>
          <Field>
            <TheButtonGroup>
              <TheButton onClick={() => onStep(0)}
                         icon={prevIcon}
              >
                {l('buttons.SHOW_BACK')}
              </TheButton>
              <TheButton primary {...getSubmitAttributes()}>
                {l('buttons.DO_SIGNUP')}
              </TheButton>
            </TheButtonGroup>
          </Field>
        </div>
      </TheCondition>
    </TheForm>
  )
}

export default TheSignUpForm