import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "../components/ServiceCard";
import { LinearGradient } from "react-text-gradients";
import ClientCard from "../components/ClientCard";
import { Keyboard, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const more_cards = [
  {
    h: "Vertical Content",
    p: "Our visual design experts will create aesthetic designs that stand out",
  },
  {
    h: "360 Youtube",
    p: "Ideate and create relatable videos that resonated with the audience in youtube",
  },
  {
    h: "360 Instagram",
    p: "End-to-end social media management to optimize content and drive engagement.",
  },
  {
    h: "Graphic Designing",
    p: "Graphic Designing specializes in crafting captivating the innovative ideas.",
  },
  {
    h: "Research & Writing",
    p: "For each content, we will do the research and write compelling copies for you.",
    images : "https://growthrocket.media/_next/image?url=%2Ft111.jpg&w=384&q=75"
  },
  {
    h: "Video Editing",
    p: "We will create captivating videos using fast paced video editing.",
  },
  {
    h: "Thumbnail Designing",
    p: "For each particular content we will design thumbnails accordingly",
  }
];


const clients = [
  {
    img: "https://ik.imagekit.io/7saglhzb5/brandroot/Siddharth%20Bhat.png?updatedAt=1716364700298",
    p: "The Brandroot team has been extremely supportive in helping in boosting my YouTube Channel. They were punctual and given the highest quality work possible.",
    name: "Siddharth Bhat",
  },
  {
    img: "https://ik.imagekit.io/7saglhzb5/brandroot/lebo.png?updatedAt=1716364700368",
    p: "BrandRoot Media specializes in crafting compelling digital experiences, leveraging cutting-edge technology to deliver high-quality web solutions that drive business growth and enhance customer engagement.",
    name: "Lebo",
    vid : "https://ik.imagekit.io/7saglhzb5/Brandroot-testimonial%20by%20Lebo%20(1).mp4?updatedAt=1716366013248"

  },
  {
    img: "https://growthrocket.media/_next/image?url=%2Ft3.jpeg&w=384&q=75",
    p: "Teaming up with Ayushman and Growth Rocket was a game changer for us. Their exceptional financial education videos for YouTube and Instagram not only showcased top-tier production but also drove virality, organically boosting our subscribers and followers. An outstanding collaboration!",
    name: "Shivani Muthanna",
  },
];

export default function Services() {
  return (
    <div className="mb-36" id="services">
      <h1 className="text-4xl md:text-[55px] font-kanit tracking-tight leading-[35px] md:leading-[60px]">
        Here's what <LinearGradient gradient={["to right", "#fdde00 ,#ffffff"]}>we will do for you</LinearGradient>
      </h1>
      <div className="flex gap-20 my-4 mt-16 gap-x-40 gap-y-40 px-4 md:px-8">
          <Swiper
            loop={true}
            slidesPerView={4}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 2000, // specify autoplay delay in milliseconds
              disableOnInteraction: true, // enable autoplay even after user interaction
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
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={75}
            modules={[Keyboard, Navigation, Autoplay]}
            className="mySwiper px-30 py-10"
          >
            {more_cards.map((e, i) => (
              <SwiperSlide key={i} className="">
                <ServiceCard
                  key={i}
                  h={e.h}
                  p={e.p}
                  className="flex justify-center items-center w-full h-full mx-2"
                  autoPlay
                  muted
                  controls
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next text-slate-100 animate-bounce-left"></div>
            <div className="swiper-button-prev text-slate-100 animate-bounce-right"></div>
          </Swiper>
        </div>

          <div className="my-36" id="clientwords">
        <h1 className="text-3xl md:text-[55px] font-kanit tracking-tight md:leading-[60px] mb-7 md:mb-17">
          Hear from our{" "}
          <LinearGradient gradient={["to right", "#fdde00,#ffffff"]}>
            Happy Clients
          </LinearGradient>{" "}    
        </h1>
        <Swiper>
          <div className="flex flex-wrap justify-around gap-4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {clients.map((client, index) => (
                <ClientCard
                  key={index}
                  img={client.img}
                  vid={client.vid}
                  p={client.p}
                  name={client.name}
                  comp={client.comp}
                />
              ))}
            </div>
          </div>
        </Swiper>
    </div>

    </div>
  );
}