import React from "react";
import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TextsmsIcon from '@mui/icons-material/Textsms';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';
export default function Footer() {

    const iconStyle ={
        width:30,
        height: 35,
        marginRight:5
    }

    const googleIconStyle ={
        width:30,
        height: 35,
        marginRight:5,
        fill: '#c01a2b'
    }

   
    
    return (
        <>
        
        <AppBar  sx={{position:'relative', top:100, left:0, right:0, margin:'0 auto',alignItems:'center',backgroundColor:'rgba(255,255,255,0)', boxShadow:'none'}}>
        <Toolbar>
            <Stack sx={{alignItems:'center'}}> 
            <img id="footerPaint" src="/assets/images/footer/paint_companies_logos.png"  alt=""/>
            
                <Link className="linkStyle" sx={{textDecoration:'none', mt:2, color:'#c01a2b'}} href="mailto:estimate@urgentcarebumperrepair.com?subject=Estimate from Urgent Care Bumper Repair"><EmailIcon  style={iconStyle}/><Typography component='span' position={'relative'} fontSize = {15} top={-13}>estimate@urgentcarebumperrepair.com</Typography></Link>
           
         
                <Link className="linkStyle" sx={{textDecoration:'none', mt:2, color:'#c01a2b'}} href="tel:18889874368"><CallIcon style={iconStyle}/><Typography component='span' position={'relative'} fontSize = {15} top={-13}>1-888-9-URGENT</Typography></Link>
          
        
                <Link className="linkStyle" sx={{textDecoration:'none', mt:2, color:'#c01a2b'}} href="tel:17609949400"><CallIcon style={iconStyle}/><Typography component='span' position={'relative'} fontSize = {15} top={-13}>760-994-9400</Typography></Link>
         
         
                <Link className="linkStyle" sx={{textDecoration:'none', mt:2, color:'#c01a2b'}} href="sms:17609949400"><TextsmsIcon style={iconStyle}/><Typography component='span' position={'relative'} fontSize = {15} top={-13}>760-994-9400</Typography></Link>
           
                <Box>
                    <Link className="linkStyle" href="https://www.facebook.com/109350284023723/posts/109392564019495/" target="_blank"><FacebookIcon style={googleIconStyle}/></Link>
                    <Link className="linkStyle" href="https://www.yelp.com/biz/urgent-care-bumper-repair-oceanside?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank"></Link>
                    <Link className="linkStyle" href="https://g.co/kgs/3WXYdw" target="_blank"><GoogleIcon style={googleIconStyle}/></Link>
                </Box>
                
      
            </Stack>
            </Toolbar>
      </AppBar>
      <Toolbar />
           

    
           
        </>
    );
}