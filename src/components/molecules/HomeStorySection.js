import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const HomeStorySection = () => {
    return (
        <Box sx={{
            backgroundImage: "url(/ngo-carousel-1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: 'fixed',
            backgroundBlendMode: "darken"
        }}>
            <Box component={"div"} sx={{ backgroundColor: "rgba(0,0,0,0.6)", height: "100%", p: { lg: 15, xs: 2, }, }}>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Box>
                            <Typography sx={{ textTransform: "uppercase", color: theme => theme.palette.primary.light }} variant='h5'>
                                FIND YOUR CLAIRE STORY
                            </Typography>
                            <Typography sx={{ color: theme => theme.palette.common.white }} variant='h6' color="text.common.white">
                                Claire Aid Foundation is more a story of individuals taking simple steps of obedience to God and growing in service of King and country and less of a long conceived dream. And a story of God sent donors and supporters who God is using to heal our world. Join us today and we hope you find your Claire Story. Watch our Lead Coordinator tell her Claire Story.
                            </Typography>
                            <Box mt={2}>
                                <Button size='large' sx={{ borderRadius: 30 }} variant='outlined'>Program Details</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6}>
                        <Box>
                            <Paper sx={{ backgroundColor: theme => theme.palette.primary.light, minHeight: 200 }}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1 },
                                        p: { lg: 4, xs: 2, md: 2, sm: 2 }
                                    }}
                                    noValidate
                                    autoComplete="off"

                                >
                                    <Box>
                                        <Grid container spacing={2}>
                                            <Grid item lg={6} md={12} sm={12} xs={12}>
                                                <FormControl sx={{ mb: 2, width: "100%" }}>
                                                    <TextField id="outlined-basic" label="Enter Name*" variant="outlined" />
                                                </FormControl></Grid>
                                            <Grid item lg={6} md={12} sm={12} xs={12}>
                                                <FormControl sx={{ mb: 2, width: "100%" }}>
                                                    <TextField id="outlined-basic" label="Enter Email*" variant="outlined" />
                                                </FormControl></Grid>
                                            <Grid item lg={6} md={12} sm={12} xs={12}>
                                                <FormControl sx={{ mb: 2, width: "100%" }}>
                                                    <TextField sx={{ borderRadius: 50, width: "100%" }} id="outlined-basic" label="Enter Phone Number*" variant="outlined" />
                                                </FormControl>
                                            </Grid>
                                            <Grid item lg={6} md={12} sm={12} xs={12}>
                                                <FormControl sx={{ mb: 2, width: "100%" }}>
                                                    <TextField sx={{ borderRadius: 50, width: "100%" }} id="outlined-basic" label="Enter Message *" variant="outlined" />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ textAlign: "center" }}>
                                        <Button size='large' sx={{ borderRadius: 30 }} variant='contained'>Get Involved Now</Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default HomeStorySection