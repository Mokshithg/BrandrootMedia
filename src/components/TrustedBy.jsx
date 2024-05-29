export default function TrustedBy({
    children,
    width,
    bg,
    rotate1,
    rotate2,
}){
    return (
        <>
          <div
            className={`h-full w-${width}  my-14 mx-3 border border-black  ${bg} rounded-[10px] transform ${rotate1} bg-black`}
          >
            <div
              className={` h-full transform ${rotate2} w-full rounded-[10px] `}
            >
              {children}
            </div>
          </div>
        </>
    );
}