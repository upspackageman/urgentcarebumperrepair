import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import './Leasereturn.css';
export default function Leasereturn() {
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
            <Grid className="leaseReturnHeader" sx={{ p:2,pt:{xs:0,sm:20}, mt:0, fontSize:23, textShadow:'8 8 6 #000', color:'#FFFF'}}>
            <h1>Lease Return</h1>
          <p>
            Urgent Care Bumper Repair offers only the highest level of excellence,
            whether you’re looking for something minor or major to be done to your vehicle.
            With over 20 years of experience, I have seen it all and handled it all!
            I am dedicated to exceeding even your highest expectations, which will allow you to rest easy, knowing that the job is being done correctly and thoroughly the first time.
          </p>
         
          <Button className="btn-service" sx={{ pb:0, fontSize:20}}>
            Get A Free Estimate
          </Button>
            <br/>
          <Button className="btn-service" sx={{ pb:0, fontSize:20}} onClick={()=>scrollToView()}>
                View Our Gallery
          </Button>
            </Grid>
          </Stack>
          <Stack sx={{ p:4, backgroundColor: '#333', textAlign: 'center' }}>
            <Typography id={"serviceRef"} sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff', color:'#fff', p:0}}>Our Work</Typography>
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
            className="leaseReturn-swiper"
          >
            <SwiperSlide>
              <img src="assets/images/lexus1/246.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/247.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/248.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/249.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/250.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/251.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/252.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/253.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/254.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/255.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/257.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/258.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/259.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/260.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/261.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/262.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/263.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/264.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/265.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/266.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/267.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/268.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/269.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/270.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/271.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/lexus1/272.jpg"  className="captionleaseReturnImages" alt="..."/>
            </SwiperSlide>
 
            <SwiperSlide>
              <Box className="get-free-estimate"  sx={{mt:-6,height:800, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/lexus1/272.jpg)'}}>
                <Typography component="h1" sx={{color:'#fff',textShadow:'4px 4px 5px #000;', position:'relative', top:{xs:50,sm:100}, fontSize:{xs:20, sm:32}}}><h1>Urgent Care Bumper Repair</h1></Typography>
                <Link href="" sx={{fontSize:{xs:20, sm:32}, top:{xs:25, sm:100}, position:'relative'}}className="btn-service">
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
              className="leasereturn-redirect-btn" >
              Return To Services
            </Link>
          </Box>
          </Stack>
        </Stack>
        </>
    );
}