'use client'
import React from 'react'
import { Box } from '@mui/material'


const Spinner = ({ isVerticallyCenter = false }) => {
    if (isVerticallyCenter) {
        return (<Box sx={{
            margin: 0,
            zIndex: 99,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }} >
            <div class="loader"></div>

        </Box>)
    }
    return (<div class="loader"></div>)
}

export default Spinner