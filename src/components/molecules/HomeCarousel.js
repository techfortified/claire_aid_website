import React, { Fragment } from 'react'
import config from '@/config';
import { Box } from '@mui/material';
import { CarouselItem } from '@/components/atoms';
import { Fade as Carousel } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const HomeCarousel = () => {
    return (
        <Box sx={{
            height: '100vh',
            backgroundColor: '#1e1e1e',
            backgroundRepeat: "no-repeat",
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: "cover",
            backgroundBlendMode: "darken"
        }}>

            <Box className="slide-container">
                <Carousel>
                    {
                        config.carouselItems.map((item, index) => <Fragment key={index}><CarouselItem item={item} /></Fragment>)
                    }
                </Carousel>
            </Box>
        </Box>
    )
}

export default HomeCarousel