import MainPage from "./pages/MainPage";
import Horizontalpage2 from "./pages/Horizontalpage2";
import Horizontalpage3 from "./pages/Horizontalpage3";

import Verticalpage2 from "./pages/Verticalpage2";
import Verticalpage3 from "./pages/Verticalpage3";
import Verticalpage4 from "./pages/Verticalpage4";

import { useCallback } from "react";
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper React components

import{ Mousewheel, Keyboard } from "swiper";

// Import css
import Appbutton from "./ui/Appbutton";
import MainAppbutton from "./ui/MainAppbutton";
import "./App.css";



export default function App() {

  const [swiper, setSwiper] = useState();

  const component1Click=()=>{
    // component1.current.scrollIntoView({ behavior:'smooth'})
    swiper.slideTo(1);
  };

  const component2Click=()=>{
    swiper.slideTo(2);
  };

  const component3Click=()=>{
    swiper.slideTo(3);
  };

  return (
    <div>
        <Swiper
            slidesPerView={1} 
            direction={"vertical"}
            mousewheel 
            keyboard 
            modules={[ Mousewheel, Keyboard]} 
            speed={500} 
            onSwiper={(swiper)=> setSwiper(swiper)}
            allowTouchMove={"false"}
            touchRatio={0}    
          >
           <SwiperSlide>

            <Swiper      
              slidesPerView={1}           
              keyboard 
              modules={[ Mousewheel, Keyboard]} 
              speed={500} 
              allowTouchMove={"false"}    
              touchRatio={0}           
             >
                <SwiperSlide > 
                  <MainAppbutton onClick={component1Click}>1</MainAppbutton>
                  <MainAppbutton onClick={component2Click}>2</MainAppbutton>
                  <MainAppbutton onClick={component3Click}>3</MainAppbutton>             
                 </SwiperSlide>
                
                <SwiperSlide><Horizontalpage2/></SwiperSlide>
                <SwiperSlide><Horizontalpage3/></SwiperSlide>
                
            </Swiper>

          </SwiperSlide>
                <SwiperSlide><Verticalpage2/></SwiperSlide>
                <SwiperSlide><Verticalpage3/></SwiperSlide>
                <SwiperSlide><Verticalpage4/></SwiperSlide>            
        </Swiper>
    </div>
    );
  }

  

 
 
 
 
 
 
 
 
 
 
 
  // const component1 = useRef(null);
  // const component2 = useRef(null);
  // const component3 = useRef(null);
 
 
 
  //   const handleScroll = useCallback((num) => {
//    switch(num) {
//      case 1: 
//        if(component1.current)
//          component1.current.scrollIntoView({ behavior:'smooth'});
//          break;
//         default:
//      case 2:
//        if(component2.current) {
//           window.scrollTo(0, component2.current.getBoundingClientReact().y);
//        }
//          break;
       

//      case 3:
//        if(component3.current) 
//          component3.current.scrollIntoView({ behavior:'smooth'});
//          break;
               
//         }
            
//  }, []);



// direction={"vertical"}
// mousewheel // ????????? ??? ????????? ???????????????.
// keyboard // ????????? ???????????? ?????? ????????? ???????????????.
// modules={[ Mousewheel, Keyboard]} // ????????????, ????????? ?????? ??????????????? ????????? import????????? ?????????.
// slidesPerView={"auto"} // ????????? ???????????? ???????????? ???????????????.
// speed={500} // ??????????????? ???????????? ????????? ???????????????. ????????? ms?????????.
// onSwiper={(swiper)=> setSwiper(swiper)}
// allowTouchMove={"false"}
// touchRatio={0} // ?????? ??????
// // threshold={20} // ?????? ????????? ???????????????. ????????? ????????? ????????? ???????????? ????????????.      