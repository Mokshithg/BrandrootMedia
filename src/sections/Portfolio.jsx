// import { useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
// import useScreenSize from "../utils/screenSize"; // Custom hook for detecting screen size
// import "swiper/css"; // Import Swiper styles
// import "swiper/css/pagination"; // Import pagination styles
// import TwoCardsEffect from "../components/TwoCardsEffect"; // Import custom effect component
// import { LinearGradient } from 'react-text-gradients';

// // const vids = [vid1, vid2, vid3, vid4, vid5, vid6];

// const vids = [
//   "https://youtu.be/-vMAaciUmr4?si=w9IIZ7_ABeQbS5AM", // Example YouTube video URL
//   // "https://www.youtube.com/watch?v=3tmd-ClpJxA",
//   // "https://www.youtube.com/watch?v=HvUfjVqRyL4",
//   // "https://www.youtube.com/watch?v=K2IuEoGdMxI",
//   // "https://www.youtube.com/watch?v=3tmd-ClpJxA",
//   // "https://www.youtube.com/watch?v=HvUfjVqRyL4"
// ];

// function useYoutube(callback) {
//   useEffect(() => {
//     if (!window.YT) {
//       return new Promise(resolve => {
//         var tag = document.createElement('script');
//         tag.src = 'https://www.youtube.com/iframe_api';
//         var firstScriptTag = document.getElementsByTagName('script')[0];
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//         tag.onload = resolve;
//       }).then(callback).catch(console.error);
//     } else {
//       callback();
//     }
//   }, []);
// }

// export default function Portfolio() {
//   const screenSize = useScreenSize();
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     const swiperInstance = Swiper.swiperInstances[swiperRef.current];
//     if (!swiperInstance) return;

//     console.log(swiperInstance);

//     swiperInstance.on('slideChange', () => {
//       const currentSlideIndex = swiperInstance.activeIndex;
//       const videoElement = document.getElementById(`video-${currentSlideIndex}`);
//       if (videoElement) {
//         const player = new YT.Player(videoElement, {
//           height: screenSize === "medium" || screenSize === "large"? "190" : "350",
//           width: screenSize === "medium" || screenSize === "large"? "320" : "500",
//           videoId: vids[currentSlideIndex].split('=')[1],
//           playerVars: {
//             'autoplay': 1,
//             'mute': 1
//           },
//           events: {
//             'onReady': function(event) {
//               event.target.playVideo();
//             },
//           },
//         });
//       }
//     });
//   }, [vids, screenSize]);

//   useYoutube(() => {
//     console.log("YouTube Player API script has been loaded.");
//   });



//   return (
//     <div id="portfolio" className="mx-5 mb-36">
//       <h1 className="text-[30px] md:text-[55px] font-kanit tracking-tight leading-[32px] md:leading-[60px]">
//         We create the highest quality content for brands.{" "}
//         <LinearGradient gradient={["to right", "#fdde00 ,#ffffff"]}>
//           And we will do the same for you
//         </LinearGradient>
//       </h1>
//       <div className="flex gap-20 my-14">
//       <Swiper
//           ref={swiperRef}
//           loop={true}
//           slidesPerView={screenSize === "medium" || screenSize === "large"? 4 : 1}
//           centeredSlides={false}
//           spaceBetween={32}
//           grabCursor={true}
//           className="mySwiper"
//           freeMode={true}
//         >
//           {vids.map((url, i) => (
//             <SwiperSlide key={i} className="border-2 border-red-900 p-1 rounded-md">
//               <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
//                 <div id={`video-${i}`} style={{ position: 'absolute', top: 0, left: 0 }}></div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <div>
//       <div>
//           <h1 className="text-[30px] md:text-[55px] font-kanit tracking-tight leading-[32px] md:leading-[60px] mt-36">
//             Numbers that speak{" "}
//             <LinearGradient gradient={["to right", "#fdde00,#ffffff"]}>
//               louder than words
//             </LinearGradient>
//           </h1>
//           <div>
//             <TwoCardsEffect
//               rotate1={"-rotate-[0deg]"}
//               rotate2={"rotate-[0deg]"}>
//               <div className="py-7">
//                 <div className="text-black text-4xl flex md:flex-row flex-col gap-10 md:justify-around font-kanit">
//                   <p className="text-center">
//                     20 M+ <br/>{" "}
//                     <span className="text-2xl">Audience</span>
//                   </p>
//                   <p className="text-center">
//                     100 M+ <br />{" "}
//                     <span className="text-2xl">Views</span>
//                   </p>
//                   <p className="text-center">
//                     200,000+ <br />{" "}
//                     <span className="text-2xl">Hours Watchtime</span>
//                   </p>
//                 </div>
//               </div>
//             </TwoCardsEffect>
//           </div>
//           <div className="flex justify-center">
//             <a href="https://calendly.com/brandrootmedia/collaborations" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-6 py-2 border text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
//                   Schedule a Call
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









