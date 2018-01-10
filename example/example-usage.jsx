'use strict'

import React from 'react'
import { TheSignInForm, TheSignUpForm } from 'the-site-components'

import { withForm, TheThemeStyle, TheIcon } from 'the-components'

const SignInForm = withForm(TheSignInForm)
const SignUpForm = withForm(TheSignUpForm)

class ExampleComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      signInValues: {},
      signUpValues: {},
      signUpStep: 0
    }
  }

  render () {
    const l = (key) => ({})[key] || key.split(/\./g).pop()
    return (
      <div>
        <TheThemeStyle/>
        <TheIcon.CdnLink/>
        <h1>TheSignInForm</h1>
        <div>
          <SignInForm {...{l}}
                      values={this.state.signInValues}
                      onUpdate={(signInValues) => this.setState({signInValues})}
          />
        </div>
        <h1>SignUpForm</h1>
        <div>
          <SignUpForm {...{l}}
                      values={this.state.signUpValues}
                      onUpdate={(signUpValues) => this.setState({signUpValues})}
                      step={this.state.signUpStep}
                      onStep={(signUpStep) => this.setState({signUpStep})}
          />
        </div>
        <hr/>
      </div>

    )
  }
}

export default ExampleComponent
