import * as React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


function LoginPage() {
    const [data, setData] = useState({
        name: '',
        age: '',
        email: '',
        contactNumber: '',
        gender: '',
        city: '',
        password: ''
    }) 

    const handleChange = (event) => {
        let InputName = event.target.name
        let InputValue = event.target.value
        setData({ ...data, [InputName]: InputValue })
        console.log(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:3001/allUsers',
            data: data
        })
            .then(response => {
                console.log(response.status)
            })

    }

    
    return (
        <div>
            <form on onSubmit={(e)=>handleSubmit(e)}>
                <TextField id="name" name="name" label="Name" sx={{ m: 2 }} onChange={handleChange} />
                <TextField
                    id="age"
                    name='age'
                    label="Age"
                    type="number"
                    sx={{ m: 2 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChange}
                /><br />
                <TextField id="email" label="Email" name="email" sx={{ m: 2 }} onChange={handleChange} type='email'/>
                <TextField id="contactNumber" label="Contact number" name="contactNumber" sx={{ m: 2 }} onChange={handleChange} />
                <FormControl sx={{ m: 2 }}>
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="gender"
                        onChange={handleChange}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <FormControl sx={{ m: 2, minWidth: 120 }}>
                    <InputLabel >City</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="city"
                        label="City"
                        name="city"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value='jaipur '>Jaipur </MenuItem>
                        <MenuItem value='surat '>Surat </MenuItem>
                        <MenuItem value='pune '>Pune </MenuItem>
                        <MenuItem value='ahmedabad '>Ahmedabad </MenuItem>
                        <MenuItem value='hyderabad  '>Hyderabad  </MenuItem>
                        <MenuItem value='chennai  '>Chennai  </MenuItem>
                        <MenuItem value='kolkata '>Kolkata </MenuItem>
                        <MenuItem value='new-delhi  '> New Delhi  </MenuItem>
                        <MenuItem value='mumbai  '>Mumbai  </MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    sx={{ m: 2 }}
                    name="password"
                    onChange={handleChange}
                /><br />
                <Button variant="outlined" sx={{ m: 2 }} type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default LoginPage
