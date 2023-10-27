'use client'
import { useMediaDeviceSizes } from '@/hooks';
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


const CarouselItem = ({ item }) => {
    const { isDownSmallDevice } = useMediaDeviceSizes()
    return (
        <Box sx={{ width: '100%', height: "100vh", backgroundImage: `url(${item.background})`, backgroundSize: "cover", backgroundBlendMode: "darken", backgroundAttachment: "fixed" }}>
            <Box component={"div"} sx={{ backgroundColor: "rgba(0,0,0,0.6)", height: "100%" }}>
                <Box component={"div"} sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'flex-start', height: '100%', flexDirection: 'column', pb: { md: 10, lg: 20 }, pt: { lg: 20 }, pr: { lg: 12, xs: 2 }, pl: { lg: 14, xs: 2 } }}>
                    <Box>
                        <Typography variant="p" component={"p"} sx={{ color: theme => theme.palette.common.white, }}>
                             {item.subtitle} 
                        </Typography>
                    </Box>
                        <Typography variant={isDownSmallDevice ? "h4" : "h2"} component={isDownSmallDevice ? "h2" : "h4"} sx={{ color: theme => theme.palette.common.white, pb: { md: 10, lg: 4 }, pt: { lg: 4 }, pr: { lg: 4 }, fontFamily: "Playfair Display" }}>

                            {item.title}
                        </Typography>
                        <Typography variant="p" sx={{ display: "block", color: theme => theme.palette.common.white, maxWidth: isDownSmallDevice ? '100%' : '50%', pb: { md: 10, lg: 4 }, pr: { lg: 4 } }}>
                            {item.description}
                        </Typography>
                    <Box sx={{ display: 'flex', gap: 5, mt: { xs: 3, sm: 3 } }}>
                        {item.buttons.map((i, index) => <Button sx={{ borderRadius: 30 }} size="large" key={index} variant={i.variant} href={i.link}>{i.title}</Button>)}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CarouselItem