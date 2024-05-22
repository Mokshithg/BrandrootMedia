import { LinearGradient } from "react-text-gradients";



export default function ClientCard({ img, p, name, comp, vid }) {
  return (
      <div className="flex flex-col border-white-800 rounded-[15px] p-1">  
      <div className="flex flex-col items-center border-2 border-yellow-700 gap-4 custom-shadow p-6 md:p-12 rounded-[14px] bg-white h-full w-full relative">
        <img src={img} alt="" className="h-36 rounded-full" />
        <div className="pb-10 border-b border-white">
        {p && (
          <p className="text-[17px] text-black md:text-[15px] md:overflow-auto scrollable-div md:px-2 md:h-48 tracking-wide font-kanit">
            {p}
          </p>
        )}
        </div>  
        <div style={{ maxWidth: '100%', maxHeight: '100%' }}>
          {vid && (
            <video controls style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}>
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          )}
        </div>
        {/* Adjusted positioning */}
        <div className="absolute bottom-3 right-[12px] w-full text-right">
          <h1 className="text-2xl md:text-2xl font-kanit text-black">
            <LinearGradient gradient={["to bottom", "#000000,#000000"]}>
              {name}
            </LinearGradient>
          </h1>
          <p className="text-xl md:text-[15px] text-black-500">{comp}</p>
        </div>
      </div>
    </div>
  );
}
