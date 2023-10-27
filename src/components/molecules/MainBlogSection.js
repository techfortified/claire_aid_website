import { useMediaDeviceSizes } from '@/hooks'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

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
]

const archiveData = ["October 2023", "July 2023", "June 2023", "October 2022", "September 2022"]

const categoriesData = ["A Claire Christmas", "Charity", "Excursions", "JMR Updates", "Projects", "Story", "Summer School", "Uncategorized"]


const MainBlogSection = () => {
  const {isDownMediumDevice} = useMediaDeviceSizes()

    return (
        <Box sx={{ pl: { lg: 15 }, pr: {lg: 15}, pb: 1, p: {lg: 15, md: 6, sm: 4, xs: 2} }}>
            <Typography sx={{p: 2, fontFamily: "Playfair Display"}} variant={isDownMediumDevice ? 'h4' : 'h3'}>From Our Blog</Typography>
            <Grid container spacing={2}>
                <Grid item lg={10}>
                    <Grid container spacing={2}>
                        {blogData.map((post, k) => {
                            return (
                                <Grid lg={6} item key={k}>
                                    <Paper sx={{ height: "100%" }}>
                                        <Box sx={{ backgroundImage: `url(${post.photo})`, height: 320 }} />
                                        <Box sx={{ p: 1 }}>
                                            <Typography variant='h5'>{post.title}</Typography>
                                            <Typography variant='body1'>{post.description}</Typography>
                                            <Box sx={{ textAlign: 'center', my: 1 }}>
                                                <Button size='large' variant='contained' sx={{ borderRadius: 30 }}>Read More</Button>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
                <Grid item lg={2}>
                    <Box sx={{ ml: { lg: 4 } }}>
                        <Typography textAlign={"center"} variant='h5'>Archive</Typography>
                        {
                            archiveData.map((archive, i) => (<Typography sx={{mb: 2}} key={i}>
                                <Link href={"/"}>{archive}</Link>
                            </Typography>))
                        }
                    </Box>
                    <Box sx={{ ml: { lg: 4 } }}>
                        <Typography textAlign={"center"} variant='h5'>Categories</Typography>
                        {
                            categoriesData.map((archive, i) => (<Typography sx={{mb: 2}} key={i}>
                                <Link href={"/"}>{archive}</Link>
                            </Typography>))
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainBlogSection