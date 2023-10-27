import React, { Fragment } from 'react'
import { FooterSection, HomeEventSection, HomeInviteSection, HomeStorySection, SiteTopSection, TagsSection } from '@/components/molecules'

const VolunteerPage = () => {
    return (
        <Fragment>
            <SiteTopSection
                backgroundImage="/ngo-carousel-2.jpg"
                title={"Volunteer"}
                subTitle="" />
            <HomeEventSection />
            <HomeStorySection />
            <TagsSection />
            <FooterSection />
        </Fragment>
    )
}

export default VolunteerPage