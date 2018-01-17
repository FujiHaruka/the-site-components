the-site-components
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/the-labo/the-site-components
[bd_travis_url]: http://travis-ci.org/the-labo/the-site-components
[bd_travis_shield_url]: http://img.shields.io/travis/the-labo/the-site-components.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/the-labo/the-site-components
[bd_travis_com_shield_url]: https://api.travis-ci.com/the-labo/the-site-components.svg?token=
[bd_license_url]: https://github.com/the-labo/the-site-components/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/the-labo/the-site-components
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/the-labo/the-site-components.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/the-labo/the-site-components.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/the-labo/the-site-components
[bd_gemnasium_shield_url]: https://gemnasium.com/the-labo/the-site-components.svg
[bd_npm_url]: http://www.npmjs.org/package/the-site-components
[bd_npm_shield_url]: http://img.shields.io/npm/v/the-site-components.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Components for the-site

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install the-site-components --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
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
                      onUpdate={(signInValues) => this.setState({signInValues: Object.assign(this.state.signInValues, signInValues)})}
          />
        </div>
        <h1>SignUpForm</h1>
        <div>
          <SignUpForm {...{l}}
                      values={this.state.signUpValues}
                      onUpdate={(signUpValues) => this.setState({signUpValues: Object.assign(this.state.signUpValues, signUpValues)})}
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

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Components.md.hbs" Start -->

<a name="section-doc-guides-03-components-md"></a>

Components
-----------

### TheCautionDisconnectedDialog



**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `warningIcon` |   |  | `null` |
| `reloadIcon` |   |  | `null` |

### ThePasswordChangeForm




### TheProfileEditForm




### TheRecoverResetForm




### TheRecoverSendForm




### TheSearchForm



**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `name` |   |  | `'q'` |

### TheSigninForm



**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `nameParser` |   |  | `userNameParser` |

### TheSignUpForm



**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `required` |   |  | `['name', 'password', 'profile.email']` |
| `nameParser` |   |  | `userNameParser` |
| `step` |   |  | `0` |

### TheUserCreateForm



**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `roles` |   |  | `{}` |

### TheUserImage



**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `size` |   |  | `48` |



<!-- Section from "doc/guides/03.Components.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/the-labo/the-site-components/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [THE Labo][t_h_e_labo_url]

[t_h_e_labo_url]: https://github.com/the-labo

<!-- Links End -->
