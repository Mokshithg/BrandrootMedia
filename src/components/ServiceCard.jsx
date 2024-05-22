import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function ServiceCard({ h, p }) {
  const [hovering, setHovering] = useState(false);
  return (
    <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20}>
      <div
        className={`group -rotate-[5deg] border-2 rounded-xl border-white-200 w-80 ${
          hovering ? `bg-black` : `bg-gradient-to-br from-yellow-500 to-white-600`
        }`}
      >
        <div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="p-6 hover:text-black border-2 bg-black hover:bg-gradient-to-br hover:from-yellow-400 hover:to-white-500 cursor-pointer border-white-700 rounded-xl rotate-[5deg] z-10 w-80 h-[260px] md:h-[260px]"
        >
          <h1 className="text-[40px] leading-[42px] md:text-[40px] font-kanit tracking-tight md:leading-[38px] mb-5">
            {h}
          </h1>
          <p className="md:text-2xl text-xl font-kanit">{p}</p>
        </div>
      </div>
    </Tilt>
  );
}