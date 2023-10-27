import React, { Fragment } from 'react'
import { SiteTopSection, AboutDetailsSection, HomeInviteSection, TagsSection, FooterSection } from '@/components/molecules'

const AboutUsPage = () => {
  return (
   <Fragment>
        <SiteTopSection backgroundImage={"/ngo-carousel-1.jpg"} title={"About Us"} subTitle={"Learn More About Us."} />
        <AboutDetailsSection />
        <HomeInviteSection description="In 2019, Bitrus and Kangyang Gana moved into Jebbu Miango Community. Shortly after, Kangyang, stirred by her desire to teach children the bible, began bible lessons for the children in the community. She made a critical observation during this period and discovered that the children could not read. Kangyang decided to address the problem and started by inviting some of the older kids to reading classes. They turned up and soon enough, their younger ones and friends were trooping to the Gana's house on Sundays. As time went on, different children of different ages, strengths and levels of learning showed up for this basic literacy class, and with the increasing numbers, Kangyang made public her work and asked for people to join in. We believe that our team of about forty (40) passionate young people, volunteering in both Claire Aid Foundation and Jebbu Miango Reads were personally handpicked and assembled by God." />
        <TagsSection />
        <FooterSection />
   </Fragment>
  )
}

export default AboutUsPage