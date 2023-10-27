import React from 'react'
import Carousel from "react-multi-carousel";
import { Box, Button, Paper, Typography } from '@mui/material'
import "react-multi-carousel/lib/styles.css";

const blogData = [
    {
        title: "Family Value Seminar - 16th July 2023",
        description: "Claire Aid Foundation is made up of individuals who are passionate",
        photo: "blog-1.jpg",
        category: "Uncatgorised",
        date: "24-12-2023",
    },
    {
        title: "Summer School 2023 Call For Volunteers",
        description: "Okayy!! Our summer school in partnership with Arm The Child Foundation is…",
        photo: "blog-3.jpg",
        category: "Projects | Summer School",
        date: "24-12-2023",
    },
    {
        title: "Good health and well-being",
        description: "Our Foundation has been at work since 2019 under the name of our pilot project- Jebbu Miango Reads.",
        photo: "blog-2.jpg",
        category: "Uncatgorised",
        date: "24-12-2023",
    },
    {
        title: "Repudiandae illo in lorem nostrum augue aut at aliquet",
        description: "Okayy!! Our summer school in partnership with Arm The Child Foundation is…",
        photo: "blog-4.jpg",
        category: "Uncatgorised",
        date: "24-12-2023",
    },
    {
        title: "Family Value Seminar - 18th July 2023",
        description: "Claire Aid Foundation is made up of individuals who are passionate",
        photo: "blog-1.jpg",
        category: "Uncatgorised",
        date: "24-12-2023",
    },
    {
        title: "The Summer School 2023 Call For Volunteers",
        description: "Okayy!! Our summer school in partnership with Arm The Child Foundation is…",
        photo: "blog-3.jpg",
        category: "Projects | Summer School",
        date: "24-12-2023",
    },

]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
}

const HighlightedBlogSection = () => {
    return (
        <Box sx={{ pl: { lg: 15 }, pr: {lg: 15}, pb: {lg: 4}, pt: {lg: 4}, backgroundColor: '#F1F5F9' }}>
            <Box sx={{ mb: 3, width: "100%" }}>
                <Typography sx={{ textTransform: "uppercase", color: theme => theme.palette.primary.light, fontFamily: "Playfair Display" }} variant='h5'>Hightlighted Posts</Typography>
            </Box>
            <Carousel
                additionalTransfrom={0}
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                shouldResetAutoplay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                rewind={false}
                rewindWithAnimation={false}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    blogData.map((post, index) => <Paper elevation={5} sx={{ height: 500, m: 2, mb: 4 }} key={index}>
                        <Box sx={{
                            backgroundImage: `url(${post.photo})`, 
                            backgroundRepeat: "no-repeat",
                            backgroundBlendMode: "darken",
                            backgroundPosition: 'center',
                            backgroundSize: "cover",
                            height: 320
                        }} />
                        <Box sx={{ p: 1 }}>
                            <Typography variant='h5'>{post.title}</Typography>
                            <Typography variant='body1'>{post.description}</Typography>
                            <Box sx={{ textAlign: 'center', my: 1 }}>
                                <Button size='large' variant='contained' sx={{ borderRadius: 30 }}>Read More</Button>
                            </Box>
                        </Box>
                    </Paper>)
                }


            </Carousel>
        </Box>
    )
}

export default HighlightedBlogSection