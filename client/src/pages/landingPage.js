import React, { useState, useContext, Link } from 'react';
import {  Button } from 'react-bootstrap';

import PostContext from '../utils/PostContext';
import AuthService from '../utils/auth';
import PostCard from '../components/PostCard/PostCard';

function LandingPage() {

return(
    <>
    <h1>hi</h1>
    <Button href={'/frontpage'} >Front Page </Button>
    </>
)

}

export default LandingPage;