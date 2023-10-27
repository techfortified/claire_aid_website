import { Box, Chip, Typography } from '@mui/material'
import React from 'react'

const tags = [
    "armthechildfoundation",
    "children",
    "childrensday",
    "claireaidfoundation",
    "Education",
    "funday",
    "jebbumiangoreads",
    "summercamp"
]

const TagsSection = () => {
    return (
        <Box sx={{ p: { lg: 15, md: 6, sm: 4, xs: 2 } }}>
            <Typography sx={{ 
                textAlign: "center", 
                textTransform: "uppercase", 
                color: theme => theme.palette.primary.light,
                pb: {lg: 4} 
                }} variant='h5'>
                Tags
            </Typography>
            <Box>
                {tags.map((tag, i) => (<Chip key={i} label={tag} variant="outlined" />))}
            </Box>
        </Box>
    )
}

export default TagsSection