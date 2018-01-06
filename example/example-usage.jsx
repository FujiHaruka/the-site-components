'use strict'

import React from 'react'
import { TheSiteComponents, TheSiteComponentsStyle } from 'the-site-components'

class ExampleComponent extends React.PureComponent {
  render () {
    return (
      <div>
        <TheSiteComponentsStyle/>
        <TheSiteComponents id='my-component'>
        </TheSiteComponents>
      </div>

    )
  }
}

export default ExampleComponent
