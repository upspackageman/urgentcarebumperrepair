
import React, { useState,useRef, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import { Box, Button, Dialog, MenuItem, Stack, TextField } from "@mui/material";
import { CameraAlt } from '@mui/icons-material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HomeIcon from '@mui/icons-material/Home';
import UploadSharpIcon from '@mui/icons-material/UploadSharp';
import './Estimate.css';
import * as yup from 'yup';
import  {EstimateService}  from '../../app/services/estimate.service';
import { useFormik } from 'formik';
import { Result } from '../../app/models/result';



export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}
function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, open } = props;
  
    const handleClose = () => {
      console.log("Closed");
    };
  
    const handleListItemClick = (value: string) => {
      onClose(value);
    };
  
    return (
      <Dialog className="contact-dialog-service" sx={{display:'flex', justifyContent:'center'}} onClose={handleClose} open={open}>
        <Box sx={{ display:'flex', justifyContent:'center', mt:5}}><img className="thanks-logo" src={"/assets/images/logo2.png"} alt=""/></Box>
        <img className="thanks-image" src={"/assets/images/estimate/238a.png"}  alt=""/> 
        <Box sx={{m:5}}><h3>Thank You! I will get back to you within the business day. Or, within a few hours.</h3></Box>
        <Button sx={{mb:5, ml:15, mr:15, display: { xs: 'none', sm: 'flex' }}}
            
              className="contact-btn-service"
              component = {NavLink}
              to={'/'}
              key={'/'}
              onClick={() => handleListItemClick('addAccount')}
            >
              <HomeIcon sx={{mt:3, mb:3,width:'2em' ,height:'2em'}} />
            </Button>

        <Button sx={{mb:5, ml:5, mr:5, display: { xs: 'flex', sm: 'none', md: 'none' }}}
            
            className="contact-btn-service"
            component = {NavLink}
            to={'/'}
            key={'/'}
            onClick={() => handleListItemClick('addAccount')}
          >
            <HomeIcon sx={{mt:1, mb:1,width:'2em' ,height:'2em'}} />
          </Button>
           
      </Dialog>
    );
  }


  

