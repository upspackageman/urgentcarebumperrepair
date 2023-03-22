import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import './Insurance.css'

export default function Insurance() {
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
            <Grid className="insuranceHeader" sx={{ p:2,pt:{xs:0,sm:12}, mt:0, fontSize:23, textShadow:'8 8 6 #000', color:'#FFFF'}}>
            <h1>Insurance</h1>
            <p>A lot of the time, the damage on your car is to be paid for by an insurance company, whether it was your accident or done by you by not fault of your own.</p>
          
            <p>UCBR works with ALL car insurance carriers and companies. We also honestly advise you whether it is best to move ahead with your claim or not; with a no obligation quote.</p>
          
            <p>Please contact us to furher advise you in your decision to file a claim or not. </p>
            <p>We'll take it from there so that you don't have to hassle with it.</p>
         
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
            className="insurance-swiper"
          >
            <SwiperSlide>
              <img src="assets/images/claim2/1.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/claim2/2.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="get-free-estimate"  sx={{mt:-6,height:800, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/claim2/2.jpg)'}}>
                <Typography component="h1"  sx={{color:'#fff',textShadow:'4px 4px 5px #000;', position:'relative', top:{xs:50,sm:100}, fontSize:{xs:20, sm:32}}}><h1>Urgent Care Bumper Repair</h1></Typography>
                <Link  
                       component = {NavLink}
                       to={'/estimate'}
                       key={'/estimate'}
                       href="" sx={{fontSize:{xs:20, sm:32}, top:{xs:25, sm:100}, position:'relative'}}
                       className="btn-service">
                  Get A Free Estimate
                </Link>
              </Box>
            </SwiperSlide>
          </Swiper>
          </Stack>
          <Stack sx={{ p:0, backgroundColor:'#f9fcff', textAlign:'center' }}>
            <Box sx={{ pt:0, pb:2, display:'flex', justifyContent:"center"}}><img className="logoSection" src="assets/images/logo2.png"  alt="wrapkit" /></Box>
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
            className="insurance-swiper"
          >
             <SwiperSlide>
              <img src="assets/images/claim1/1.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/claim1/2.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/claim1/3.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/claim1/4.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/claim1/5.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="get-free-estimate"  sx={{mt:-6,height:800, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/claim1/5.jpg)'}}>
                <Typography component="h1"  sx={{color:'#fff',textShadow:'4px 4px 5px #000;', position:'relative', top:{xs:50,sm:100}, fontSize:{xs:20, sm:32}}}><h1>Urgent Care Bumper Repair</h1></Typography>
                <Link  
                       component = {NavLink}
                       to={'/estimate'}
                       key={'/estimate'}
                       href="" sx={{fontSize:{xs:20, sm:32}, top:{xs:25, sm:100}, position:'relative'}}
                       className="btn-service">
                  Get A Free Estimate
                </Link>
              </Box>
            </SwiperSlide>
          </Swiper>
          </Stack>
          <Stack sx={{ p:0, backgroundColor:'#f9fcff', textAlign:'center' }}>
          <Box sx={{ pt:0, pb:2, display:'flex', justifyContent:"center"}}><img className="logoSection" src="assets/images/logo2.png"  alt="wrapkit" /></Box>
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
            className="insurance-swiper"
          >
            <SwiperSlide>
              <img src="assets/images/Insurance/07_Jetta/IMG_1.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/07_Jetta/IMG_2.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/07_Jetta/IMG_3.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/07_Jetta/IMG_4.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/07_Jetta/IMG_5.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/07_Jetta/IMG_6.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/07_Jetta/IMG_7.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/07_Jetta/IMG_8.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/07_Jetta/IMG_9.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/07_Jetta/IMG_10.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/07_Jetta/IMG_11.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/07_Jetta/IMG_12.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/07_Jetta/IMG_13.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/Insurance/images07_Jetta/IMG_14.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/Insurance/images/07_Jetta/IMG_15.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/Insurance/images/07_Jetta/IMG_16.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/Insurance/images/07_Jetta/IMG_17.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="get-free-estimate"  sx={{mt:-6,height:800, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/07_Jetta/IMG_17.jpg)'}}>
                <Typography component="h1"  sx={{color:'#fff',textShadow:'4px 4px 5px #000;', position:'relative', top:{xs:50,sm:100}, fontSize:{xs:20, sm:32}}}><h1>Urgent Care Bumper Repair</h1></Typography>
                <Link  
                       component = {NavLink}
                       to={'/estimate'}
                       key={'/estimate'}
                       href="" sx={{fontSize:{xs:20, sm:32}, top:{xs:25, sm:100}, position:'relative'}}
                       className="btn-service">
                  Get A Free Estimate
                </Link>
              </Box>
            </SwiperSlide>
          </Swiper>
          </Stack>
          <Stack sx={{ p:0, backgroundColor:'#f9fcff', textAlign:'center' }}>
          <Box sx={{ pt:0, pb:2, display:'flex', justifyContent:"center"}}><img className="logoSection" src="assets/images/logo2.png"  alt="wrapkit" /></Box>
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
            className="insurance-swiper"
          >
            <SwiperSlide>
              <img src="assets/images/Insurance/06_BMW_530i/IMG_1.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/06_BMW_530i/IMG_2.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/06_BMW_530i/IMG_3.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/06_BMW_530i/IMG_4.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/06_BMW_530i/IMG_5.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/06_BMW_530i/IMG_6.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/06_BMW_530i/IMG_7.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Insurance/06_BMW_530i/IMG_8.jpg"  className="captioninsuranceImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="get-free-estimate"  sx={{mt:-6,height:800, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/Insurance/06_BMW_530i/IMG_8.jpg)'}}>
                <Typography component="h1"  sx={{color:'#fff',textShadow:'4px 4px 5px #000;', position:'relative', top:{xs:50,sm:100}, fontSize:{xs:20, sm:32}}}><h1>Urgent Care Bumper Repair</h1></Typography>
                <Link  
                       component = {NavLink}
                       to={'/estimate'}
                       key={'/estimate'}
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
              className="insurance-redirect-btn" >
              Return To Services
            </Link>
          </Box>
          </Stack>
         
        </Stack>
        </>
    );
}