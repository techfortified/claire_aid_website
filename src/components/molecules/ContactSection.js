'use client'
import React from 'react'
import { Box, Button, FormControl, Grid, IconButton, Paper, TextField, Typography } from '@mui/material'
import MarkerIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';



const contactData = [
    {
        title: "Head Office Address",
        textData: ["Jebbu Miango Reads Drive, Jebbu Miango", "Kpatenvie, Kpachudu, Bassa LGA Plateau state.", "P.O.Box 2253"],
        icon: MarkerIcon
    },
    {
        title: "Contact Number",
        textData: ["Phone-no: +234 916 290 7811"],
        icon: PhoneIcon
    },
    {
        title: "Email Address",
        textData: ["Website: www.claireaid.org", "Email: claireaid.jmr@outlook.com", "info@claireaid.org"],
        icon: EmailIcon
    }
]

const ContactSection = () => {
    return (
        <Box sx={{ p: { lg: 15, md: 6, sm: 4, xs: 2 }, backgroundColor: '#F1F5F9' }}>
            <Typography variant='h5'>Contact Us</Typography>
            <Box>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <Box component="div">
                            <Box>
                            <Typography variant='h4' sx={{fontFamily: "Playfair Display"}}>Feel Free To Contact & Reach Us!</Typography>
                            <Typography variant='body1'>You can contact us for partnership, volunteer opportunities and to make enquiries.</Typography>
                            </Box>
                            <Grid container spacing={2}>
                                {
                                    contactData.map((contact) => {
                                        const MUIIcon = contact.icon
                                        return (<Grid key={contact.title} item lg={12} md={12} sm={12} xs={12} mb={1}>
                                            <Paper elevation={5} sx={{ p: 2, height: "100%" }}>
                                                <Grid container spacing={2}>
                                                    <Grid item lg={2} md={12} sm={12} xs={12}>
                                                        <Box sx={{display: 'block', textAlign: 'center'}}>
                                                        <IconButton sx={{ border: theme => `1px solid ${theme.palette.secondary.main}`, height: 60, width: 60 }}>
                                                            <MUIIcon color="primary" />
                                                        </IconButton>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item lg={10} md={12} sm={12} xs={12}>
                                                        <Typography variant='h5' sx={{fontFamily: "Playfair Display"}}>{contact.title}</Typography>
                                                        {contact.textData.map((textData) => (<Typography key={textData}>{textData}</Typography>))}
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>)
                                    })
                                }
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item lg={6}>
                        <Paper elevation={4} sx={{
                            backgroundImage: "url(/ngo-carousel-1.jpg)",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: 'center',
                            backgroundSize: "cover",
                            backgroundBlendMode: "darken",
                            height: "100%"
                        }}>

                            <Box component={"div"} sx={{ backgroundColor: "rgba(0,0,0,0.6)", height: "100%", p: { lg: 2 }, }}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1 },
                                        p: { lg: 4 }
                                    }}
                                    noValidate
                                    autoComplete="off"

                                >
                                    <Box>
                                        <Grid container spacing={2}>
                                            <Grid item lg={6} md={12} sm={12} xs={12}>
                                                <FormControl sx={{ mb: 2, width: "100%" }}>
                                                    <TextField sx={{ borderRadius: 2, outlineWidth: "none", backgroundColor: theme => theme.palette.common.white, color: theme => theme.palette.common.black, }} id="outlined-basic1" label="Enter Name*" variant="outlined" />
                                                </FormControl>
                                            </Grid>
                                            <Grid item lg={6} md={12} sm={12} xs={12}>
                                                <FormControl sx={{ mb: 2, width: "100%" }}>
                                                    <TextField sx={{ borderRadius: 2, backgroundColor: theme => theme.palette.common.white, color: theme => theme.palette.common.black, }} id="outlined-basic2" label="Enter Email*" variant="outlined" />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box>
                                        <Grid container spacing={2}>
                                            <Grid item lg={6} md={12} sm={12} xs={12}>
                                                <FormControl sx={{ mb: 2, width: "100%" }}>
                                                    <TextField sx={{ borderRadius: 2, backgroundColor: theme => theme.palette.common.white, color: theme => theme.palette.common.black, width: "100%" }} id="outlined-basic3" label="Enter Phone Number*" variant="outlined" />
                                                </FormControl>
                                            </Grid>
                                            <Grid item lg={6} md={12} sm={12} xs={12}>
                                                <FormControl sx={{ mb: 2, width: "100%" }}>
                                                    <TextField sx={{ borderRadius: 2, backgroundColor: theme => theme.palette.common.white, color: theme => theme.palette.common.black, width: "100%" }} id="outlined-basic4" label="Enter Subject*" variant="outlined" />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box>
                                        <FormControl sx={{ mb: 2, width: "100%" }}>
                                            <TextField
                                                sx={{ borderRadius: 2, backgroundColor: theme => theme.palette.common.white, color: theme => theme.palette.common.black }}
                                                id="outlined-multiline-static"
                                                label="Message"
                                                multiline
                                                rows={4}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ textAlign: "center" }}>
                                        <Button size='large' sx={{ borderRadius: 30 }} variant='contained'>Send Message</Button>
                                    </Box>
                                </Box>

                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ContactSection