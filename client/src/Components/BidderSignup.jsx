import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Checkbox } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const BidderSignup = () => {
    const paperStyle = { padding: '30px 20px',height:'75vh', width: '60vw', margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const tfieldStyle= {width:'25vw', marginLeft:'15px', marginTop:'4px'}
    const marginTop = { marginTop: 5 }
    return (
        <>
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form style={{flexDirection:'row'}}>
                    <TextField style={tfieldStyle} label='Name' placeholder="Enter your name" />
                    <TextField style={tfieldStyle} label='Email' placeholder="Enter your email" type="email" />
                    <TextField style={tfieldStyle} label='Password' placeholder="Enter your Password" type='password'/>
                    <TextField style={tfieldStyle} label='Confirm Password' placeholder="Confirm Your Password"/>
                    <TextField style={tfieldStyle} label='Phone Number' placeholder="Enter your phone number" />
                    <TextField style={tfieldStyle} label='Address' placeholder="Enter your Address"/>
                    <TextField style={tfieldStyle} label='City' placeholder="Enter your City"/>
                    <TextField style={tfieldStyle} label='State' placeholder="State"/>
                    <TextField style={tfieldStyle} label='PinCode' placeholder="Pincode"/>
                    <TextField style={tfieldStyle} label='Account No'laceholder="Enter your Account No"/>
                    <TextField style={tfieldStyle} label='Adhaar No' placeholder="Enter your Adhaar No"/>
                    <TextField style={tfieldStyle} label='PAN No' placeholder="Enter your PAN No"/>

                    <FormControlLabel 
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                </form>
                <center><Button type='submit' variant='contained' color='primary'>Sign up</Button></center>
            </Paper>
        </Grid>
        </>
    )
}

export default BidderSignup;