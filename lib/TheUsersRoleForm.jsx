/**
 * TheUsersRoleForm component
 */
'use strict'

import React from 'react'
import { TheButton, TheButtonGroup, TheForm, TheInput } from 'the-components'

const {Radio, Text} = TheInput
const {Field, Label, Value} = TheForm

function TheUsersRoleForm ({
                             getFormAttributes,
                             getInputAttributesOf,
                             getLabelAttributesOf,
                             getSubmitAttributes,
                             l,
                             roles = {},
                             users = [],
                           }) {
  return (
    <TheForm {...getFormAttributes()}
             autoComplete='off'
             required={['role']}
    >
      <Field>
        <Label {...getLabelAttributesOf('targets')}>
          {l('labels.TARGETS')}
        </Label>
        <Value>
          {users?.map((user) => (
            <li key={user.id}>
              <span>{user.displayName}</span>
              <span>{user.role?.code && ` ( ${user.role?.code} ) `}</span>
            </li>
          ))}
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
      <br/>
      <Field>
        <TheButton primary wide {...getSubmitAttributes()}>
          {l('buttons.DO_UPDATE')}
        </TheButton>
      </Field>
    </TheForm>
  )
}

export default TheUsersRoleForm
