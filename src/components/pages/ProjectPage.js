import React, { Fragment } from 'react'
import { FooterSection, ProjectSection, SiteTopSection, TagsSection } from '@/components/molecules'

const ProjectPage = () => {
    return (
        <Fragment>
            <SiteTopSection backgroundImage="/project-2.jpg" title={"Our Projects"} subTitle='Checkout some of projects' />
            <ProjectSection />
            <TagsSection />
            <FooterSection />
        </Fragment>
    )
}

export default ProjectPage