import React, { Fragment } from 'react'
import { SiteTopSection, FeaturedBlogSection, TagsSection, FooterSection, MainBlogSection, HighlightedBlogSection } from '@/components/molecules'

const BlogPage = () => {
  return (
    <Fragment>
      <SiteTopSection
        backgroundImage="/project-2.jpg"
        title={"Welcome To Our Blog"}
        subTitle="" />
      <FeaturedBlogSection />
      <MainBlogSection />
      <HighlightedBlogSection />
      <TagsSection />
      <FooterSection />
    </Fragment>
  )
}

export default BlogPage