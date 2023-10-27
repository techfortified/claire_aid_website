'use client'
import React, { useState } from 'react'
import { Box, FormControl, Grid, Paper, TextField, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { LoginUser } from '@/lib/auth'
import { mutate } from 'swr'
import { useRouter } from 'next/navigation'


const LoginSection = () => {
    const [state, setState] = useState({ username: '', password: '', message: '', isLoading: false })
    const router = useRouter()
    const handleInputChange = (ev) => {
        setState(prev => ({ ...prev, [ev.target.name]: ev.target.value }))
    }
    const handleLogin = async (ev) => {
        ev.preventDefault()
        if (!state.username || !state.password) {
            setState(prev => ({ ...prev, message: "All fields are required" }))
            setTimeout(() => {
                setState(prev => ({ ...prev, message: "" }))
            }, 3000);
            return
        }
        setState(prev => ({ ...prev, isLoading: true }))
        const result = await LoginUser({ username: state.username, password: state.password})
        setState(prev => ({ ...prev, message: result.message, isLoading: false}))
        console.log(result)
        if(!result.isError){
            await mutate("/auth_user", result.data, false)
            return router.push('/dashboard')
        }
    }



    return (
        <Box sx={{ p: { lg: 15 }, py: { sm: 15, xs: 15 }, px: { sm: 1, xs: 1 }, backgroundColor: '#F1F5F9' }}>
            <Grid container>
                <Grid item lg={5} xs={12} sm={12} sx={{ margin: "auto" }}>
                    <Paper elevation={4}>

                        <Box component={"div"} sx={{ p: 2, }}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1 },
                                    p: { lg: 4 }
                                }}
                                noValidate
                                autoComplete="off"

                            >
                                <Box>

                                    <FormControl sx={{ mb: 2, width: "100%" }}>
                                        <TextField sx={{ borderRadius: 2, outlineWidth: "none", backgroundColor: theme => theme.palette.common.white, color: theme => theme.palette.common.black, }} id="username" name='username' label="Enter Username*" variant="outlined" value={state.username} onChange={(ev) => handleInputChange(ev)} />
                                    </FormControl>

                                </Box>
                                <Box>

                                    <FormControl sx={{ mb: 2, width: "100%" }}>
                                        <TextField type='password' sx={{ borderRadius: 2, backgroundColor: theme => theme.palette.common.white, color: theme => theme.palette.common.black, }} id="password" name='password' label="Enter Password*" variant="outlined" value={state.password} onChange={(ev) => handleInputChange(ev)} />
                                    </FormControl>

                                </Box>

                                <Box>
                                    <Typography sx={{ color: theme => theme.palette.error.main }}>{state.message}</Typography>
                                </Box>

                                <Box>
                                    {/* loadingIndicator="Processing..." */}
                                    <LoadingButton size='large'  sx={{ borderRadius: 30, width: '100%' }} disabled={state.isLoading} onClick={(ev) => handleLogin(ev)} loading={state.isLoading}  variant="contained">
                                        Login
                                    </LoadingButton>
                                </Box>
                            </Box>

                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LoginSection