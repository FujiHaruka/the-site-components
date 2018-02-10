/**
 * UserList component
 */
'use strict'

import { retrieve } from 'asobj'
import c from 'classnames'
import React from 'react'
import { TheCondition, TheTable } from 'the-components'

const {
  Body,
  Cell,
  CheckboxCell,
  Head,
  HeaderCell,
  Row,
  SortableHeaderCell,
} = TheTable

function TheOperationList ({
                             className,
                             entities = [],
                             fields = {},
                             isChecked = () => false,
                             isFreezed = () => false,
                             keys = null,
                             l,
                             onSort,
                             onUpdateCheck = () => null,
                             sort,
                           }) {
  return (
    <div className={c(className)}>
      <TheTable alt={l('alt.LIST_EMPTY')}
                empty={entities && entities.length === 0}
      >
        <Head>
          <Row>
            <HeaderCell/>
            {
              (keys || Object.keys(fields)).map((name, i) => {
                const {label = name, sortable} = fields[name]
                if (sortable) {
                  return <SortableHeaderCell key={name}
                                             name={name}
                                             {...{onSort}}
                                             sort={[].concat(sort)[0]}
                  >{label}</SortableHeaderCell>
                } else {
                  return <HeaderCell key={name}>{label}</HeaderCell>
                }
              })
            }
          </Row>
        </Head>
        <Body>
        {
          entities.map((entity) => (
            <Row key={entity.id}
                 selected={isChecked(entity)}
            >
              <TheCondition if={isFreezed(entity)}>
                <Cell/>
              </TheCondition>
              <TheCondition unless={isFreezed(entity)}>
                <CheckboxCell
                  name={String(entity.id)}
                  onUpdate={onUpdateCheck}
                  value={isChecked(entity)}
                />
              </TheCondition>
              {
                (keys || Object.keys(fields)).map((name, i) => {
                  const {render} = fields[name]
                  const value = retrieve(entity, name)
                  return (
                    <Cell key={name}>{render ? render(value, {entity, i}) : value}</Cell>
                  )
                })
              }
            </Row>
          ))
        }
        </Body>
      </TheTable>
    </div>
  )
}

export default TheOperationList
