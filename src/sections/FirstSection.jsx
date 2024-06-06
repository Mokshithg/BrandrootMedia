import { LinearGradient } from "react-text-gradients";
import ImageCubeEffect from "../components/ImageCubeEffect";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TrustedBy from "../components/TrustedBy";


const images = {
  1: [
    "https://ik.imagekit.io/7saglhzb5/brandroot/Siddharth%20Bhat.png?updatedAt=1716364700298",
    "https://ik.imagekit.io/7saglhzb5/brandroot/lebo.png?updatedAt=1716364700368", 
    "https://ik.imagekit.io/7saglhzb5/brandroot/mad%20over%20growth.png?updatedAt=1716364700301",
  ],
  2: [
    "https://ik.imagekit.io/7saglhzb5/brandroot/gogo%20bethke.png?updatedAt=1716364700453",
    "https://ik.imagekit.io/7saglhzb5/brandroot/cindy%20lish.png?updatedAt=1716364700301",
    "https://ik.imagekit.io/7saglhzb5/brandroot/benjamin%20seda.png?updatedAt=1716364700217",
  ],
  3: [
    "https://ik.imagekit.io/7saglhzb5/brandroot/benjamin%20seda.png?updatedAt=1716364700217",
    "https://ik.imagekit.io/7saglhzb5/brandroot/benjamin%20Tarrolly.png?updatedAt=1716364700114",
    "https://ik.imagekit.io/7saglhzb5/brandroot/simon%20gee.png?updatedAt=1716364699598",
  ],
};

const brands = [
  {url : "https://ik.imagekit.io/7saglhzb5/brandroot/benjamin%20Tarrolly.png?updatedAt=1716364700114",name: "BenjaminTarrolly",platform: "YouTube"}, 
  {url :"https://ik.imagekit.io/7saglhzb5/brandroot/2.%20Barely%20Opinionated%20(Rohit).png?updatedAt=1716364700160", name : "Rohit", platform :"Instagram"},
  {url :"https://ik.imagekit.io/7saglhzb5/brandroot/benjamin%20seda.png?updatedAt=1716364700217", name: "BenjaminSeda", platform: "YouTube"},
  {url :"https://ik.imagekit.io/7saglhzb5/brandroot/cindy%20lish.png?updatedAt=1716364700301",name : "CindyLish", platform: "YouTube"},
  {url :"https://ik.imagekit.io/7saglhzb5/brandroot/simon%20gee.png?updatedAt=1716364699598",name : "SimonGee", platform: "Instagram"},
  {url :"https://ik.imagekit.io/7saglhzb5/brandroot/motilal%20oswal.png?updatedAt=1716364699459",name : "MotilalOswal", platform: "Instagram"},
  {url :"https://ik.imagekit.io/7saglhzb5/brandroot/mad%20over%20growth.png?updatedAt=1716364700301",name : "NitinBajaj", platform: "YouTube"},
  {url :"https://ik.imagekit.io/7saglhzb5/brandroot/Siddharth%20Bhat.png?updatedAt=1716364700298",name:"SiddharthBhat", platform:"YouTube"},
  {url :"https://ik.imagekit.io/7saglhzb5/brandroot/lebo.png?updatedAt=1716364700368",name : "Lebo", platform: "Instagram"},
  {url :"https://ik.imagekit.io/7saglhzb5/brandroot/gogo%20bethke.png?updatedAt=1716364700453",name : "GogoBethke", platform: "Instagram"}

];

const brandChannelMapping = {
  BenjaminTarrolly: "http://www.youtube.com/@Bentellect",
  BenjaminSeda : " https://www.youtube.com/@realbenjaminseda",
  Rohit : "https://www.instagram.com/barelyopinionated/",
  GogoBethke : "https://www.instagram.com/gogosrealestate/",
  SimonGee : "https://www.instagram.com/coffeewithsimon/",
  NitinBajaj   : "https://www.youtube.com/@MadOverGrowth",
  CindyLish  : "https://www.youtube.com/@CindyLish",
  Lebo : "https://www.instagram.com/springforth_englishacademy/",
  SiddharthBhat  : "https://www.youtube.com/@SiddharthBhat09",
  MotilalOswal : "https://www.instagram.com/motilaloswalgroup/"
}

