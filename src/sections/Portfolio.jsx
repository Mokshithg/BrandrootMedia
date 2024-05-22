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
            <a href="https://calendly.com/brandrootmedia/collaborations" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}