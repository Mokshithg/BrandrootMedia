// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // Note: Removed if not used
import 'swiper/css/scrollbar'; // Note: Removed if not used
import { Keyboard, Navigation, Autoplay } from "swiper/modules";
import useScreenSize from '../utils/screenSize';
// import TwoCardsEffect from '../components/TwoCardsEffect';
// import { LinearGradient } from 'react-text-gradients';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const youtubeVideos = [
  "https://www.youtube.com/embed/04pHWGEYH7A",
  "https://www.youtube.com/embed/LqaZIVCvjoo",
  "https://www.youtube.com/embed/7d2GxwGJU9I",
  "https://www.youtube.com/embed/r4aZ8SIADGA",
  "https://www.youtube.com/embed/ZS_scW7hlTc",
  "https://www.youtube.com/embed/f0f8U-SAqj4",
  "https://www.youtube.com/embed/yH3jiGWWi9I",
  "https://www.youtube.com/embed/L33jHbVtyRo",
  "https://www.youtube.com/embed/RqUYy1HE03g",
  "https://www.youtube.com/embed/Lp1_VVgLnJY"
];


const Popup = () => {
    const screenSize = useScreenSize()
  return (
    <div className="flex gap-20 my-14">
        <Swiper
          loop={true}
          slidesPerView={screenSize === "medium" || screenSize === "large"? 4 : 1}
          centeredSlides={false}
          spaceBetween={50}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
            520: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false, // Changed to false to allow interaction-based control
          }}
          modules={[Keyboard, Navigation, Autoplay]}
        >
          {youtubeVideos.map((url, i) => (
            <SwiperSlide key={i} className="video-card border-2 border-white-900 p-3 rounded-lg shadow-lg transform transition duration-500 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <iframe
                  src={url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  width={screenSize === "medium" || screenSize === "large"? "320" : "500"}
                  height={screenSize === "medium" || screenSize === "large"? "190" : "350"}
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                  autoPlay
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
          {/* Navigation buttons */}
          <div className="swiper-button-next text-slate-100 animate-bounce-left" style={{ color: 'white' }}></div>
          <div className="swiper-button-prev text-slate-100 animate-bounce-right btn-black" style={{ color: 'white' }}></div>
        </Swiper>
      </div>
  )
}

export default Popup