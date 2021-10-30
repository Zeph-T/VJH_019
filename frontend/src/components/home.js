import React from 'react'
import Navbar from './navbar'
import ImageGallery from './imageGallery'
import Cutlet from './cutlet'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Image from '../images/image.svg'
function Home() {
    var matches = useMediaQuery('(min-width:900px)');
    console.log(matches);
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center',height : '100vh',justifyContent : 'center'}}>
            <div style={{display:'flex',alignItems:'center' }}>
            <img style={{maxWidth : '40rem' , width : '100%' , textAlign : 'right'}} src={Image} />
            <Cutlet />
            </div>
           
        </div>
    )
}

export default Home
