import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);
    const { jwtToke } = useAuth();

    const handleonBlur = (e) => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = (e) => {
        const user = { email };
        fetch('http://localhost:7000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${jwtToke}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setAdminSuccess(true);
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <h2>Make an Admin </h2>
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    sx={{ mt: 2, width: '30%', }}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    onBlur={handleonBlur}
                    variant="standard" /> <br />

                <Button
                    sx={{ mt: 3, px: 5 }}
                    type="submit" variant="contained" >Make Admin</Button>
            </form>
            {/* set a success message by using MUI alert */}
            {
                adminSuccess && <Alert severity="success">Made Admin successfuly.</Alert>
            }
        </div>
    );
};

export default MakeAdmin;