function getChannelLink(brand) {
  const channelUrl = brandChannelMapping[brand.name];
  if (!channelUrl) {
    console.error("No channel found for this brand.");
    return null;
  }
  return channelUrl;
}


export default function FirstSection() {

  return (
    <div className="text-white md:my-44 my-16 mx-0 mt-0 mb-0">
      <div className="text-3xl md:text-5xl flex md:flex-row flex-col justify-between">
        <div className="">
          <div className="">
            <LinearGradient gradient={["to right","#fdde00,#fdde00"]} className="md:text-[6vh] text-[4vh] font-[700] font-poppins">
              Your One-Stop Solution <br/>for Content Creation Success
            </LinearGradient><br/>
            <div className="mt-8">
                <LinearGradient gradient={["to right","#ffffff,#ffffff"]} className="md:text-[4vh] text-[2vh] font-[300] font-poppins italic">
                  Taking content creation to the next level
                </LinearGradient>
            </div>
          </div>
          <div className="mt-10 lg:mt-44 ">
            <a href="https://calendly.com/brandrootmedia/collaborations" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-2xl font-poppins rounded-md shadow-sm text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 space-x-2">
              Schedule a Call
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
          </div>
        </div>
        <div className="relative left-[350px] top-32 md:top-0 md:left-[-80px] ">
          <div className="md:w-56 w-32 md:h-56 h-32 relative md:bottom-24 bottom-32 right-72 md:right-20">
            <ImageCubeEffect
              images={images[1]}
              style={"md:h-56 h-32 w-full object-cover rounded-full"}
            />
          </div>
          <div className="h-28 md:h-48 w-28 md:w-48 relative bottom-56 right-28 md:right-0 md:left-40">
            <ImageCubeEffect
              images={images[2]}
              style={"md:h-48 h-28 w-full object-cover rounded-full"}
            />
          </div>
          <div className="w-44 md:w-64 h-44 md:h-64 relative bottom-56 right-56 md:left-10">
            <ImageCubeEffect
              images={images[3]}
              style={"md:h-64 h-44 w-44 md:w-64 object-cover rounded-full"}
            />
          </div>
        </div>
      </div>

       <div className="my-8 -mt-24">
        <h1 className="text-3xl md:text-6xl font-poppins text-[4vh] font-[700]">
          <LinearGradient gradient={["to right", "#fdde00 ,#ffffff"]}>
            Trusted by
          </LinearGradient>
        </h1>
        <TrustedBy rotate={"rotate-[2deg]"}> 
          <Swiper
            loop={true}
            slidesPerView={4}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            autoplay={true}
            breakpoints={{
              769: {
                slidesPerView: 4,
                slidesPerGroup: 1,
              },
            }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            spaceBetween={120}
            modules={[Keyboard, Navigation, Autoplay]}
            className="mySwiper px-20 py-10"
          >
          {brands.map((brand, index) => {
            const channelLink = getChannelLink(brand);
            return (
              <SwiperSlide key={index} className="">
                  <a href={channelLink} target="_blank" rel="noopener noreferrer">
                    <img src={brand.url} className="h-44 w-44 object-contain mb-4" alt="" title={brand.name} />
                    {/* Uncomment and adjust the span for brand name visibility if needed */}
                    {/* <span className="hidden" data-name={brand.name}>{brand.name}</span> */}
                  </a>  
              </SwiperSlide>
            );
          })}
          <div className="swiper-button-next text-slate-100 animate-bounce-left" style={{ color: 'white' }}></div>
          <div className="swiper-button-prev text-slate-100 animate-bounce-right btn-black" style={{ color: 'white' }}></div>
          </Swiper>
        </TrustedBy>
      </div> 
    </div>
  );
}