/**
 * Pager for operation page
 */
'use strict'

import React from 'react'
import { TheCondition, ThePager } from 'the-components'

function TheOperationPager ({
                              counts,
                              l,
                              onPage,
                              showCounts,
                            }) {
  return (
    <ThePager.Row>
      <ThePager.ByCounts counts={counts}
                         onUpdate={onPage}
      />
      <TheCondition if={showCounts}>
        <ThePager.Counts {...{counts, l}}/>
      </TheCondition>
    </ThePager.Row>
  )
}

export default TheOperationPager
