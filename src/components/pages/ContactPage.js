'use client'
import React, { Fragment } from 'react'
import { SiteTopSection, ContactMapSection, ContactSection, TagsSection, FooterSection } from '@/components/molecules'

const ContactPage = () => {
  return (
    <Fragment>
        <SiteTopSection backgroundImage="/project-2.jpg" title={"Contact Us"} subTitle="We're available 24/7. Talk to us now" />
        <ContactMapSection />
        <ContactSection />
        <TagsSection />
        <FooterSection />
    </Fragment>
  )
}

export default ContactPage