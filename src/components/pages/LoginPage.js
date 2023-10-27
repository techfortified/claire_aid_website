'use client'
import React, { Fragment } from 'react'
import { SiteTopSection, FooterSection, LoginSection } from '@/components/molecules'

const LoginPage = () => {
  return (
    <Fragment>
        <SiteTopSection backgroundImage="/project-2.jpg" title={"Login Here"} subTitle="" />
        <LoginSection />
        <FooterSection />
    </Fragment>
  )
}

export default LoginPage