import TwoCardsEffect from "../components/TwoCardsEffect";
import { LinearGradient } from "react-text-gradients";
import useScreenSize from "../utils/screenSize";

export default function ContactPage() {
  const screenSize = useScreenSize();
  return (
    <div className="flex md:flex-row flex-col md:items-center justify-between md:gap-20 gap-5 items-center">
      {screenSize === "small" ? (
        <h1 className="text-3xl font-kanit my-0">
          Meet{" "}
          <LinearGradient gradient={["to bottom", "#fdde00 ,#ffffff"]}>
            The Co-Founder
          </LinearGradient>
        </h1>
      ) : null}
      <div className="p-2 relative">
      {/* {screenSize === "large" || screenSize === "medium" ? (
          <h1 className="text-5xl font-kanit my-8">
            Meet{" "}
            <LinearGradient gradient={["to bottom", "#fdde00 ,#ffffff"]}>
            Founders
            </LinearGradient>
          </h1>
        ) : null} */}
        <TwoCardsEffect
          width={"fit"}
          bg={"bg-gradient-to-r from-yellow-500 to-white-600"}
          rotate1={"-rotate-[5deg]"}
          rotate2={"rotate-[5deg]"}
        >
          <img
            src="https://ik.imagekit.io/7saglhzb5/brandroot/Nitish.jpg?updatedAt=1716715417006"
            alt=""
            className="w-[65vh] h-[70vh] rounded-xl object-cover"
          />
        </TwoCardsEffect>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-2 absolute sm:bottom-[890px] bottom-[500px] md:bottom-[540px] w-fit md:right-56 right-[160px] text-black font-kanit -rotate-[5deg] rounded-xl px-10 text-sm md:text-[16px] whitespace-nowrap right-0 left-0">
          <h1>Nithish Malhotra</h1>
          {/* <div className="flex justify-around items-center">
            <a href="https://www.instagram.com/nitish.malhotraa?igsh=aXR3b3I1aDNhcDF0">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                className="text-xl"
                height={
                  screenSize === "large" || screenSize === "medium"
                    ? "1.5em"
                    : "1em"
                }
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
              </svg>
            </a>
            <a href="">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                className="text-xl"
                height={
                  screenSize === "large" || screenSize === "medium"
                    ? "1.5em"
                    : "1em"
                }
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"></path>
              </svg>
            </a>
          </div> */}
        </div>
      </div>

      <div className="md:w-[100vh]">
      <h1 className="text-5xl md:text-4xl ffont-kanit my-4">
        Nithish Malhotra
        </h1>
        {/* <p className="text-2xl md:text-xl -mt-4 text-white-400 font-kanit">
           Youtube |  Instagram
        </p> */}
        <p className="text-[20px] md:text-2xl my-4 md:my-10 font-light mb-56 md:mb-48">
        Nitish is a top social media consultant known for helping creators & business owners go viral. He is an entrepreneur who co-founded the marketing company ‘Brandroot Media.’His journey started when he was just 18 & since then he has worked with tens of creators & helped them gain millions of followers on all social media platforms.
Nitish stays ahead of social media trends and provides personalized strategies tailored to each creator's brand. His ability to support, from content creation to analysis, ensures remarkable growth and engagement.
        </p>
      </div>
    </div>
    
  );
}