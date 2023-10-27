import React, { Fragment } from 'react'
import { FooterSection, HomeAboutSection, HomeBlogSection, HomeCardSection, HomeCarousel, HomeEventSection, HomeInviteSection, HomeProjectSection, HomeStorySection, TagsSection } from '@/components/molecules'

const HomePage = () => {
  return (
    <Fragment>
        <HomeCarousel />
        <HomeCardSection />
        <HomeAboutSection />
        <HomeStorySection />
        <HomeProjectSection />
        <HomeEventSection />
        <HomeBlogSection />
        <HomeInviteSection />
        <TagsSection />
        <FooterSection />
    </Fragment>
  )
}


export default HomePage