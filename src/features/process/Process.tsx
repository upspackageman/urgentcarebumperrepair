import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import './Process.css';

export default function Process() {
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
            <Grid  className="captionProcessHeader" sx={{ p:2,pt:{xs:0, sm:15},  fontSize:23,  color:'#FFFF'}}>
            <h1 >Process</h1>
            <p>The damaged area is designated and sectioned off by masking the rest of the car with tape and paper;</p>
            <p>The repair starts with reshaping and sanding down the damaged area;</p>
            <p>Depending on the amount of damage and its severity, polyurethane filler is added, if needed, to smooth out the surface;</p>
            <p>The area is then sanded to return the part to its original shape and integrity;</p>
            <p>2-3 layers of a primer/surfacer is applied;</p>
            <p>An infrared curing lamp is used to properly heat and cure the primer, then the primer is sanded, a final preparation of the surface is done;</p>
            <p>Next, the paint code is retrieved directly from your vehicle and used to achieve your car’s color match;</p>
            <p>Then between 5-12 coats of paint are applied to the repair, depending on the color;</p>
            <p>Once I feel the paint is dry enough, I remove the masking etc. for the paint to cure and inspect the final result for quality;</p>
            <p>Work area is cleaned up respectfully;</p>
            <p>All our refinishing services carry a lifetime cratftmanship warranty; </p>
         
          <Button  className="btn-service" sx={{ pb:0, fontSize:20}}>
            Get A Free Estimate
          </Button>
            <br/>
          <Button className="btn-service" sx={{ pb:0, fontSize:20}} onClick={()=>scrollToView()}>
                View Our Gallery
          </Button>
            </Grid>
          </Stack>
          <Stack sx={{ p:4, backgroundColor: '#333', textAlign: 'center' }}>
            <Typography id={"serviceRef"}sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff', color:'#fff', p:0}}>Our Work</Typography>
          </Stack>
          <Stack sx={{ p: 0, backgroundImage:'linear-gradient(rgba(238, 238, 238, 0.925), rgba(238, 238, 238, 0.925)),url(/../assets/images/home/background.jpg)',backgroundSize:'cover', height:{xs:300,sm:660,md:660}, textAlign: 'center' }}>
          <Swiper 
            effect={"coverflow"}
            init={true}
            loop={false}
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
            className="process-swiper"
          >
            <SwiperSlide>
              <img src="assets/images/process/0.jpg"  className="captionprocessImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/process/1.jpg"  className="captionprocessImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/process/2.jpg"  className="captionprocessImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/process/3.jpg"  className="captionprocessImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/process/4.jpg"  className="captionprocessImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/process/5.jpg"  className="captionprocessImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/process/6.jpg"  className="captionprocessImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/process/7.jpg"  className="captionprocessImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/process/8.jpg"  className="captionprocessImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/process/9.jpg"  className="captionprocessImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/process/10.jpg"  className="captionprocessImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/process/11.jpg"  className="captionprocessImages" alt="..."/>
            </SwiperSlide>
            
            <SwiperSlide>
              <Box className="get-free-estimate"  sx={{mt:-6,height:800, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/process/11.jpg)'}}>
                <Typography component="h1"  sx={{color:'#fff',textShadow:'4px 4px 5px #000;', position:'relative', top:{xs:50,sm:100}, fontSize:{xs:20, sm:32}}}><h1>Urgent Care Bumper Repair</h1></Typography>
                <Link  
                       component = {NavLink}
                       to={'/estimate'}
                       key={'/service'}
                       href="" sx={{fontSize:{xs:20, sm:32}, top:{xs:25, sm:100}, position:'relative'}}
                       className="btn-service">
                  Get A Free Estimate
                </Link>
              </Box>
            </SwiperSlide>
          </Swiper>
          </Stack>
          <Stack sx={{ p:0, backgroundColor:'#333', textAlign:'center' }}>
          <Box sx={{ pt: 0, pb: 2, display: 'flex', justifyContent: "center" }}>
            <Link 
              component = {NavLink}
              to={'/service'}
              key={'/service'}
              href="" 
              className="process-redirect-btn" >
              Return To Services
            </Link>
          </Box>
          </Stack>
        </Stack>
        </>
    );
}