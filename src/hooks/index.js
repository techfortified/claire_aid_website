import { useMediaQuery, useTheme } from "@mui/material"

export const useMediaDeviceSizes = () => {
    const theme = useTheme()
    const isDownMediumDevice = useMediaQuery(theme.breakpoints.down("md"))
    const isDownXtraSmallDevice = useMediaQuery(theme.breakpoints.down("xs"))
    const isDownSmallDevice = useMediaQuery(theme.breakpoints.down("sm"))
    const is600To800Device = useMediaQuery(theme.breakpoints.between(600, 800))


    return {isDownMediumDevice,isDownXtraSmallDevice,isDownSmallDevice,is600To800Device}
}