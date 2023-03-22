import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import './Bumperrepair.css';
export default function Bumperrepair() {
  const scrollToView = () => {
    const serviceRef = document.getElementById('serviceRef');
    if (serviceRef) {
      serviceRef.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>

      <Stack className="services" sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex' } }}>

        <Stack sx={{ p: 0, textAlign: 'center' }}>
          <Grid className="captionBumperrepairHeader" sx={{ p: 2, pt: { xs: 5, sm: 20, md: 20 }, mt: 0, fontSize: 23, textShadow: '8 8 6 #000', color: '#FFFF' }}>
            <h1> Bumper Repair</h1>
            <p>
              Urgent Care Bumper Repair’s expertise is in restoring your damaged bumper to as it was new.
              If necessary, we can replace your parts whether they require paint to match the vehicle or a part that does not require any paint.
              If your new part does require paint, we have the ability to collect a color sample and color code along with the deposit for the part.
              Once painted, we will bring it to you or you can come to us for installation which takes one to two hours.
              Which gives you the ability to use your vehile while the part is being painted. No need to leave your vehicle at a shop for any reason (NO RENTAL CAR NEEDED).

            </p>
            <p></p>

            <Button className="btn-service" sx={{ pb: 0, fontSize: 20 }}>
              Get A Free Estimate
            </Button>
            <br />
            <Button className="btn-service" sx={{ pb: 0, fontSize: 20 }} onClick={()=>scrollToView()}>
              View Our Gallery
            </Button>
          </Grid>
        </Stack>
        <Stack sx={{ p:4, backgroundColor: '#333', textAlign: 'center' }}>
        <Typography id={"serviceRef"}  sx={{borderLeft:'dotted 1px #fff', borderRight:'dotted 1px #fff', color:'#fff', p:0}}>Our Work</Typography>
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
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="bumperrepair-swiper"
          >
            <SwiperSlide >
              <img src="assets/images/M4/069.jpg" className="captionImages" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/M4/070.jpg" className="captionImages" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/M4/071.jpg" className="captionImages" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/M4/072.jpg" className="captionImages" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/M4/073.jpg" className="captionImages" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/M4/074.jpg" className="captionImages" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/M4/075.jpg" className="captionImages" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/M4/076.jpg" className="captionImages" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/M4/077.jpg" className="captionImages" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/M4/078.jpg" className="captionImages" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/M4/079.jpg" className="captionImages" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/M4/080.jpg" className="captionImages" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
          
              <Box className="get-free-estimate"  sx={{mt:-6,height:800, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/M4/081.jpg)'}}>
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
        <Stack sx={{ p: 0, backgroundColor: '#f9fcff', textAlign: 'center' }}>
          <Box sx={{ pt: 0, pb: 2, display: 'flex', justifyContent: "center" }}><img className="logoSection" src="assets/images/logo2.png" alt="wrapkit" /></Box>
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
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="bumperrepair-swiper"
          >
            <SwiperSlide>
              <img src="assets/images/Car1/082.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/083.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/084.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/085.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/086.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/087.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/088.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/089.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/090.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/091.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/092.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/093.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/094.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/095.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/096.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Car1/097.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="get-free-estimate"  sx={{mt:-6,height:800, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/Car1/098.jpg)'}}>
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
        <Stack sx={{ p: 0, backgroundColor: '#f9fcff', textAlign: 'center' }}>
          <Box sx={{ pt: 0, pb: 2, display: 'flex', justifyContent: "center" }}><img className="logoSection" src="assets/images/logo2.png" alt="wrapkit" /></Box>
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
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="bumperrepair-swiper"
          >
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_1.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_2.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_3.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_4.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_5.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_6.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_7.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_8.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_9.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_10.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_11.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_12.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_13.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_14.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_15.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_16.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_17.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_18.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_19.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_20.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_21.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_22.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_23.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_24.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_25.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_26.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_27.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_28.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/Aptera/IMG_29.jpg"   className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
            <Box className="get-free-estimate"  sx={{mt:-6,height:670, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/Aptera/IMG_29.jpg)'}}>
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
        <Stack sx={{ p: 0, backgroundColor: '#f9fcff', textAlign: 'center' }}>
          <Box sx={{ pt: 0, pb: 2, display: 'flex', justifyContent: "center" }}><img className="logoSection" src="assets/images/logo2.png" alt="wrapkit" /></Box>
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
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="bumperrepair-swiper"
          >
            <SwiperSlide>
              <img src="assets/images/porsche/150.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="assets/images/porsche/151.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="assets/images/porsche/152.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="assets/images/porsche/153.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="assets/images/porsche/154.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="assets/images/porsche/155.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="get-free-estimate"  sx={{mt:-6,height:800, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/porsche/155.jpg)'}}>
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
        <Stack sx={{ p: 0, backgroundColor: '#f9fcff', textAlign: 'center' }}>
          <Box sx={{ pt: 0, pb: 2, display: 'flex', justifyContent: "center" }}><img className="logoSection" src="assets/images/logo2.png" alt="wrapkit" /></Box>
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
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="bumperrepair-swiper"
          >
            <SwiperSlide>
              <img src="assets/images/suv/1.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/suv/2.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/suv/3.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
             <img src="assets/images/suv/4.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
             <img src="assets/images/suv/5.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
             <img src="assets/images/suv/6.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
             <img src="assets/images/suv/7.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
             <img src="assets/images/suv/8.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
             <img src="assets/images/suv/9.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
             <img src="assets/images/suv/10.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
             <img src="assets/images/suv/11.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
             <img src="assets/images/suv/12.jpg"  className="captionImages" alt="..."/>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="get-free-estimate"  sx={{mt:-6,height:800, backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(assets/images/suv/12.jpg)'}}>
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
        <Stack sx={{ p: 0, backgroundColor: '#333', textAlign: 'center' }}>
          <Box sx={{ pt: 0, pb: 2, display: 'flex', justifyContent: "center" }}>
            <Link 
             component = {NavLink}
             to={'/service'}
             key={'/service'}
            href="" 
            className="bumperrepair-redirect-btn" >
              Return To Services
            </Link>
          </Box>
        </Stack>
      </Stack>

    </>
  );
}