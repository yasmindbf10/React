import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { TokenState } from '../../store/tokens/tokensReducer';
import {useDispatch} from 'react-redux';
import {addToken} from '../../../store/tokens/actions';
import { useSelector } from 'react-redux';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    var footerComponent;
    if (token != "") {
        footerComponent =
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='texto'>Converse também em: </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com" target="_blank">
                                <FacebookIcon className='redes' />
                            </a>
                            <a href="https://www.instagram.com" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='texto' >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="yasmindbfdez@yahoo.com.br">
                                <Typography variant="subtitle2" gutterBottom className='texto' align="center">yasmindbfdez@yahoo.com.br</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>


    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;