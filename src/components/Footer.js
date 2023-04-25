import './CSS/Footer.css'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const Footer =()=>{

    return(
        <div className='Footer_All'>
            <div className='Footer_Me'>NAME : Lee MinHo <br/> <br/> E-MAIL : krs1994@naver.com <br/><br/> PHONE : 010 - 5620 - 9103</div>

            <div className='Footer_SNS'>
                <div className='Footer_Twitter'>  <a href="https://twitter.com/" > <TwitterIcon style={{fontSize : "2em" , color : "white"}}/></a></div>
                <div className='Footer_Facebook'><a href="https://facebook.com/"><FacebookIcon style={{fontSize : "2em" , color : "white"}}/></a></div>
                <div className='Footer_Instargram'><a href="https://www.instagram.com/" ><InstagramIcon style={{fontSize : "2em" , color : "white"}}/></a></div>
            </div>
            <div className='Footer_Up'><a href="#Body_All"><ArrowUpwardIcon style={{color : "white"}}/></a></div>
        </div>
    );
};

export default Footer;
