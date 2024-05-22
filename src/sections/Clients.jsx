// import { Swiper, SwiperSlide } from "swiper/react";
import Swiper from "swiper";
// import ServiceCard from "../components/ServiceCard";
import { LinearGradient } from "react-text-gradients";
import ClientCard from "../components/ClientCard";
// import { Keyboard, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";


const clients = [
    {
      img: "https://growthrocket.media/_next/image?url=%2Ft111.jpg&w=384&q=75",
      p: "We partnered with Growth Rocket to create a new social media page about Poker education. They didn't just craft a comprehensive social media strategy for our Poker education page, but also flawlessly executed content from conception to delivery. An exemplary team that genuinely drives results!",
      name: "Varun Ganjoo",
      comp: "- Founder, Poker Baazi",
    },
    {
      img: "https://growthrocket.media/_next/image?url=%2Ft2.jpg&w=384&q=75",
      p: "Our vision was to share our brand's success stories through short engaging videos. Thanks to the incredibly innovative team at Growth Rocket, not only did we get a tailored social media strategy, but they also spearheaded the entire video creation process. I'm thrilled to share that our debut video skyrocketed with over 60,000 views! Truly an experience beyond our expectations.",
      name: "Ramakrishna NK",
      comp: "- Founder, Rang De",
    },
    {
      img: "https://growthrocket.media/_next/image?url=%2Ft3.jpeg&w=384&q=75",
      p: "Teaming up with Ayushman and Growth Rocket was a game changer for us. Their exceptional financial education videos for YouTube and Instagram not only showcased top-tier production but also drove virality, organically boosting our subscribers and followers. An outstanding collaboration!",
      name: "Shivani Muthanna",
      comp: "- Digital Content Head, Fisdom",
    },
  ];

  
  export default function Clients(){
    <div className="mb-36" id="clientwords">
        <div className="my-56">
        <h1 className="text-3xl md:text-[55px] font-kanit tracking-tight  md:leading-[60px] mb-7 md:mb-17">
          Hear from our{" "}
          <LinearGradient gradient={["to right", "#fdde00 ,#ffffff"]}>
            Happy Clients
          </LinearGradient>{" "}
        </h1>
        <Swiper>
        <div className="flex flex-col md:flex-row justify-between gap-20 rounded-[10px]">
          {clients.map((e, i) => (
            <ClientCard
              key={i}
              img={e.img}
              p={e.p}
              name={e.name}
              comp={e.comp}
            />
          ))}
        </div>
        </Swiper>
      </div>
    </div>
  }