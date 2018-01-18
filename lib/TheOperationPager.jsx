/**
 * Pager for operation page
 */
'use strict'

import React from 'react'
import { ThePager, TheCondition } from 'the-components'

function TheOperationPager ({
                              l,
                              showCounts,
                              counts,
                              onPage
                            }) {
  return (
    <ThePager.Row>
      <ThePager.ByCounts counts={counts}
                         onUpdate={onPage}
      />
      <TheCondition if={showCounts}>
        <ThePager.Counts {...{l, counts}}/>
      </TheCondition>
    </ThePager.Row>
  )
}

export default TheOperationPager