export default function Estimate() {    

    /*const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');*/

    
    const year =[
      '1900',
      '1901',
      '1902',
      '1903',
      '1904',
      '1905',
      '1906',
      '1907',
      '1908',
      '1909',
      '1910',
      '1911',
      '1912',
      '1913',
      '1914',
      '1915',
      '1916',
      '1917',
      '1918',
      '1919',
      '1920',
      '1921',
      '1922',
      '1923',
      '1924',
      '1925',
      '1926',
      '1927',
      '1928',
      '1929',
      '1930',
      '1931',
      '1932',
      '1933',
      '1934',
      '1935',
      '1936',
      '1937',
      '1938',
      '1939',
      '1940',
      '1941',
      '1942',
      '1943',
      '1944',
      '1945',
      '1946',
      '1947',
      '1948',
      '1949',
      '1950',
      '1951',
      '1952',
      '1953',
      '1954',
      '1955',
      '1956',
      '1957',
      '1958',
      '1959',
      '1960',
      '1961',
      '1962',
      '1963',
      '1964',
      '1965',
      '1966',
      '1967',
      '1968',
      '1969',
      '1970',
      '1971',
      '1972',
      '1973',
      '1974',
      '1975',
      '1976',
      '1977',
      '1978',
      '1979',
      '1980',
      '1981',
      '1982',
      '1983',
      '1984',
      '1985',
      '1986',
      '1987',
      '1988',
      '1989',
      '1990',
      '1991',
      '1992',
      '1993',
      '1994',
      '1995',
      '1996',
      '1997',
      '1998',
      '1999',
      '2000',
      '2001',
      '2002',
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
    ].reverse();

    const makes = [
      {
        "num_models": 3,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Chrysler-logo-1.jpg",
        "max_car_id": 104,
        "id": 1,
        "name": "chrysler",
        "avg_horsepower": 291.3333333333333,
        "avg_price": 32971.666666666664
      },
      {
        "num_models": 8,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Honda-logo-1.jpg",
        "max_car_id": 152,
        "id": 2,
        "name": "honda",
        "avg_horsepower": 190.625,
        "avg_price": 27965
      },
      {
        "num_models": 18,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Mercedes-Benz-logo-1.jpg",
        "max_car_id": 270,
        "id": 3,
        "name": "mercedes-benz",
        "avg_horsepower": 333.94444444444446,
        "avg_price": 80681.94444444444
      },
      {
        "num_models": 6,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Ram-logo-1.jpg",
        "max_car_id": 307,
        "id": 4,
        "name": "ram",
        "avg_horsepower": 299.8333333333333,
        "avg_price": 31406.666666666668
      },
      {
        "num_models": 19,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Ford-logo-1.jpg",
        "max_car_id": 125,
        "id": 5,
        "name": "ford",
        "avg_horsepower": 281.2631578947368,
        "avg_price": 34998.68421052631
      },
      {
        "num_models": 9,
        "img_url": "http://ts2.mm.bing.net/th?id=OIP.M6d3b221e6c330e62efcd088e220170bcH0&pid=15.1",
        "max_car_id": 146,
        "id": 6,
        "name": "gmc",
        "avg_horsepower": 292.3333333333333,
        "avg_price": 40609.444444444445
      },
      {
        "num_models": 22,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Audi-logo-1.jpg",
        "max_car_id": 21,
        "id": 7,
        "name": "audi",
        "avg_horsepower": 340.59090909090907,
        "avg_price": 66631.81818181818
      },
      {
        "num_models": 7,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Subaru-logo-1.jpg",
        "max_car_id": 330,
        "id": 8,
        "name": "subaru",
        "avg_horsepower": 192.14285714285714,
        "avg_price": 27159.285714285714
      },
      {
        "num_models": 6,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Rolls-Royce-logo-1.jpg",
        "max_car_id": 315,
        "id": 9,
        "name": "rolls-royce",
        "avg_horsepower": 518.1666666666666,
        "avg_price": 394858.3333333333
      },
      {
        "num_models": 8,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Porsche-logo-1.jpg",
        "max_car_id": 301,
        "id": 10,
        "name": "porsche",
        "avg_horsepower": 475.25,
        "avg_price": 203787.5
      },
      {
        "num_models": 31,
        "img_url": "http://ts3.mm.bing.net/th?id=OIP.M599f5f2d4af1c69e6d3889e235b214beH0&pid=15.1",
        "max_car_id": 64,
        "id": 11,
        "name": "bmw",
        "avg_horsepower": 379.2258064516129,
        "avg_price": 74501.6129032258
      },
      {
        "num_models": 7,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Volvo-logo-1.jpg",
        "max_car_id": 371,
        "id": 12,
        "name": "volvo",
        "avg_horsepower": 285.2857142857143,
        "avg_price": 45967.857142857145
      },
      {
        "num_models": 5,
        "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mce36a6de2b649f08b6c612c1bcfbcf58H2&pid=15.1",
        "max_car_id": 236,
        "id": 13,
        "name": "lincoln",
        "avg_horsepower": 324.6,
        "avg_price": 45836
      },
      {
        "num_models": 4,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Maserati-logo-1.jpg",
        "max_car_id": 245,
        "id": 14,
        "name": "maserati",
        "avg_horsepower": 444,
        "avg_price": 139934
      },
      {
        "num_models": 4,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Acura-logo-1.jpg",
        "max_car_id": 3,
        "id": 15,
        "name": "acura",
        "avg_horsepower": 286.75,
        "avg_price": 45752.5
      },
      {
        "num_models": 2,
        "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mc8b9a49eb7febd5471812578a1c2e300o0&pid=15.1",
        "max_car_id": 254,
        "id": 16,
        "name": "mclaren",
        "avg_horsepower": 641,
        "avg_price": 272862.5
      },
      {
        "num_models": 8,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Infiniti-logo-1.jpg",
        "max_car_id": 177,
        "id": 17,
        "name": "infiniti",
        "avg_horsepower": 311.375,
        "avg_price": 45612.5
      },
      {
        "num_models": 3,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Fiat-logo-1.jpg",
        "max_car_id": 115,
        "id": 18,
        "name": "fiat",
        "avg_horsepower": 158.33333333333334,
        "avg_price": 24535
      },
      {
        "num_models": 6,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Scion-logo-1.jpg",
        "max_car_id": 319,
        "id": 19,
        "name": "scion",
        "avg_horsepower": 145.66666666666666,
        "avg_price": 20232.5
      },
      {
        "num_models": 7,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Dodge-logo-1.jpg",
        "max_car_id": 112,
        "id": 20,
        "name": "dodge",
        "avg_horsepower": 352.14285714285717,
        "avg_price": 42466.42857142857
      },
      {
        "num_models": 3,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Bentley-logo-1.jpg",
        "max_car_id": 67,
        "id": 21,
        "name": "bentley",
        "avg_horsepower": 540.3333333333334,
        "avg_price": 235800
      },
      {
        "num_models": 5,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Aston-Martin-logo-1.jpg",
        "max_car_id": 11,
        "id": 22,
        "name": "aston-martin",
        "avg_horsepower": 531,
        "avg_price": 199819
      },
      {
        "num_models": 19,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Chevrolet-logo-1.jpg",
        "max_car_id": 100,
        "id": 23,
        "name": "chevrolet",
        "avg_horsepower": 250.8421052631579,
        "avg_price": 33572.36842105263
      },
      {
        "num_models": 6,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Land-Rover-logo-1.jpg",
        "max_car_id": 206,
        "id": 24,
        "name": "land-rover",
        "avg_horsepower": 304,
        "avg_price": 60779.166666666664
      },
      {
        "num_models": 7,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Mitsubishi-logo-1.jpg",
        "max_car_id": 274,
        "id": 25,
        "name": "mitsubishi",
        "avg_horsepower": 152.14285714285714,
        "avg_price": 23680.714285714286
      },
      {
        "num_models": 12,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Volkswagen-logo-1.jpg",
        "max_car_id": 363,
        "id": 26,
        "name": "volkswagen",
        "avg_horsepower": 203.08333333333334,
        "avg_price": 29929.583333333332
      },
      {
        "num_models": 21,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Toyota-logo-1.jpg",
        "max_car_id": 339,
        "id": 27,
        "name": "toyota",
        "avg_horsepower": 209.23809523809524,
        "avg_price": 36709.76190476191
      },
      {
        "num_models": 6,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Jeep-logo-1.jpg",
        "max_car_id": 187,
        "id": 28,
        "name": "jeep",
        "avg_horsepower": 239.83333333333334,
        "avg_price": 33440.833333333336
      },
      {
        "num_models": 14,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Hyundai-logo-1.jpg",
        "max_car_id": 160,
        "id": 29,
        "name": "hyundai",
        "avg_horsepower": 246.5,
        "avg_price": 32676.428571428572
      },
      {
        "num_models": 13,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Cadillac-logo-1.jpg",
        "max_car_id": 76,
        "id": 30,
        "name": "cadillac",
        "avg_horsepower": 372.15384615384613,
        "avg_price": 61818.46153846154
      },
      {
        "num_models": 2,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Lamborghini-logo-1.jpg",
        "max_car_id": 199,
        "id": 31,
        "name": "lamborghini",
        "avg_horsepower": 665,
        "avg_price": 393025
      },
      {
        "num_models": 25,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Lexus-logo-1.jpg",
        "max_car_id": 222,
        "id": 32,
        "name": "lexus",
        "avg_horsepower": 290.32,
        "avg_price": 52488.2
      },
      {
        "num_models": 2,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Alfa-Romeo-logo-1.jpg",
        "max_car_id": 6,
        "id": 33,
        "name": "alfa-romeo",
        "avg_horsepower": 237,
        "avg_price": 59900
      },
      {
        "num_models": 6,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Mini-logo-1.jpg",
        "max_car_id": 242,
        "id": 34,
        "name": "mini",
        "avg_horsepower": 154.33333333333334,
        "avg_price": 27158.333333333332
      },
      {
        "num_models": 9,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Kia-logo-1.jpg",
        "max_car_id": 191,
        "id": 35,
        "name": "kia",
        "avg_horsepower": 216.11111111111111,
        "avg_price": 28725.555555555555
      },
      {
        "num_models": 4,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Ferrari-logo-1.jpg",
        "max_car_id": 118,
        "id": 36,
        "name": "ferrari",
        "avg_horsepower": 633,
        "avg_price": 276428
      },
      {
        "num_models": 6,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Mazda-logo-1.jpg",
        "max_car_id": 251,
        "id": 37,
        "name": "mazda",
        "avg_horsepower": 163.5,
        "avg_price": 22278.333333333332
      },
      {
        "num_models": 19,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Nissan-logo-1.jpg",
        "max_car_id": 283,
        "id": 38,
        "name": "nissan",
        "avg_horsepower": 251.21052631578948,
        "avg_price": 36314.73684210526
      },
      {
        "num_models": 3,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Buick-logo-1.jpg",
        "max_car_id": 68,
        "id": 39,
        "name": "buick",
        "avg_horsepower": 236.33333333333334,
        "avg_price": 31050
      },
      {
        "num_models": 6,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Jaguar-logo-1.jpg",
        "max_car_id": 183,
        "id": 40,
        "name": "jaguar",
        "avg_horsepower": 327.5,
        "avg_price": 63783.333333333336
      }
    ];
    
    
    
    

    const [models, setModels] = useState<Result[]>([]);
    
    
    
    
    
  
    const drag1 = useRef<HTMLDivElement>(null);
    const drag1_status = useRef<HTMLDivElement>(null);

    const drag2 = useRef<HTMLDivElement>(null);
    const drag2_status = useRef<HTMLDivElement>(null);

    const drag1_mobile = useRef<HTMLDivElement>(null);
    const drag1_mobile_status = useRef<HTMLDivElement>(null);

    const drag2_mobile = useRef<HTMLDivElement>(null);
    const drag2_mobile_status = useRef<HTMLDivElement>(null);

    const [image1,setImageFile] = useState<File | null>(null);
    const [image2,setImageFile1] = useState<File | null>(null);

    const [open, setOpen] = React.useState(false)!;

  
    const handleClickOpen = () => {
        console.log(open);
      setOpen(true);
     
    };
  
    const handleClose = (value: string) => {
      setOpen(false);
    };
    


    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const img = event.target.files!;
        const reader = new FileReader();
        const temp = drag1.current!;
        const temp2 = drag1_status.current!;
        const regex = /image/;
        setImageFile(img[0]);
        console.log(image1);

      

        if(temp2.childNodes[1] && (img[0].type)?.match(regex)){
          console.log('FRAAACK');
          reader.addEventListener("load", function () {
            console.log(temp2.childNodes[1]);
            temp2.childNodes[1].textContent ='Image Uploaded';
            temp.style.backgroundImage = `url(${ reader.result })`;
          },false);

          reader.readAsDataURL(img[0]);
        }      
        else if((img[0].type)?.match(regex)){ 
        reader.addEventListener("load", function () {
            const h3 = document.createElement('h3');
            h3.innerText = 'Image Uploaded';
            temp.style.backgroundImage = `url(${ reader.result })`;
            temp2.append(h3);
            console.log(reader);
            console.log(reader.result);
          }, false);
        
            reader.readAsDataURL(img[0]);
        }
        else{
          if(temp2.childNodes[1]){
            temp.style.backgroundImage = `url()`;
            temp2.childNodes[1].textContent='Invalid File!';
          }else{
            const h3 = document.createElement('h3');
            temp.style.backgroundImage = `url(${ reader.result })`;
            h3.innerText = 'Invalid File!';   
            temp2.append(h3);
          }
        }
    };

    const handleImageUpload2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const img = event.target.files!;
        const reader = new FileReader();
        const temp = drag2.current!;
        const temp2 = drag2_status.current!;
        const regex = /image/; 
        setImageFile1(img[0]);
        console.log(img[0].type);
        console.log(image2);

        if(temp2.childNodes[1] && (img[0].type)?.match(regex)){
          console.log('FRAAACK');
          reader.addEventListener("load", function () {
            console.log(temp2.childNodes[1]);
            temp2.childNodes[1].textContent ='Image Uploaded';
            temp.style.backgroundImage = `url(${ reader.result })`;
          },false);

          reader.readAsDataURL(img[0]);
        }      
        else if((img[0].type)?.match(regex)){ 
        reader.addEventListener("load", function () {
            const h3 = document.createElement('h3');
            h3.innerText = 'Image Uploaded';
            temp.style.backgroundImage = `url(${ reader.result })`;
            temp2.append(h3);
            console.log(reader);
            console.log(reader.result);
          }, false);
        
            reader.readAsDataURL(img[0]);
        }
        else{
          const h3 = document.createElement('h3');
          h3.innerText = 'Invalid File!';
          temp2.append(h3);
        }
    };


    const handleMobileImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const img = event.target.files!;
        const reader = new FileReader();
        const regex = /image/; 
        const temp = drag1_mobile.current!;
        const temp2 = drag1_mobile_status.current!;
        setImageFile(img[0]);
        console.log(img[0]);
        if(temp2.childNodes[1] && (img[0].type)?.match(regex)){
          console.log('FRAAACK');
          reader.addEventListener("load", function () {
            console.log(temp2.childNodes[1]);
            temp2.childNodes[1].textContent ='Image Uploaded';
            temp.style.backgroundImage = `url(${ reader.result })`;
          },false);

          reader.readAsDataURL(img[0]);
        }      
        else if((img[0].type)?.match(regex)){
        reader.addEventListener("load", function () {
          console.log(reader);
          console.log(reader.result);
            const h3 = document.createElement('h3');
            h3.style.fontSize='15px !important';
            console.log(reader);
            temp.style.backgroundImage = `url(${ reader.result })`;
            h3.innerText = 'Image Uploaded';
            temp2.append(h3);
          }, false);
      
            reader.readAsDataURL(img[0]);
        } 
        
       else{
        if(temp2.childNodes[1]){
          temp.style.backgroundImage = `url()`;
          temp2.childNodes[1].textContent='Invalid File!';
        }else{
          const h3 = document.createElement('h3');
          temp.style.backgroundImage = `url(${ reader.result })`;
          h3.innerText = 'Invalid File!';
          h3.style.fontSize='15px !important';          
          temp2.append(h3);
        }
         
        }
    };


    const handleMobileImageUpload2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const img = event.target.files!;
        const reader = new FileReader();
        const temp = drag2_mobile.current!;
        const temp2 = drag2_mobile_status.current!;
        const regex = /image/;
        setImageFile1(img[0]);
        console.log(img[0].type);
       
        if(temp2.childNodes[1] && (img[0].type)?.match(regex)){
          console.log('FRAAACK');
          reader.addEventListener("load", function () {
            console.log(temp2.childNodes[1]);
            temp2.childNodes[1].textContent ='Image Uploaded';
            temp.style.backgroundImage = `url(${ reader.result })`;
          },false);

          reader.readAsDataURL(img[0]);
        }      
        else if((img[0].type)?.match(regex)){
         
        reader.addEventListener("load", function () {
            const h3 = document.createElement('h3');
            h3.style.padding='0 0 0 0';
            temp.style.backgroundImage = `url(${ reader.result })`;
            if(temp2.childNodes[1]){
              h3.innerText = 'Image Uploaded';
            }
            else{
              
              h3.innerText = 'Image Uploaded';
              temp2.append(h3);
            }


            console.log(temp2.childNodes[1]);
            console.log(reader);
            console.log(reader.result);
          }, false);
      
           reader.readAsDataURL(img[0]);
        }
        else{
        
          if(temp2.childNodes[1]){
            temp.style.backgroundImage = `url()`;
            temp2.childNodes[1].textContent='Invalid File!';
          }else{
            const h3 = document.createElement('h3');
            temp.style.backgroundImage = `url(${ reader.result })`;
            h3.innerText = 'Invalid File!';
            h3.style.fontSize='15px !important';          
            temp2.append(h3);
          }
          
          console.log(temp2.childNodes[1]);
        }
    };

 
      
      const validationSchema = yup.object({
        name: yup
          .string()
          .required('Password is required'),
        email: yup
          .string()
          .email('Invalid email')
          .required('Email is required'),
        phone: yup
          .string()
          .matches(/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/i, 'Invalid Phone number')
          .required('Phone number is required'),
        make: yup
          .string()
          .required('Make of vehicle is required'),
        model: yup
          .string()
          .required('Model of vehicle is required'),
        year: yup
          .string()
          .matches(/^\d{4}$/i,'Year is invalid')
          .required('Year is required'),
        image1: yup
          .string()
          .required('An image is required'),
        image2: yup
          .string()
          .required('An image is required'),
      });

     
      function test(){
        console.log(models[0]);
      }
     

       async function GetAllModels(e:any){
                     
          const estimateService = new EstimateService();
          const data = await estimateService.getModels(e);
          const results = data.Results;
          setModels(results);
     
        console.log(results);
        test();
       } 
      
    

      
        const validate = useFormik({
          initialValues: {
            email:'',
            name:'',
            phone:'',
            make: '',
            model:'',
            year:'',
            image1:'',
            image2:''

          },
          validationSchema: validationSchema,
          onSubmit: (values) => {
            const formData = new FormData();
            formData.append('reqObj', JSON.stringify(values));
            formData.append('file1', values.image1);
            formData.append('file2', values.image2);
            const estimateService = new EstimateService();
            const response = estimateService.sendMessage(formData);
            handleClickOpen();
            console.log(response);
            
          },
        });
     
    
    return (
       
        <>

            <Stack className="estimate-page" sx={{ pt: 10, textAlign: 'center', color: '#fff' }}>
                <h1>Would you like a free estimate?</h1>
                <Stack sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex' }, pb:{xs:5},pt: 5, color: '#fff' }}>  
                        <img className="estimate-image" src={"/assets/images/estimate/238a.png"}  alt=""/>  
                </Stack>
        
                <Stack sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
                    <h1>Free Estimate Form</h1>
                    
                        <Stack 
                           onSubmit={validate.handleSubmit}
                            component="form"
                            noValidate
                            autoComplete="off"
                            sx={{pl:10, pr:10, pb:10,pt:2, 
                                '& > :not(style)': { m: 1, color:'red' },
                            }}  
                        >
                            <TextField 
                              id="outlined-basic name" 
                              label="Name" 
                              variant="outlined"  
                              value={validate.values.name} 
                              error={validate.touched.name && Boolean(validate.errors.name)}
                              helperText={validate.touched.name && validate.errors.name} 
                              onBlur={validate.handleBlur}
                              name="name"
                              onChange={validate.handleChange}/>
                            <TextField 
                              id="outlined-basic email" 
                              label="Email" 
                              variant="outlined" 
                              value={validate.values.email} 
                              error={validate.touched.email && Boolean(validate.errors.email)}
                              helperText={validate.touched.email && validate.errors.email} 
                              onBlur={validate.handleBlur}
                              name="email"
                              onChange={validate.handleChange}/>
                            <TextField id="outlined-basic phone" 
                              label="Phone" 
                              variant="outlined" 
                              value={validate.values.phone} 
                              error={validate.touched.phone && Boolean(validate.errors.phone)}
                              helperText={validate.touched.phone && validate.errors.phone} 
                              onBlur={validate.handleBlur}
                              name="phone"
                              onChange={validate.handleChange}/>
                             
                            <TextField 
                              id="outlined-basic"
                              className="btn-estimate-make-model" 
                              label="Make" 
                              variant="outlined" 
                              value={validate.values.make} 
                              error={validate.touched.make && Boolean(validate.errors.make)}
                              helperText={validate.touched.make && validate.errors.make} 
                              onBlur={validate.handleBlur}
                              name="make"
                              select
                              onChange={(event)=>{validate.handleChange(event); GetAllModels(event)}}>
                                 {makes.map((option) => (
                                <MenuItem sx={{justifyContent:'center','&:hover':{backgroundColor:'#C01A2B5C'}}} key={option.name} value={option.name}>
                                  {option.name}
                                </MenuItem>
                              ))}
                              </TextField>
                           
                                <TextField 
                                  id="outlined-basic" 
                                  label="Model" 
                                  variant="outlined" 
                                  select
                                  value={validate.values.model} 
                                  error={validate.touched.model && Boolean(validate.errors.model)}
                                  helperText={validate.touched.model && validate.errors.model} 
                                  onBlur={validate.handleBlur}
                                  name="model"
                                  onChange={validate.handleChange}>
                                       {
                                         models.map((option) => (
                                            <MenuItem sx={{justifyContent:'center'}} key={option.Model_Name} value={option.Model_Name}>
                                              {option.Model_Name}
                                            </MenuItem>
                                          ))
                                      }  
                                  </TextField>
                             <TextField 
                              id="outlined-basic" 
                              label="Year" 
                              select
                              variant="outlined" 
                              value={validate.values.year} 
                              error={validate.touched.year && Boolean(validate.errors.year)}
                              helperText={validate.touched.year && validate.errors.year} 
                              onBlur={validate.handleBlur}
                              name="year"
                              onChange={validate.handleChange}>
                              {year.map((option) => (
                                <MenuItem sx={{justifyContent:'center'}} key={option} value={option}>
                                  {option}
                                </MenuItem>
                              ))}
                              </TextField>
                             <Box  className = "box-line-img" ref={drag1}  sx={{height:460}}>
                                <input
                                type="file"
                                className="file-upload-input"
                                name="image1"
                                id="imageUpload"
                                accept="image/*" 
                                onBlur={validate.handleBlur}                           
                                onChange={(event) => { handleImageUpload(event); validate.setFieldValue("image1",event.currentTarget.files?.[0])}}
                                /> 

                                <div ref={drag1_status} className='drag-drop'>
                                         <UploadSharpIcon/>   
                                         {validate.touched.image1 && validate.errors.image1 && (
                                  <div>{validate.errors.image1}</div>
                                )}                                      
                                </div>
                               
                                
                            </Box>
                            
                            <Box  className = "box-line-img" ref={drag2} sx={{height:460}}>
                                <input
                                type="file"
                                className="file-upload-input"
                                name="image2"
                                id="imageUpload"
                                accept="image/*" 
                                onBlur={validate.handleBlur}                           
                                onChange={(event) => {const regex = /image/; if((event.currentTarget.files?.[0].type)?.match(regex)){ handleImageUpload2(event); validate.setFieldValue("image2",event.currentTarget.files?.[0]);console.log(event.currentTarget.files?.[0].type)}else{handleImageUpload2(event); console.log(event.currentTarget.files?.[0].type+": Not Valid")}}}
                                />
                            
                                   
                                     <div ref={drag2_status} className='drag-drop'>
                                         <UploadSharpIcon/>  
                                         {validate.touched.image2 && validate.errors.image2 && (
                                            <div>{validate.errors.image2}</div>
                                          )}                                     
                                     </div>
                                     
                            </Box>

                            <Button  className="estimate-btn-service" type="submit">< SendRoundedIcon sx={{fontSize:85}}/></Button>
                            
   
                        </Stack>
                  
                        
                    
                </Stack>
                <Stack sx={{ display: { xs: 'flex', sm: 'none', md: 'none' }, fontSize:22 }}>
                    <p>It’s very easy to get your FREE ESTIMATE.</p>
                    <p>Just snap a couple of photos of your damage with your digital camera or smart phone.</p>
                    
                   
                    <Stack sx={{p:1}}>
                        <p>Close up image of the damage.</p>
                        <img className="estimate-image" src="assets/images/estimate/207a.jpg"  alt="..."/>
                    </Stack>
                    <Stack sx={{p:1}}>
                        <p>Full shot of the vehicle and damage.</p>
                        <img className="estimate-image" src="assets/images/estimate/207.jpg" alt="..."/>
                        <p>Provide me your make, model and year.</p>
                        <p>I’ll always get back to you within the business day, usually within a few hours.</p>
                    </Stack>
                  
                        <Stack
                        onSubmit={validate.handleSubmit}
                        component="form"
                        noValidate
                        autoComplete="off"
                        sx={{p:1,
                            '& > :not(style)': { m: 1, color:'red' },
                        }}
                        >
                            <TextField 
                              id="outlined-basic name" 
                              label="Name" 
                              variant="outlined"  
                              value={validate.values.name} 
                              error={validate.touched.name && Boolean(validate.errors.name)}
                              helperText={validate.touched.name && validate.errors.name} 
                              onBlur={validate.handleBlur}
                              name="name"
                              onChange={validate.handleChange}/>
                            <TextField 
                              id="outlined-basic email" 
                              label="Email" 
                              variant="outlined" 
                              value={validate.values.email} 
                              error={validate.touched.email && Boolean(validate.errors.email)}
                              helperText={validate.touched.email && validate.errors.email} 
                              onBlur={validate.handleBlur}
                              name="email"
                              onChange={validate.handleChange}/>
                            <TextField id="outlined-basic phone" 
                              label="Phone" 
                              variant="outlined" 
                              value={validate.values.phone} 
                              error={validate.touched.phone && Boolean(validate.errors.phone)}
                              helperText={validate.touched.phone && validate.errors.phone} 
                              onBlur={validate.handleBlur}
                              name="phone"
                              onChange={validate.handleChange}/>
                            <TextField 
                              id="outlined-basic" 
                              label="Make" 
                              variant="outlined" 
                              select
                              value={validate.values.make} 
                              error={validate.touched.make && Boolean(validate.errors.make)}
                              helperText={validate.touched.make && validate.errors.make} 
                              onBlur={validate.handleBlur}
                              name="make"
                              onChange={(event)=>{validate.handleChange(event);  GetAllModels(event)}}>
                                {makes.map((option) => (
                                <MenuItem sx={{justifyContent:'center'}} key={option.name} value={option.name}>
                                  {option.name}
                                </MenuItem>
                              ))}
                              </TextField>
                            <TextField 
                              id="outlined-basic" 
                              label="Model" 
                              variant="outlined" 
                              select
                              value={validate.values.model} 
                              error={validate.touched.model && Boolean(validate.errors.model)}
                              helperText={validate.touched.model && validate.errors.model} 
                              onBlur={validate.handleBlur}
                              name="model"
                              onChange={validate.handleChange}>
                                {
                                  models.map((option) => (
                                      <MenuItem sx={{justifyContent:'center'}} key={option.Model_Name} value={option.Model_Name}>
                                        {option.Model_Name}
                                      </MenuItem>
                                    ))
                                }
                              </TextField>
                            <TextField 
                              id="outlined-basic" 
                              label="Year" 
                              variant="outlined"
                              select
                              value={validate.values.year} 
                              error={validate.touched.year && Boolean(validate.errors.year)}
                              helperText={validate.touched.year && validate.errors.year} 
                              onBlur={validate.handleBlur}
                              name="year"
                              onChange={validate.handleChange}>
                                {year.map((option) => (
                                <MenuItem sx={{justifyContent:'center'}} key={option} value={option}>
                                  {option}
                                </MenuItem>
                              ))}
                                           
                              </TextField> 
                            <Box className="mobile-file-upload-input"  ref={drag1_mobile} sx={{height:375}}>
                                <input
                                type="file"
                                className="file-upload-input"
                                accept="image/*"
                                onBlur={validate.handleBlur}                           
                                onChange={(event) => { handleMobileImageUpload(event); validate.setFieldValue("image1",event.currentTarget.files?.[0])}}                            
                                />
                                <div  ref={drag1_mobile_status} className={'drag-drop'}>
                                    < CameraAlt />
                                    {validate.touched.image1 && validate.errors.image1 && (
                                            <Box sx={{fontSize:15}}>{validate.errors.image1}</Box>
                                          )}
                                </div>
                            </Box>

                            <Box className="mobile-file-upload-input"  ref={drag2_mobile} sx={{height:350}}>
                                <input
                                type="file"
                                className="file-upload-input"
                                accept="image/*" 
                                onBlur={validate.handleBlur}                           
                                onChange={(event) => {const regex = /image/; if((event.currentTarget.files?.[0].type)?.match(regex)){ handleMobileImageUpload2(event); validate.setFieldValue("image2",event.currentTarget.files?.[0]);console.log(event.currentTarget.files?.[0].type)}else{handleMobileImageUpload2(event); console.log(event.currentTarget.files?.[0].type+": Not Valid")}}}                           
                                />
                                <div  ref={drag2_mobile_status} className={'drag-drop'}>
                                    < CameraAlt />
                                    {validate.touched.image2 && validate.errors.image2 && (
                                            <Box  sx={{fontSize:15}}>{validate.errors.image1}</Box>
                                          )}
                                </div>
                            </Box>
                            <Button  className="estimate-btn-service" type="submit" >< SendRoundedIcon sx={{fontSize:55}}/></Button>
                        </Stack>  
                </Stack>
             
            </Stack>
            <SimpleDialog
                    open={open}
                    onClose={handleClose}
                />            
        </>

    );
  }



