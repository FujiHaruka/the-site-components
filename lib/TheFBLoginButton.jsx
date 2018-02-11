/**
 * FBLoginButton component
 */
'use strict'

import React from 'react'
import { TheButton, TheCondition, TheSpin } from 'the-components'

function TheFBLoginButton ({
                             callbackName = 'onFBLoginForFBLoginButton',
                             continueAs,
                             fbIcon,
                             fbThemeColor,
                             l,
                             onLogin,
                             ready = false,
                             spinning,
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
     data-onlogin="${callbackName}">
</div>
`,
        }}>
        </div>
        <TheCondition unless={ready}>
          <div className={styles.alt}
               style={{background: fbThemeColor, width: width}}
          >
            <TheSpin cover enabled/>
          </div>
        </TheCondition>
      </div>
    )
  }
  return (
    <TheButton className={styles.self}
               color={fbThemeColor}
               icon={fbIcon}
               primary
               onClick={onLogin}
               spinning={spinning}
    >
      {l('buttons.DO_LOGIN_FACEBOOK')}
    </TheButton>
  )
}

export default TheFBLoginButton
