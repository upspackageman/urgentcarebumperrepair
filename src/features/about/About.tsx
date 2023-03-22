import { Button, Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import './About.css';
import SmsIcon from '@mui/icons-material/Sms';
import MailIcon from '@mui/icons-material/Mail';

export default function About() {
    return (
        <Stack className="about-page" sx={{pt:{xs:5,sm:15},pl:4,pr:4,pb:15, textAlign:'center', color:'#fff'}}>
        <h1>Welcome</h1>
        <br/>
        <Typography
         sx={{lineHeight:{xs:1.5,sm:2}, fontSize:20}}
        >
        <p>
       Welcome and thank you for visiting my company website!
       My name is Jared and I'm the Owner, Operator and Paint Specialist of URGENT CARE BUMPER REPAIR.
       I began my professional career as a partner in a bumper repair company that pioneered the industry of mobile auto body and paint back in 2001, before forming my own company, URGENT CARE BUMPER REPAIR in 2004.
       When you call URGENT CARE BUMPER REPAIR, I personally answer the phone and I personally do all of the repairs on your vehicle.
       It is revolutionary to bring the QUALITY of a body shop repair at a VALUE of nearly HALF the cost and the CONVENIENCE of the work completed at your home or place of business in a matter of hours versus days at a shop!
       I am proud to say that I was one of the first to bring this service to San Diego and have built a reputation through professionalism and many satisfied clients.
       I have twenty plus years of professional experience and almost all of my business comes by way of referrals.
       That is the best compliment I can ever receive, the confidence that my clients have to refer their friends, family and colleagues to me.
       I am located in North San Diego County, which makes it easy to service my clients in North County, and surrounding areas.
       I have worked on everything from touching up mirrors to blending bumpers, to replacing fenders to collision work.
       I work on all makes and models.  I have even worked on cutting-edge prototypes, boats and motorcycles.
       One specialty of mine to note is perfecting your lease return vehicle to help save you money instead of putting it into the pocket of the dealer.
       Using my service also helps insure the quick sale of your car by putting it in “just like new” condition for the buyer to notice.
       And let’s say that you are just like me and love your car and want to keep it forever, looking pristine in your driveway.
       Call me for any imperfections that you want eliminated.
       Cars are my passion and I respect every single one that I am trusted to work on.
       You might be asking yourself, “Why do I choose URGENT CARE BUMPER REPAIR instead of any other company out there?”
       Well, I’m so glad you asked.  I understand how frustrating it can be to schedule work on your car, and the convenience of my service will make a huge difference for you.
       I work with you and your insurance company (if they are involved) and get the job done quickly, and most importantly, looking great.
       The craftsmanship that I put into your repair is unparalleled by others.  I take pride in my work and I will go out of my way to give you the best repair you are going to find.
       I give you a lifetime warranty on the craftsmanship of the repair for as long as you own your car.
       It’s very easy to get your FREE ONLINE OR PHONE ESTIMATE, simply text or call just snap a couple of photos of your damage with your phone and email or text your make, model and year to me at by clicking the links below:
       </p>
        </Typography>
        
         <p><Link sx={{textDecoration: 'none', color:'red'}} href="mailto:estimate@urgentcarebumperrepair.com?subject=Estimate from Urgent Care Bumper Repair"><MailIcon  sx={{fontSize:80}}></MailIcon> </Link></p>
         <p><Link sx={{textDecoration: 'none', color:'red'}} href="sms:17609949400"><SmsIcon sx={{fontSize:80}}></SmsIcon></Link></p>
         <Typography
         sx={{lineHeight:2, fontSize:20}}
        > 
        <p>
         
        along with your name, phone number and best time to call.
        I’ll always get back to you within the business day, usually within a few minutes.
        Now that you know a little about me, some questions may have come up. For your individual concerns, feel free to call me any time at <Link   sx={{textDecoration: 'none', color:'red'}} href="tel:17609949400"><> 760-994-9400</></Link > or toll free at 888-9-URGENT.
        I also have a lot of colleagues in the industry that I refer work to in the fields of windshield replacement/repair, paintless dent removal, clear bra, wheel and rim repair, detailing and mechanics.
        Feel free to contact me by email for a referral!
        Now and always, THANK YOU FOR YOUR BUSINESS!
        </p>
        </Typography>
        <Button sx={{display:'flex' ,fontSize:20, ml:{xs:0, md:30},mr:{xs:0, md:30}, mt:{xs:7, md:5}, color:'#ffff', borderRadius:50}} className="btn-service" href={"#"}>Checkout out our services!</Button>

        </Stack>
    );
}