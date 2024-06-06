import Tilt from "react-parallax-tilt";
import { LinearGradient } from "react-text-gradients";

export default function TiltCard({
  image,
  title,
  para,
  imgStyle,
  imgContainerStyle,
}) {
  return (
    <Tilt tiltMinAngleX={2} tiltMMinAngleY={2}>
      <div className="my-8 p-[6px] custom-shadow border-4 cursor-pointer from-yellow-500 to-white-600 rounded-[10px] mb-12 p-4">
        <div className="flex md:flex-row flex-col p-3 custom-shadow md:p-8 bg-yellow-500 rounded-[10px] items-center bg-white">
          <div className={imgContainerStyle}>
            <img src={image} className={imgStyle} alt="" />
          </div>

          <div className="md:mx-10 mx-2">
            <h1 className="text-[35px] md:text-[25px] font-medium mb-4  leading-[35px]  md:leading-[45px]">
              <LinearGradient gradient={["to right", "#000000 ,#000000"]}>
                {title}
              </LinearGradient>
            </h1>
            <p className="text-xl text-white">{para}</p>
            {/* <a className="text-sm" style={{color : yellow}}>{cta}</a> */}
          </div>
        </div>
      </div>
    </Tilt>
  );
}