import { LinearGradient } from "react-text-gradients";
import vid1 from "../assets/videos/1.mp4";
import vid2 from "../assets/videos/2.mp4";
import vid3 from "../assets/videos/3.mp4";
import vid4 from "../assets/videos/4.mp4";
import vid5 from "../assets/videos/5.mp4";
import vid6 from "../assets/videos/6.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import useScreenSize from "../utils/screenSize";
import "swiper/css";
import "swiper/css/pagination";
import TwoCardsEffect from "../components/TwoCardsEffect";

const vids = [vid1, vid2, vid3, vid4, vid5, vid6];

export default function Portfolio() {
  const screenSize = useScreenSize();
  return (
    <div id="portfolio" className="mx-5 mb-36">
      <h1 className="text-[30px] md:text-[55px] font-kanit tracking-tight leading-[32px] md:leading-[60px]">
        We create the highest quality content for brands.{" "}
        <LinearGradient gradient={["to right", "#fdde00 ,#ffffff"]}>
          And we will do the same for you
        </LinearGradient>
      </h1>
      <div className="flex gap-20 my-14">
        <Swiper
          loop={true}
          slidesPerView={
            screenSize === "medium" || screenSize === "large" ? 4 : 1
          }
          centeredSlides={false}
          spaceBetween={32}
          grabCursor={true}
          className="mySwiper"
          freeMode={true}
        >
          {vids.map((e, i) => (
            <SwiperSlide
              key={i}
              className="border-2 border-red-900 p-1 rounded-md"
            >
              <video
                src={e}
                className=""
                width={
                  screenSize === "medium" || screenSize === "large"
                    ? "320"
                    : "500"
                }
                height={
                  screenSize === "medium" || screenSize === "large"
                    ? "190"
                    : "350"
                }
                autoPlay
                muted
                controls
              ></video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
      <div>
          <h1 className="text-[30px] md:text-[55px] font-kanit tracking-tight leading-[32px] md:leading-[60px] mt-36">
            Numbers that speak{" "}
            <LinearGradient gradient={["to right", "#fdde00,#ffffff"]}>
              louder than words
            </LinearGradient>
          </h1>
          <div>
            <TwoCardsEffect
              rotate1={"-rotate-[0deg]"}
              rotate2={"rotate-[0deg]"}>
              <div className="py-7">
                <div className="text-black text-4xl flex md:flex-row flex-col gap-10 md:justify-around font-kanit">
                  <p className="text-center">
                    20 M+ <br/>{" "}
                    <span className="text-2xl">Audience</span>
                  </p>
                  <p className="text-center">
                    100 M+ <br />{" "}
                    <span className="text-2xl">Views</span>
                  </p>
                  <p className="text-center">
                    200,000+ <br />{" "}
                    <span className="text-2xl">Hours Watchtime</span>
                  </p>
                </div>
              </div>
            </TwoCardsEffect>
          </div>
          <div className="flex justify-center">
             <a href="https://calendly.com/brandrootmedia/collaborations" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-6 py-2 border text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                   Schedule a Call
             </a>
           </div>
        </div>
      </div>
    </div>
  );
}