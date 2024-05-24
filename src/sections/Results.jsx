import { LinearGradient } from "react-text-gradients";
import TiltCard from "../components/TiltCard";
// import TwoCardsEffect from "../components/TwoCardsEffect";

export default function Results() {
  return (
    <div className="mx-5 my-64 mt-8" id="results">
      <h1 className="text-[50px] font-kanit tracking-tight leading-[60px] mt-36 mb-14">
      Success Stories: Brands Thriving with{" "}
        <LinearGradient gradient={["to right", "#fdde00 ,#ffffff"]}>
        Brandroot Media
        </LinearGradient>{" "}
      </h1>
      <div>
      <div className="md:w-[71%] w-full">
      <TiltCard
        image={"https://ik.imagekit.io/7saglhzb5/brandroot/Siddharth%20Bhat.png?updatedAt=1716364700298"}
        title={"Siddharth Bhat"}
        para={
          "1000 subscribers in just 27 days. He started a youtube channel with us from zero, but within a month his channel was monetized. In 3 months he was rocking."
        }
        cta={"Contact Brandroot Media today for a free consultation."}
        imgStyle={"w-full h-auto object-contain md:h-[165px] sm:h-[100%] sm:w-[60%]"}
        imgContainerStyle={
          "h-44 md:w-half sm:h-[100%] sm:w-[50%] w-[85%] m-3 md:m-0 flex justify-center items-center p-1 rounded-md"
        }
      />

      </div>
      <div className="md:w-[71%] w-full relative ml-4 md:left-96 md:-ml-12 mx-auto">
        <TiltCard
          image={
            "https://ik.imagekit.io/7saglhzb5/brandroot/simon%20gee.png?updatedAt=1716364699598"
          }
          title={"Simon"}
          para={
            "2nd video which we edited broke all his previous records and even set a very great one. Crossed 500,000 views within a week. We started working with him on 15k followers, in 2 months he has now 60k+ followers."
          }
          imgStyle={"w-full h-auto md:h-[165px] h-fit object-contain sm:h-[100%] sm:w-[60%]"}
          imgContainerStyle={
            "h-44 md:w-half sm:h-[100%] sm:w-[50%] w-[85%] m-3 md:m-0 flex justify-center items-center p-1 rounded-md"
          }
        />
      </div>
      <div className="md:w-[71%] w-full">
        <TiltCard
          image={"https://ik.imagekit.io/7saglhzb5/brandroot/benjamin%20Tarrolly.png?updatedAt=1716364700114"}
          title={"Benjamin Tarolly"}
          para={
            "He is a guy who needs video in quantity, but we never forget about the quality. He was just expecting volume, we managed to deliver him the same but with maintaining quality."
          }
          imgStyle={"w-full h-auto md:h-[165px] h-fit object-contain sm:h-[100%] sm:w-[60%]"}
          imgContainerStyle={
            "h-44 md:w-half sm:h-[100%] sm:w-[50%] w-[85%] m-3 md:m-0 flex justify-center items-center p-1 rounded-md"
          }
        />
      </div>
    </div>

    </div>
  );
}