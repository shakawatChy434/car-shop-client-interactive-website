import { ButtonBase, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import errorImg from '../../images/notfound-img/notfound.png'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const NotFound = () => {
    return (
        <Typography>
            <ButtonBase
                sx={{ mt: 8, width: '100 %', height: '100 %' }}>
                <Img alt="complex" src={errorImg} />
            </ButtonBase>

        </Typography>
    );
};

export default NotFound;