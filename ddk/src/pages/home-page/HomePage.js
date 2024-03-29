import React from 'react';
import Navbar from './Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Cobain from './cobain.jpg'
import Rick from './rick.jpg'
import Thor from './thor.jpg'
import SwiperCore, { Autoplay,Pagination, Navigation, EffectFade, EffectCube, EffectCoverflow, EffectFlip} from "swiper"
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Autoplay, Pagination, Navigation,EffectCube,EffectCoverflow, EffectFlip]);

function HomePage() {
    return (
      <>
      <Navbar />
      <section class="hero is-fullheight">
            <Swiper className = "coverImage"
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation
                effect="fade"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide>
                    <img src={Thor}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src = {Cobain}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Rick}></img>
                </SwiperSlide>                
            </Swiper>       
        </section>
      </>
    );
  }
  
export default HomePage;