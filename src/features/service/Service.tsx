import { Button, Grid, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import './Service.css';
export default function Service() {
  const scrollToView = () => {
    const serviceRef = document.getElementById('serviceRef');
    if (serviceRef) {
      serviceRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <>
        <Stack className="services" sx={{display: { xs: 'flex', sm: 'flex', md:'flex' }}}>
          
          <Stack sx={{ p:0, textAlign:'center' }}>
            <Grid className="captionServiceHeader" sx={{ p:0,pt:{xs:10,sm:10, md:20}, mt:0, fontSize:23, textShadow:'8 8 6 #000', color:'#FFFF'}}>
            <h1 className="title">Services</h1>
            <p></p>
            <p > The craftsmanship that I put into your repair is unparalleled by others. </p>
            <p >I take pride in my work and I will go out of my way to give you the best repair you are going to find. </p>
                    <Button className="btn-service" sx={{ pb:0, fontSize:20}}  onClick={()=>scrollToView()}>
                View Our Services
          </Button>
            </Grid>
          </Stack>
          <Stack  id={"serviceRef"} sx={{ p:4, backgroundColor:'#333', textAlign:'center' }}>
          <Typography sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff',color:'#fff', p:0}}> Bumper Repair</Typography>
          </Stack>
          <Stack sx={{ p:0, backgroundColor:'#5a4a42', textAlign:'center' }}>
            <Grid className="bumperrepair-caption" sx={{ p:1, mt:0,pt:{xs:3, sm:10, md:20}, backgroundColor:'blue',fontSize:{xs:17,sm:23,md:23}, color:'#FFFF' }}>
            <h1>Bumper Repair</h1>
            <p>Urgent Care Bumper Repair’s expertise is in restoring your damaged bumper to as it was new.</p>
            <Button 
            className="btn-service"
            sx={{ pb:0, fontSize:{xs:15,sm:23,md:23}}}
            component = {NavLink}
            to = '/bumperrepair'
            key = '/bumperrepair'
           
            >
              Check Out Our Gallery Of Work!
            </Button>
            </Grid>
          </Stack>
          <Stack sx={{ p:4, backgroundColor:'#333', textAlign:'center' }}>
          <Typography sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff',color:'#fff', p:0}}>Bumper Replacement  </Typography>
          </Stack>
          <Stack sx={{ p:0, backgroundColor:'#5a4a42', textAlign:'center' }}>
            <Grid className="bumperreplacement-service-caption"   sx={{ p:1, mt:0,pt:{xs:0, sm:10, md:20},pb:{xs:55}, backgroundColor:'blue', color:'#FFFF' }}>
            <Typography sx={{fontSize:{xs:17,sm:23,md:23},pt:{xs:0}}}>
            <h1>Bumper Replacement</h1>
            <p>Urgent Care Bumper Repair brings 20 years of experience in the field, and guarantees the best possible results when replacing the bumper on your car. You will think it came out of the factory like that!</p>
            </Typography>
         
          <Button 
          className="btn-service"
          sx={{ pb:0, fontSize:{xs:15,sm:23,md:23}}}
          component = {NavLink}
          to = '/bumperreplacement'
          key = '/bumperreplacement'
          > Check Out Our Gallery Of Work! </Button>
            </Grid>
          </Stack>
          <Stack sx={{ p:4, backgroundColor:'#333', textAlign:'center' }}>
          <Typography sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff',color:'#fff', p:0}}>Lease Returns </Typography>
          </Stack>
          <Stack sx={{ p:0, backgroundColor:'#5a4a42', textAlign:'center' }}>
            <Grid 
            className="leasereturn-caption" 
            sx={{ p:2, mt:0,pt:{xs:0, sm:10, md:20}, backgroundColor:'blue',fontSize:23, color:'#FFFF' }}>
            <Typography sx={{fontSize:{xs:17,sm:23,md:23}}}>
              <h1>Lease Return</h1>
              <p>I will work with you to receive approval and repair damages prior to turning in your leased vehicle, so you can be worry free. Let me restore your vehicle to a finished state and help you avoid the costly return repair charges.</p>
            </Typography>
           
            <Button 
            sx={{ pb:0, fontSize:{xs:15,sm:23,md:23}}}
              className="btn-service"
              component = {NavLink}
              to = '/leasereturn'
              key = '/leasereturn'
            > Check Out Our Gallery Of Work! </Button>
            </Grid>
          </Stack>
          <Stack sx={{ p:4, backgroundColor:'#333', textAlign:'center' }}>
          <Typography sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff',color:'#fff', p:0}}>Insurance Claims</Typography>
          </Stack>
          <Stack sx={{ p:0, backgroundColor:'#5a4a42', textAlign:'center' }}>
            <Grid className="insuranceclaims-caption"  sx={{ p:2, mt:0,pt:{xs:7, sm:10, md:20}, backgroundColor:'blue',fontSize:{xs:17,sm:23,md:23}, color:'#FFFF' }}>
              <h1>Insurance Claims</h1>
              <p>UCBR works with ALL car insurance carriers and companies.</p>
              <Button 
              sx={{ pb:0, fontSize:{xs:15,sm:23,md:23}}}
              className="btn-service"
              component = {NavLink}
              to = '/insurance'
              key = '/insurance'
            > Check Out Our Gallery Of Work! </Button>
            </Grid>
          </Stack>
          <Stack sx={{ p:4, backgroundColor:'#333', textAlign:'center' }}>
          <Typography sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff',color:'#fff', p:0}}>Process</Typography>
          </Stack>
          <Stack sx={{ p:0, backgroundColor:'#5a4a42', textAlign:'center'}}>
            <Grid className="process-caption"  sx={{ p:2, mt:0,pt:{xs:7, sm:10, md:20}, backgroundColor:'blue',fontSize:{xs:17,sm:23,md:23}, color:'#FFFF' }}>
            <h1>Process</h1>
            <p>Your satisfaction is guaranteed by a lifetime warranty (as long as you own the car).</p>
            <Button 
              sx={{ pb:0, fontSize:{xs:15,sm:23,md:23}}}
              className="btn-service"
              component = {NavLink}
              to = '/process'
              key = '/process'
            > Check Out Our Gallery Of Work! </Button>
            </Grid>
          </Stack>
          <Stack sx={{ p:4, backgroundColor:'#333', textAlign:'center' }}>
            
          </Stack>
        </Stack>

    
        </>
        
    );
}