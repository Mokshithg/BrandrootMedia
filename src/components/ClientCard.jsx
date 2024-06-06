import { LinearGradient } from "react-text-gradients";



export default function ClientCard({ img, p, name, comp, vid }) {
  return (
    <div className="flex flex-col custom-shadow border-2 border-white-800 rounded-[15px] p-1">  
      <div className="flex flex-col items-center border-2 border-yellow-700 gap-4 custom-shadow p-6 md:p-12 rounded-[14px] bg-yellow-500 h-full w-full relative">
        <img src={img} alt="" className="h-36 rounded-full" />
        <div className="pb-10 border-b border-white">
          {p && (
            <p className="text-[17px] text-white md:text-[15px] md:overflow-auto scrollable-div md:px-4 md:h-30 tracking-wide font-poppins">
              {p}
            </p>
          )}
        </div>  
        <div className="md:mb-8" style={{ maxWidth: '100%', maxHeight: '100%' }}>
          {vid && (
            <video controls style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '300px', minWidth: '100%', minHeight: '150px' }}>
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        {/* Adjusted positioning */}
        <div className="-mb-8 text-right">
          <h1 className="text-2xl md:text-2xl md:h-8 mb-4 font-poppins text-white">
            - {name}
          </h1>
          <p className="text-xl md:text-[15px] text-black-500">{comp}</p>
        </div>
      </div>
    </div>
  );
}
