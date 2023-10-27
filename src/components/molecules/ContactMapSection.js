'use client'
import { Box } from '@mui/material'
import React from 'react'
import GoogleMapReact from 'google-map-react';
import MarkerIcon from '@mui/icons-material/Room';



const MarkerComponent = ({ text }) => <MarkerIcon />;

const ContactMapSection = () => {
    const defaultProps = {
        center: {
            lat: 9.0820,
            lng: 8.6753
        },
        zoom: 11
    };
    return (
        <Box sx={{ height: 500, width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <MarkerComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </Box>
    )
}

export default ContactMapSection