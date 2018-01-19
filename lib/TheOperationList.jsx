/**
 * UserList component
 */
'use strict'

import React from 'react'
import c from 'classnames'
import { TheTable, TheCondition, } from 'the-components'
import { retrieve } from 'asobj'

const {
  Head,
  Body,
  Row,
  HeaderCell,
  SortableHeaderCell,
  CheckboxCell,
  Cell,
} = TheTable

function TheOperationList ({
                             entities,
                             className,
                             l,
                             sort,
                             onSort,
                             isChecked = () => false,
                             isFreezed = () => false,
                             onUpdateCheck = () => null,
                             fields = {},
                           }) {
  return (
    <div className={c(className)}>
      <TheTable empty={entities && entities.length === 0}
                alt={l('alt.LIST_EMPTY')}
      >
        <Head>
          <Row>
            <HeaderCell/>
            {
              Object.keys(fields).map((name, i) => {
                const {label = name, sortable,} = fields[name]
                if (sortable) {
                  return <SortableHeaderCell name={name}
                                             key={name}
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
            <Row selected={isChecked(entity)}
                 key={entity.id}
            >
              <TheCondition if={isFreezed(entity)}>
                <Cell/>
              </TheCondition>
              <TheCondition unless={isFreezed(entity)}>
                <CheckboxCell
                  name={String(entity.id)}
                  value={isChecked(entity)}
                  onUpdate={onUpdateCheck}
                />
              </TheCondition>
              {
                Object.keys(fields).map((name, i) => {
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
