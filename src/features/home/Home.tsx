
import { Grid,Button, Stack, Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import './Home.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TextsmsIcon from '@mui/icons-material/Textsms';
import CallIcon from '@mui/icons-material/Call';


export default function Home() {

 
  

  
 
    // ⛔️ Object is possibly 'null'.ts(2531)
   
    const scrollToView = () => {
      const serviceRef = document.getElementById('serviceRef');
      if (serviceRef) {
        serviceRef.scrollIntoView({ behavior: 'smooth' });
      }
    };
   
 
  

  return (
    <>
     
     <Box className="captionHeader" sx={{ p:0, backgroundColor:'grey' }} >
     <Stack className='overlay' sx={{p:6}}>  
      <Stack sx={{display: { xs: 'flex', sm: 'none' }, fontSize:23 }}>
      <h1>Urgent Care Bumper Repair</h1>
      <p>20 years of experience. Owner operated. We specialize in mobile bumper repair and bumper replacements or in house. all auto makes and models. We can come to you or you can come to us. </p>
        <Button className='btn alt' sx={{ p:3,pl:5, pr:5, mt:10 }}>
            <TextsmsIcon />
            </Button> 
            <Button className={'btn alt'} sx={{ p:3,pl:5, pr:5, mt:2 }}>
              <CallIcon />
            </Button> 
            <Button className='btn alt' sx={{ p:3,pl:5, pr:5, mt:2 }}
            component = {NavLink}
            to = '/estimate'
            key = '/estimate'
            >Free Estimate </Button>
            <Button className='btn alt' sx={{ p:3,pl:5, pr:5, mt:2 }} 
            onClick={()=>scrollToView()}
            >Services </Button>
        </Stack>
        
        <Stack className="contain" sx={{display: { xs: 'none', sm: 'flex', md:'flex' }  }}>
          <Typography sx={{color:'#fff', pt:10, fontSize:23}}>
          <h1>Urgent Care Bumper Repair</h1>
          <p>20 years of experience. Owner operated. We specialize in mobile bumper repair and bumper replacements or in house. all auto makes and models. We can come to you or you can come to us. </p>
          </Typography>
          <Button className='btn alt' sx={{ p:3,pl:5, pr:5, mt:10 }}
          component = {NavLink}
          to = '/estimate'
          key = '/estimate'
          >Free Estimate </Button>

          <Button className='btn' sx={{ p:3, mt:4,pl:5, pr:5 }}
          component = {NavLink}
          to = '/bumperrepair'
          key = '/bumperrepair'
          >Bumper Repair</Button>

          <Button className='btn' sx={{ p:3,mt:2,pl:5, pr:5 }}
          component = {NavLink}
          to = '/bumperreplacement'
          key = '/bumperreplacement'
          >Bumper Replacement</Button>

          <Button className='btn' sx={{ p:3,mt:2,pl:5, pr:5,   }}
          component = {NavLink}
          to = '/leasereturn'
          key = '/leasereturn'
          >Lease Return</Button>

          <Button className='btn' sx={{ p:3,mt:2,pl:5, pr:5,   }}
          component = {NavLink}
          to = '/insurance'
          key = '/insurance'
          >Insurance</Button>

          <Button className='btn' sx={{ p:3,mt:2,pl:5, pr:5,   }}
          component = {NavLink}
          to = '/process'
          key = '/process'
          >Process</Button>
        </Stack>

        

      </Stack>
     </Box>
      

      
      <Stack sx={{ p:4, backgroundColor:'#333',color:'#fff' ,textAlign:'center' }}>
       <Typography sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff', p:0}}>Testimonial</Typography> 
      </Stack>
      
        <Stack className="testimonial" sx={{ backgroundColor:'grey' }}>
        <Box className='testimonial-overlay' sx={{p:0,pt:5}}>
          <Swiper 
            effect={"coverflow"}
            init={true}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            navigation={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 0,
              modifier: 3,
              slideShadows: true,
            }}
            pagination={{ dynamicBullets: true,}}
            modules={[EffectCoverflow, Pagination,Navigation]}
            className="swiper"
          >
            <SwiperSlide>
              <Typography sx={{pl:2,pr:2}}>
              <h2 className="text"><q>Jared came highly recommended to me by my colleague, Steve. I needed him to repair my Porsche 911 that I don't trust to just anyone.
                Jared is meticulous when it comes to his craftsmanship on the repairs he does. He did a really great job and in a small amount of time.
                He also went out of his way to shuttle me from my home to work and back again, which was really helpful and made it easy on me.
                A few months after the repair, I had a second incident where the car rear got scuffed, I didn't hesitate to give Jared a call.
                He made it look better than new!</q></h2>
                <p></p>
              </Typography>
                <img className="testimonialImage" src="assets/images/Testimonials/stephen_alter.jpg"  alt="wrapkit" />
                      <p className="author">- Stephen Alter</p>
              
            
            </SwiperSlide>
            <SwiperSlide>
            <Typography sx={{pl:2,pr:2}}>
            <h2 className="text ml-3 mr-3"><q>Ace Parking has been using Urgent Care Bumper Repair for 7 or more years for our own customers. Its inevitable to have our self-parking customers get a scuff or scrape or two and we always refer them to Jared. Urgent Care Bumper Repair comes out to our lots and fixes the car on the spot, so it has been a win-win situation for all involved. Well, it wasn't too long before I had my own need for repair on my BMW M5. As the Owner of Ace, I always heard wonderful feedback about the work Jared did for our customers....</q></h2>
                <p></p>
            </Typography>
                <img className="testimonialImage"  src="assets/images/Testimonials/keith_jones.jpg" alt="wrapkit" />
                <p className="author">- Keith Jones</p>
            </SwiperSlide>
            <SwiperSlide>
              <Typography sx={{pl:2,pr:2}}>
                <h2 className="text ml-3 mr-3"><q>Jared fixed the damage on my jeep a couple of different times. I have had a couple accidents, but been very luck to know someone like Jared to call on when one happens.
                  He comes out to my house in Encinitas, takes just a couple of hours and my jeep looks as good as new when he is done. Its great to have his help, all I have to do is call him and I don't worry about it after that. He is so helpful, handling calls between insurance companies and dealers for parts, so that I don't have to... </q></h2>
                  <p></p>
              </Typography>
           
                <img className="testimonialImage"  src="assets/images/Testimonials/vicky_guillen.jpg" alt="wrapkit" />
                <p className="author">- Vicky Guillen</p>
            </SwiperSlide>
            <SwiperSlide>
            <Typography sx={{pl:2,pr:2}}>
                <h2 className="text ml-3 mr-3"><q>The quality of the job Jared did on my Audi is remarkable. He really paid attention to details and treated it like it was his own car. Its like the damage never happened.
                There are a lot of places out there to choose from, but this is the only guy I call because I have seen his work and he really knows what he is doing.
                Its so convenient too, He came to my home and in a few of hours it was beautifully done. I was so impressed that I referred him to repair my boss' Porsche and he did an awesome job on that too.</q></h2>
                <p></p>
            </Typography>
            
                <img className="testimonialImage"  src="assets/images/Testimonials/steve_shanahan.jpg"  alt="wrapkit" />
                <p className="author">- Steve Shanahan</p>
            </SwiperSlide>
          </Swiper>
          </Box>
        </Stack>
        <Stack  id={"serviceRef"} className="services contain" sx={{display: { xs: 'flex', sm: 'none' }}}>
          <Stack sx={{ p:4, backgroundColor:'#333', color:'#fff', textAlign:'center' }}>
          <Typography sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff', p:0}}>Services</Typography> 
          </Stack>
          <Stack  sx={{ p:0, textAlign:'center' }}>
            <Grid   className="captionServiceHomeHeader" sx={{ p:0, mt:0, fontSize:{xs:19,sm:23,md:23}, textShadow:'8 8 6 #000', color:'#FFFF'}}>
            <h1   >Services</h1>
            <p > The craftsmanship that I put into your repair is unparalleled by others. </p>
            <p >I take pride in my work and I will go out of my way to give you the best repair you are going to find. </p>
            </Grid>
          </Stack>
          <Stack sx={{ p:4, backgroundColor:'#333', color:'#fff', textAlign:'center' }}>
          <Typography sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff', p:0}}>Bumper Repair</Typography> 
          </Stack>
          <Stack sx={{ p:0, backgroundColor:'#5a4a42', textAlign:'center' }}>
            <Grid className="bumperrepair-home-caption" sx={{ p:2, mt:0, backgroundColor:'blue',fontSize:{xs:19,sm:23,md:23}, color:'#FFFF' }}>
            <h1>Bumper Repair</h1>
            <p>Urgent Care Bumper Repair’s expertise is in restoring your damaged bumper to as it was new.</p>
            <Button 
            className="btn-service"
            component = {NavLink}
            to = '/bumperrepair'
            key = '/bumperrepair'
            >
              Check Out Our Gallery Of Work!
            </Button>
            </Grid>
          </Stack>
          <Stack sx={{ p:4, backgroundColor:'#333',color:'#fff', textAlign:'center' }}>
          <Typography sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff', p:0}}> Bumper Replacement </Typography>
          </Stack>
          <Stack sx={{ p:0, backgroundColor:'#5a4a42', textAlign:'center' }}>
            <Grid className="bumperreplacement-home-caption" sx={{ pl:2, pr:2,mt:0, backgroundColor:'blue',fontSize:{xs:19,sm:23,md:23}, color:'#FFFF' }}>
            <h1>Bumper Replacement</h1>
          <p>Urgent Care Bumper Repair brings 20 years of experience in the field, and guarantees the best possible results when replacing the bumper on your car. You will think it came out of the factory like that!</p>
          <Button 
          className="btn-service"
          component = {NavLink}
          to = '/bumperreplacement'
          key = '/bumperreplacement'
          > Check Out Our Gallery Of Work! </Button>
            </Grid>
          </Stack>
          <Stack sx={{ p:4, backgroundColor:'#333', color:'#fff', textAlign:'center' }}>
          <Typography sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff', p:0}}>Lease Returns</Typography>
          </Stack>
          <Stack sx={{ p:0, backgroundColor:'#5a4a42', textAlign:'center' }}>
            <Grid className="leasereturn-home-caption" sx={{ p:0, mt:0, backgroundColor:'blue',fontSize:{xs:19,sm:23,md:23}, textShadow:'8 8 6 #000', color:'#FFFF' }}>
            <h1>Lease Return</h1>
            <p>I will work with you to receive approval and repair damages prior to turning in your leased vehicle, so you can be worry free. Let me restore your vehicle to a finished state and help you avoid the costly return repair charges.</p>
            <Button 
              className="btn-service"
              component = {NavLink}
              to = '/leasereturn'
              key = '/leasereturn'
            > Check Out Our Gallery Of Work! </Button>
            </Grid>
          </Stack>
          <Stack sx={{ p:4, backgroundColor:'#333',color:'#fff', textAlign:'center' }}>
          <Typography sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff', p:0}}>Insurance Claims</Typography>
          </Stack>
          <Stack sx={{ p:0, backgroundColor:'#5a4a42', textAlign:'center' }}>
            <Grid className="insuranceclaims-home-caption" sx={{ p:0, mt:0, backgroundColor:'blue',fontSize:{xs:19,sm:23,md:23}, textShadow:'8 8 6 #000', color:'#FFFF' }}>
              <h1>Insurance Claims</h1>
              <p>UCBR works with ALL car insurance carriers and companies.</p>
              <Button 
              className="btn-service"
              component = {NavLink}
              to = '/insurance'
              key = '/insurance'
            > Check Out Our Gallery Of Work! </Button>
            </Grid>
          </Stack>
          <Stack sx={{ p:4, backgroundColor:'#333',color:'#fff', textAlign:'center' }}>
          <Typography sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff', p:0}}>Process</Typography>
          </Stack>
          <Stack sx={{ p:0, backgroundColor:'#5a4a42', textAlign:'center',fontSize:{xs:19,sm:23,md:23}, textShadow:'8 8 6 #000', color:'#FFFF' }}>
            <Grid className="process-home-caption" sx={{ p:0, mt:0, backgroundColor:'blue' }}>
            <h1>Process</h1>
            <p>Your satisfaction is guaranteed by a lifetime warranty (as long as you own the car).</p>
            <Button 
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
