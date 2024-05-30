import { LinearGradient } from 'react-text-gradients';

export default function Footer() {
  return (
    <div id="contactus" className="w-full flex flex-col items-start md:items-center">
      <h1 className="text-3xl md:text-5xl font-poppins text-[4vh] font-[700] my-4 md:text-4xl lg:text-5xl">
        Let's {" "}
        <LinearGradient gradient={["to right", "#fdde00,#ffffff"]}>
          Connect
        </LinearGradient>
      </h1>
      <div className="flex flex-col md:flex-row items-start md:gap-10">
        <button className="my-10 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black font-poppins px-7 py-2.5 md:text-2xl text-xl rounded">
          <a href="https://calendly.com/brandrootmedia/collaborations" target="_blank" rel="noopener noreferrer">
            Schedule a Call
          </a>
        </button>
        <button 
          className="my-10 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black font-poppins px-7 py-2.5 md:text-2xl text-xl rounded"
          onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSceX9B4XDB_WbOdunSFsjQCHHAZFaP-vh5MxsyCYKPJ4TpJCg/viewform", "_blank")}
        >
          Any Queries?
        </button>
        <button 
            className="my-10 font-poppins px-7 py-2.5 md:text-2xl text-xl rounded text-black flex items-center justify-center"
            onClick={() => window.open(`https://wa.me/8235937883?text=Hello%20World`, '_blank')}
            style={{
              backgroundImage: "linear-gradient(to bottom right, #25d366, #25d366)",
            }}
          >
            Chat On WhatsApp
          </button>
      </div>
      <div className="w-full md:w-screen relative bg-gradient-to-br from-yellow-500 to-yellow-600 flex py-20 items-start h-12 md:h-full justify-between gap-20">
        {/* Social Media Icons */}
        <div className="flex flex-col items-start">
          <p className="text-4xl font-poppins text-black ml-48 ">Contact Us</p>
          <a href='mailto:talha@brandrootmedia.com'>
            <p className='text-black ml-48 font-poppins text-1xl mt-4'>talha@brandrootmedia.com</p>
          </a>
          <a href='mailto:nitish@brandrootmedia.com'>
            <p className='text-black ml-48 font-poppins text-1xl'>nitish@brandrootmedia.com</p>
          </a>
          <a href='mailto:work.brandrootmedia@gmail.com'>
            <p className="font-poppins text-black ml-48 text-1xl">work.brandrootmedia@gmail.com</p>
          </a>
          <div className="flex gap-4 -mb-12">
            <a href="https://www.linkedin.com/company/brandrootmedia/" className="ml-48 mt-20">
              <img
                src="https://growthrocket.media/_next/image?url=%2Flinkedin.png&w=48&q=75"
                alt="LinkedIn"
              />
            </a>
            <a href="" className="ml-8 mt-20">
              <img
                src="https://growthrocket.media/_next/image?url=%2Fyoutube.png&w=48&q=75"
                alt="YouTube"
              />
            </a>
            <a href="https://www.instagram.com/brandrootmedia/?igshid=NzZlODBkYWE4Ng%3D%3D" className="ml-8 mt-20">
              <img
                src="https://growthrocket.media/_next/image?url=%2Finstagram.png&w=48&q=75"
                alt="Instagram"
              />
            </a>
          </div>
        </div>

        {/* Logo */}
        <a href="/" className="mr-48">
          <img
            src="https://ik.imagekit.io/7saglhzb5/Brandroot%20media.png?updatedAt=1716214538239"
            alt="Brandroot Media Logo"
            className="h-36 w-auto ml-20 md:ml-0" // Adjusted for responsiveness
          />
          <p className="mt-2 font-poppins text-black">Office Address: 123 Brandroot Street, City, Country</p>
        </a>
      </div>
      <p className="text-2xl -mr-16 font-poppins text-white">BrandRoot Media &copy; 2024. All Rights Reserved</p>
    </div>
  );
}
