import { LinearGradient } from 'react-text-gradients';

export default function Footer() {
  return (
    <div id="contactus" className="w-full flex flex-col items-center">
    <h1 className="text-3xl md:text-5xl font-poppins text-[4vh] font-[700] my-4 lg:text-5xl">
      Let's{" "}
      <LinearGradient gradient={["to right", "#fdde00,#ffffff"]}>
        Connect
      </LinearGradient>
    </h1>
    <div className="flex flex-col md:flex-row items-center md:gap-10">
      <button className="my-4 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black font-poppins px-7 py-2.5 text-xl md:text-2xl rounded">
        <a href="https://calendly.com/brandrootmedia/collaborations" target="_blank" rel="noopener noreferrer">
          Schedule a Call
        </a>
      </button>
      <button 
        className="my-4 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black font-poppins px-7 py-2.5 text-xl md:text-2xl rounded"
        onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSceX9B4XDB_WbOdunSFsjQCHHAZFaP-vh5MxsyCYKPJ4TpJCg/viewform", "_blank")}
      >
        Any Queries?
      </button>
      <button 
        className="my-4 font-poppins px-7 py-2.5 text-xl md:text-2xl rounded text-black flex items-center justify-center"
        onClick={() => window.open(`https://wa.me/8235937883?text=Hello%20World`, '_blank')}
        style={{
          backgroundImage: "linear-gradient(to bottom right, #25d366, #25d366)",
        }}
      >
        Chat On WhatsApp
      </button>
    </div>
    <div className="w-full relative bg-gradient-to-br from-yellow-500 to-yellow-600 flex flex-col md:flex-row py-12 md:py-20 items-center justify-between gap-10 md:gap-20 px-4">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-4xl font-poppins text-black">Contact Us</p>
        <a href='mailto:talha@brandrootmedia.com' className="mt-4">
          <p className='text-black font-poppins text-xl'>talha@brandrootmedia.com</p>
        </a>
        <a href='mailto:nitish@brandrootmedia.com' className="mt-2">
          <p className='text-black font-poppins text-xl'>nitish@brandrootmedia.com</p>
        </a>
        <a href='mailto:work.brandrootmedia@gmail.com' className="mt-2">
          <p className="font-poppins text-black text-xl">work.brandrootmedia@gmail.com</p>
        </a>
        <div className="flex gap-4 mt-4">
          <a href="https://www.linkedin.com/company/brandrootmedia/">
            <img
              src="https://growthrocket.media/_next/image?url=%2Flinkedin.png&w=48&q=75"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
          <a href="">
            <img
              src="https://growthrocket.media/_next/image?url=%2Fyoutube.png&w=48&q=75"
              alt="YouTube"
              className="w-8 h-8"
            />
          </a>
          <a href="https://www.instagram.com/brandrootmedia/?igshid=NzZlODBkYWE4Ng%3D%3D">
            <img
              src="https://growthrocket.media/_next/image?url=%2Finstagram.png&w=48&q=75"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end text-center md:text-right">
        <a href="/">
          <img
            src="https://ik.imagekit.io/7saglhzb5/Brandroot%20media.png?updatedAt=1716214538239"
            alt="Brandroot Media Logo"
            className="h-36 w-auto"
          />
        </a>
        <p className="mt-4 font-poppins text-black">
          <b>Office Address:</b><br /> 
          B-5, Syed Apartment,<br /> 
          Syed Colony, Sir Syed Nagar,<br /> 
          Aligarh, 202002 UP, India
        </p>
      </div>
    </div>
    <p className="text-xl md:text-2xl font-poppins text-white mt-4">
      BrandRoot Media &copy; 2024. All Rights Reserved
    </p>
  </div>
  
  );
}
