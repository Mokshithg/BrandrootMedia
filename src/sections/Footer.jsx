import { LinearGradient } from 'react-text-gradients';

export default function Footer() {
  return (
    <div id="contactus" className="w-full flex flex-col items-start md:items-center">
      <p className="text-5xl font-medium text-white-500">CONTACT {" "}
        <LinearGradient gradient={["to right", "#fdde00 ,#ffffff"]}>
          US
        </LinearGradient>
      </p>
      <h1 className="text-4xl font-kanit text-white-500 my-4">
      Lets {" "}
      <LinearGradient gradient={["to right", "#fdde00 ,#ffffff"]}>
          Connect
        </LinearGradient>
      </h1>
      <div className="flex md:flex-row flex-col items-start md:gap-10">
        <button className="md:my-10 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black font-kanit px-7 py-2.5 md:text-2xl text-xl rounded">
          <a href="https://calendly.com/brandrootmedia/collaborations" target="_blank" rel="noopener noreferrer">
                Schedule a Call
          </a>
          </button>
        <button 
          className="my-10 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black font-kanit px-7 py-2.5 md:text-2xl text-xl rounded"
          onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdupUHV2uO6q69BHXvPzE1DgJu32HYQ31zPdyZ5uflmOftXRw/viewform", "_blank")}
        >
          Any Queries?
        </button>
        <button 
          className="my-10 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black font-kanit px-7 py-2.5 md:text-2xl text-xl rounded"
          onClick={() => window.open(`https://wa.me/8235937883?text=Hello%20World`, '_blank')}
        >
          Chat On Whatsapp
        </button>
      </div>
      <div className="w-screen relative right- bg-gradient-to-br from-yellow-500 to-yellow-600 flex py-4 items-start h-12 md:h-full justify-between gap-20">
        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/company/brandrootmedia/" className="ml-48">
            <img
              src="https://growthrocket.media/_next/image?url=%2Flinkedin.png&w=48&q=75"
              alt=""
            />
          </a>
          <a href="" className="ml-8 mt-1">
            <img
              src="https://growthrocket.media/_next/image?url=%2Fyoutube.png&w=48&q=75"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/brandrootmedia/?igshid=NzZlODBkYWE4Ng%3D%3D" className="ml-8 mt-1">
            <img
              src="https://growthrocket.media/_next/image?url=%2Finstagram.png&w=48&q=75"
              alt=""
            />
          </a>
        </div>
        <p className="text-2xl mt-4 -ml-12 text-black">BrandRoot Media &copy; 2024. All Rights Reserved</p>
        {/* Logo */}
        <a href="/" className="mr-48">
          <img
            src="https://ik.imagekit.io/7saglhzb5/Brandroot%20media.png?updatedAt=1716214538239"
            alt="Brandroot Media Logo"
            className="h-16 w-auto" // Increased height and width
          />
        </a>
      </div>
      <p className='text:md-xl'>work.brandrootmedia@gmail.com</p>
    </div>
  );
}