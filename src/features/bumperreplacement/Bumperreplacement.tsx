import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import './Bumperreplacement.css';

export default function Bumperreplacement() {
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
            <Grid className="captionBumperreplacementHeader" sx={{ p:2,pt:{xs:0,sm:20,md:20}, mt:0, fontSize:{xs:18, sm:18, md:23}, textShadow:'8 8 6 #000', color:'#FFFF'}}>
            <h1 >Bumper Replacement</h1>
          <p>
            We can replace your parts whether they require paint to match the vehicle or a part that does not require any paint.
            If your new part does require paint, we have the ability to collect a color sample and color code along with the deposit for the part.
            Once painted, we will bring it to you or you can come to us for installation which takes one to two hours.
            Which gives you the ability to use your vehile while the part is being painted. No need to leave your vehicle at a shop for any reason (NO RENTAL CAR NEEDED).
            Urgent Care Bumper Repair Brings 20 Years Of Experience In The Field, And Guarantees The Best Possible Results When Replacing The Bumper On Your Car.
            You Will Think It Came Out Of The Factory Like That!
          </p>
         
          <Button className="btn-service" sx={{ pb:0, fontSize:20}}>
            Get A Free Estimate
          </Button>
            <br/>
          <Button className="btn-service" sx={{ pb:0, fontSize:20}}  onClick={()=>scrollToView()}>
                View Our Gallery
          </Button>
            </Grid>
          </Stack>
          <Stack  sx={{ p:4, backgroundColor: '#333', textAlign: 'center' }}>
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
            className="bumperreplacement-swiper"
          >
             <SwiperSlide>
              <img src="assets/images/bumper/1.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/bumper/2.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/bumper/3.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
           
            <SwiperSlide>
              <Box className="get-free-estimate"  sx={{mt:-6,height:800, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/bumper/3.jpg)'}}>
              <Typography component="h1" sx={{color:'#fff',textShadow:'4px 4px 5px #000;', position:'relative', top:{xs:50,sm:100}, fontSize:{xs:20, sm:32}}}><h1>Urgent Care Bumper Repair</h1></Typography>
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
            className="bumperreplacement-swiper"
          >
            <SwiperSlide>
              <img src="assets/images/BMW/IMG_1.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/BMW/IMG_2.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>

           
            <SwiperSlide>
              <Box className="get-free-estimate"  sx={{mt:-6,height:800, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/BMW/IMG_2.jpg)'}}>
              <Typography component="h1" sx={{color:'#fff',textShadow:'4px 4px 5px #000;', position:'relative', top:{xs:50,sm:100}, fontSize:{xs:20, sm:32}}}><h1>Urgent Care Bumper Repair</h1></Typography>
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
            className="bumperreplacement-swiper"
          >
             <SwiperSlide>
              <img src="assets/images/bumper2/1.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/bumper2/2.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/bumper2/3.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="get-free-estimate"  sx={{mt:-6,height:800, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/bumper2/3.jpg)'}}>
              <Typography component="h1" sx={{color:'#fff',textShadow:'4px 4px 5px #000;', position:'relative', top:{xs:50,sm:100}, fontSize:{xs:20, sm:32}}}><h1>Urgent Care Bumper Repair</h1></Typography>
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
            className="bumperreplacement-swiper"
          >
            <SwiperSlide>
              <img src="assets/images/car3/174.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/car3/186.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/car3/187.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/car3/190.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="get-free-estimate"  sx={{mt:-6,height:800, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/car3/190.jpg)'}}>
                <Typography component="h1" sx={{color:'#fff',textShadow:'4px 4px 5px #000;', position:'relative', top:{xs:50,sm:100}, fontSize:{xs:20, sm:32}}}><h1>Urgent Care Bumper Repair</h1></Typography>
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
              className="bumperreplacement-redirect-btn" >
              Return To Services
            </Link>
          </Box>
          </Stack>
          
        </Stack>
        </>
    );
}