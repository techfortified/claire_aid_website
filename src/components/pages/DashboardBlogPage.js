import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const blogData = [
    {
        title: "Family Value Seminar - 16th July 2023",
        description: "Claire Aid Foundation is made up of individuals who are passionate",
        photo: "/blog-1.jpg",
        category: "Uncatgorised",
        date: "24-12-2023",
    },
    {
        title: "Summer School 2023 Call For Volunteers",
        description: "Okayy!! Our summer school in partnership with Arm The Child Foundation is…",
        photo: "/blog-3.jpg",
        category: "Projects | Summer School",
        date: "24-12-2023",
    },
    {
        title: "Good health and well-being",
        description: "Our Foundation has been at work since 2019 under the name of our pilot project- Jebbu Miango Reads.",
        photo: "/blog-2.jpg",
        category: "Uncatgorised",
        date: "24-12-2023",
    },
    {
        title: "Repudiandae illo in lorem nostrum augue aut at aliquet",
        description: "Okayy!! Our summer school in partnership with Arm The Child Foundation is…",
        photo: "/blog-4.jpg",
        category: "Uncatgorised",
        date: "24-12-2023",
    },
    {
        title: "Family Value Seminar - 16th July 2023",
        description: "Claire Aid Foundation is made up of individuals who are passionate",
        photo: "/blog-1.jpg",
        category: "Uncatgorised",
        date: "24-12-2023",
    },
    {
        title: "Summer School 2023 Call For Volunteers",
        description: "Okayy!! Our summer school in partnership with Arm The Child Foundation is…",
        photo: "/blog-3.jpg",
        category: "Projects | Summer School",
        date: "24-12-2023",
    },
    {
        title: "The Good health and well-being",
        description: "Our Foundation has been at work since 2019 under the name of our pilot project- Jebbu Miango Reads.",
        photo: "/blog-2.jpg",
        category: "Uncatgorised",
        date: "24-12-2023",
    },
    {
        title: "We Repudiandae illo in lorem nostrum augue aut at aliquet",
        description: "Okayy!! Our summer school in partnership with Arm The Child Foundation is…",
        photo: "/blog-4.jpg",
        category: "Uncatgorised",
        date: "24-12-2023",
    },
]

const DashboardBlogPage = () => {
    return (
        <Box sx={{mr:2}}>
            
            <Grid container spacing={2}>
                {blogData.map((post, k) => {
                    return (
                        <Grid lg={3} xs={12} item key={k}>
                            <Paper sx={{height: "100%"}}>
                                <Box sx={{ backgroundImage: `url(${post.photo})`, height: 320 }} />
                                <Box sx={{p: 1}}>
                                <Typography variant='h5'>{post.title}</Typography>
                                <Typography variant='body1'>{post.description}</Typography>
                                    <Box sx={{textAlign: 'center', my: 1}}>
                                    <Button size='large' variant='contained' sx={{borderRadius: 30}}>Read More</Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default DashboardBlogPage
