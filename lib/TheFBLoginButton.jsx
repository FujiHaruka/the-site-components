/**
 * FBLoginButton component
 */
'use strict'

import React from 'react'
import { TheSpin, TheButton, TheCondition } from 'the-components'

function TheFBLoginButton ({
                             l,
                             ready = false,
                             spinning,
                             onLogin,
                             continueAs,
                             fbIcon,
                             fbThemeColor,
                             styles,
                           }) {
  if (continueAs) {
    const width = 248
    return (
      <div className={styles.wrap}>
        <div dangerouslySetInnerHTML={{
          __html: `
<div class='fb-login-button'
     data-max-rows="1"
     data-size="large"
     data-button-type="continue_with"
     data-show-faces="false"
     data-auto-logout-link="false"
     data-use-continue-as="true"
     data-width="${width}px"
     data-onlogin="onFBLoginForFBLoginButton">
</div>
`
        }}>
        </div>
        <TheCondition unless={ready}>
          <div className={styles.alt}
               style={{width: width, background: fbThemeColor}}
          >
            <TheSpin cover enabled/>
          </div>
        </TheCondition>
      </div>
    )
  }
  return (
    <TheButton className={styles.self}
               onClick={onLogin}
               spinning={spinning}
               largeIcon={fbIcon}
               color={fbThemeColor}
    >
      {l('buttons.DO_LOGIN_FACEBOOK')}
    </TheButton>
  )
}

export default TheFBLoginButton
