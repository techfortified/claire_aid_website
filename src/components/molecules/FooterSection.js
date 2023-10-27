"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const iconData = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram
}

const LANGUAGES = [
    {
        code: 'en-US',
        name: 'English',
    },
    {
        code: 'fr-FR',
        name: 'Français',
    },
];

const social = [{ name: "facebook", link: "facebook.com" }, { name: "instagram", link: "instagram.com" }, { name: "twitter", link: "twitter.com" }]

function Copyright() {
    return (
        <React.Fragment>
            {'© '}
            <Link color="inherit" href="#home">
                Claire Aid Foundation {new Date().getFullYear()}
            </Link>
        </React.Fragment>
    );
}

export default function FooterSection() {
    return (
        <Box component="footer" sx={{ bgcolor: 'primary.light' }}>
                <Container sx={{ display: 'flex' }}>
                
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4} md={4}>
                            <Typography sx={{color: "white"}} variant="h6" marked="left" gutterBottom>
                                Find Us
                            </Typography>
                            <Box>
                                <Grid container spacing={2}>
                                {social.map((s, k) => {
                                    const SocialIcon = iconData[s.name]
                                    return(
                                        <Grid lg={4} item key={k}>
                                            <IconButton sx={{border: theme => `1px solid ${theme.palette.secondary.main}`}}>
                                                <SocialIcon color="white" />
                                            </IconButton>
                                        </Grid>
                                        )
                                })}
                                </Grid>
                            </Box>
                            <Button passHref LinkComponent={Link} href={"/login"}  sx={{color: theme => theme.palette.common.white, mt: 2}}>
                                Click here to login
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={4} md={4}>
                            <Typography sx={{color: "white"}} variant="h6" marked="left" gutterBottom>
                                Legal
                            </Typography>
                            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                                <Box component="li" sx={{ py: 0.5 }}>
                                    <Link target='_blank' href={"/"}>Terms of Use</Link>
                                </Box>
                                <Box component="li" sx={{ py: 0.5 }}>
                                    <Link href="#privacyPolicy">Privacy Policy</Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={4} md={4}>
                            <Typography sx={{color: "white"}} variant="h6" marked="left" gutterBottom>
                                Language
                            </Typography>
                            <TextField
                                select
                                size="medium"
                                variant="standard"
                                SelectProps={{
                                    native: true,
                                }}
                                sx={{ mt: 1, width: 150 }}
                            >
                                {LANGUAGES.map((language, key) => (
                                    <option key={key} value={language.code}>
                                        {language.name}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>

                    </Grid>
                </Container>
            <Box p={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Copyright />
            </Box>
        </Box>
    );
}