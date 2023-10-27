import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const HomeInviteSection = ({description = ""}) => {
    return (
        <Box sx={{
            backgroundImage: "url(/ngo-carousel-1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: "cover",
            backgroundBlendMode: "darken"
        }}>
            <Box component={"div"} sx={{ backgroundColor: "rgba(0,0,0,0.6)", height: "100%", p: { lg: 20, md: 10, sm: 6, xs: 2 }, }}>
                <Box>
                <Typography sx={{ textTransform: "uppercase", textAlign: "center", color: theme => theme.palette.primary.light }} variant='h5'>Get involved</Typography>
                <Typography sx={{ color: theme => theme.palette.common.white, textAlign: 'center', fontFamily: "Playfair Display" }} variant='h5'>We've Reached 3000+ People Through Various Outreaches In Vulnerable Communities.</Typography>
                <Typography sx={{ color: theme => theme.palette.common.white, textAlign: 'center' }} variant='body1'>{description}</Typography>
                <Box sx={{my: 4, textAlign: 'center'}}>
                    <Button size='large'variant='contained' sx={{borderRadius: 30}}>Get Involved Now</Button>
                </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HomeInviteSection