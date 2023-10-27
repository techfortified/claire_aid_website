import React from 'react'
import { Box, Typography } from '@mui/material'
import { useMediaDeviceSizes } from '@/hooks'


const SiteTopSection = ({backgroundImage, title, subTitle = "" }) => {
  const {isDownMediumDevice} = useMediaDeviceSizes()

  return (
    <Box sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundBlendMode: "darken",
      backgroundPosition: 'center',
      backgroundSize: "cover",
      // backgroundAttachment: "fixed",
      backgroundBlendMode: "darken"
  }}>
      <Box component={"div"} sx={{ backgroundColor: "rgba(0,0,0,0.6)", height: isDownMediumDevice ? 250 : "100%", p: { lg: 15, xs: 2,  }, pt: {xs: 10} }}>
          <Typography sx={{ textTransform: "uppercase", textAlign: "center", color: theme => theme.palette.primary.light, fontFamily: "Playfair Display", mt: 3 }} variant={isDownMediumDevice ? 'h5' : 'h3'}>{title}</Typography>
          <Typography sx={{ color: theme => theme.palette.common.white, textAlign: 'center' }} variant={isDownMediumDevice ? 'h6' : 'h5'}>{subTitle}</Typography>
      </Box>
  </Box>
  )
}

export default SiteTopSection