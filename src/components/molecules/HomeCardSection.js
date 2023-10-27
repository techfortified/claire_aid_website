import config from '@/config'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';

const cardItems = config.homeCardItems
const HomeCardSection = () => {
    return (
        <Box sx={{backgroundColor: '#F1F5F9', p: {lg: 4, xs: 2}}}>
            <Box sx={{m: {lg: 15}}}>
            <Grid container spacing={2}>
                {cardItems.map((item, index) => <Grid lg={4} key={index} >
                    <Card elevation={5} sx={{ width: "100%", height: "100%" }}>
                        <CardContent>
                            <Box sx={{textAlign: 'center'}}>
                                <Icon style={{fontSize: 120}} color="primary" >{item.icon}</Icon>
                            </Box>
                            <Typography variant='h4' sx={{ textAlign: "center", fontFamily: "Playfair Display" }}  gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography variant="body2">
                                {item.description}
                            </Typography>
                        </CardContent>
                        <Box sx={{display: 'block', textAlign: 'center', m: 4}}>
                            <Button size="large" variant='contained' sx={{borderRadius: 30}}>{item.btnText}</Button>
                        </Box>
                    </Card>
                </Grid>)}
            </Grid>
        </Box>
        </Box>
    )
}

export default HomeCardSection