// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination'; // Note: Removed if not used
// import 'swiper/css/scrollbar'; // Note: Removed if not used
// import { Keyboard, Navigation, Autoplay } from "swiper/modules";
// import useScreenSize from '../utils/screenSize';
// import TwoCardsEffect from '../components/TwoCardsEffect';
// import { LinearGradient } from 'react-text-gradients';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const youtubeVideos = [
//   "https://www.youtube.com/embed/04pHWGEYH7A",
//   "https://www.youtube.com/embed/LqaZIVCvjoo",
//   "https://www.youtube.com/embed/7d2GxwGJU9I",
//   "https://www.youtube.com/embed/r4aZ8SIADGA",
//   "https://www.youtube.com/embed/ZS_scW7hlTc",
//   "https://www.youtube.com/embed/f0f8U-SAqj4",
//   "https://www.youtube.com/embed/yH3jiGWWi9I",
//   "https://www.youtube.com/embed/L33jHbVtyRo",
//   "https://www.youtube.com/embed/RqUYy1HE03g",
//   "https://www.youtube.com/embed/Lp1_VVgLnJY"
// ];

// export default function Portfolio() {
//   const screenSize = useScreenSize();

//   return (
//     <div id="portfolio" className="mx-5 mb-36">
//       <h1 className="font-poppins text-3xl md:text-5xl font-poppins text-[4vh] font-[700]">
//         We create the highest quality content for brands.{" "}
//         <LinearGradient gradient={["to right", "#fdde00,#ffffff"]}>
//           And we will do the same for you
//         </LinearGradient>
//       </h1>
//       <div className="flex gap-20 my-14">
//         <Swiper
//           loop={true}
//           slidesPerView={screenSize === "medium" || screenSize === "large"? 4 : 1}
//           centeredSlides={false}
//           spaceBetween={50}
//           grabCursor={true}
//           keyboard={{
//             enabled: true,
//           }}
//           breakpoints={{
//             769: {
//               slidesPerView: 3,
//               slidesPerGroup: 1,
//             },
//             520: {
//               slidesPerView: 1,
//               slidesPerGroup: 1,
//             },
//           }}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false, // Changed to false to allow interaction-based control
//           }}
//           modules={[Keyboard, Navigation, Autoplay]}
//         >
//           {youtubeVideos.map((url, i) => (
//             <SwiperSlide key={i} className="video-card border-2 border-white-900 p-3 rounded-lg shadow-lg transform transition duration-500 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
//               <div style={{ position: 'relative', width: '100%', height: '100%' }}>
//                 <iframe
//                   src={url}
//                   title="YouTube video player"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   width={screenSize === "medium" || screenSize === "large"? "320" : "500"}
//                   height={screenSize === "medium" || screenSize === "large"? "190" : "350"}
//                   style={{ maxWidth: '100%', maxHeight: '100%' }}
//                   autoPlay
//                 ></iframe>
//               </div>
//             </SwiperSlide>
//           ))}
//           {/* Navigation buttons */}
//           <div className="swiper-button-next text-slate-100 animate-bounce-left" style={{ color: 'white' }}></div>
//           <div className="swiper-button-prev text-slate-100 animate-bounce-right btn-black" style={{ color: 'white' }}></div>
//         </Swiper>
//       </div>
//       <div>
//         <div>
//           <h1 className=" ml-4 text-3xl md:text-5xl font-poppins text-[4vh] font-[700] mt-36">
//             Numbers that speak{" "}
//             <LinearGradient gradient={["to right", "#fdde00,#ffffff"]}>
//               louder than words
//             </LinearGradient>
//           </h1>
//           <div>
//             <TwoCardsEffect
//               rotate1={"-rotate-[0deg]"}
//               rotate2={"rotate-[0deg]"}>
//               <div className="py-7">
//                 <div className="text-black text-4xl flex md:flex-row flex-col gap-10 md:justify-around font-kanit">
//                   <p className="text-center">
//                     20 M+ <br/>{" "}
//                     <span className="text-2xl">Audience</span>
//                   </p>
//                   <p className="text-center">
//                     100 M+ <br />{" "}
//                     <span className="text-2xl">Views</span>
//                   </p>
//                   <p className="text-center">
//                     200,000+ <br />{" "}
//                     <span className="text-2xl">Hours Watchtime</span>
//                   </p>
//                 </div>
//               </div>
//             </TwoCardsEffect>
//           </div>
//           <div className="flex justify-center">
//             <a href="https://calendly.com/brandrootmedia/collaborations" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-5 py-2 -mt-8 border text-2xl font-poppins rounded-md shadow-sm text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 w-auto">
//               Schedule a Call
//               <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, useEffect } from 'react';
import { LinearGradient } from 'react-text-gradients';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { Link } from 'react-router-dom'; 

const sections = [
  {
    title: 'Video Edits',
    content: [
      {
        title: "Sanjay's Ad Edit",
        description: "A captivating Ad video for his SEO course. Edited with attractive animations and to-the-tee transcribing!",
        image: "https://growthrocket.media/_next/image?url=%2F01.jpg&w=1920&q=75",
      },
      {
        title: "Luru's ProductHunt Video",
        description: "A successful ProductHunt launch feature. A high-quality edit with custom-made screen grabs and creative animations!",
        image: "https://growthrocket.media/_next/image?url=%2F02.jpg&w=1920&q=75",
      },
    ],
  },
  {
    title: 'Thumbnails',
    content: [
      {
        title: "Ishan's Dr Strange thumbnail",
        description: "A mystic fusion of creativity and mastery, showcasing the sorcerer of content's enchanting digital realm.",
        image: "https://growthrocket.media/_next/image?url=%2F06.jpg&w=1920&q=75",
      },
      {
        title: "Hitesh's Dr Strange thumbnail",
        description: "A mystic fusion of creativity and mastery, showcasing the sorcerer of content's enchanting digital realm.",
        image: "https://growthrocket.media/_next/image?url=%2F06.jpg&w=1920&q=75",
      }
    ],
  },
];



function Portfolio({ open, onClose}) {
  const [activeSection, setActiveSection] = useState('all'); // Default to showing all
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  const [popupContent, setPopupContent] = useState(null);

  const handleClick = (sectionTitle) => {
    setSavedScrollPosition(window.scrollY);
    setActiveSection(sectionTitle === 'all'? 'all' : sectionTitle);
  };

  const handleCardClick = (sectionIndex, card) => {
    const section = sections[sectionIndex];   
    setPopupContent({
      title: section.title,
      cards: [card], 
    });
  };

  useEffect(() => {
    window.scrollTo(0, savedScrollPosition);
  }, [savedScrollPosition]);

  return (
    <div className="mx-5 mb-36 min-h-screen bg-black py-6 -mt-20 flex flex-col items-center justify-center sm:py-12">
      <h1 className="font-poppins text-3xl md:text-5xl font-poppins text-[4vh] font-[700] mb-8">
        <LinearGradient gradient={["to right", "#fdde00,#ffffff"]}>
          Portfolio
        </LinearGradient>
      </h1>
      <nav className="navbar mb-8">
        <ul className="flex flex-wrap justify-around">
          <li className="mb-1 mr-2">
            <button
              className={`nav-item px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out ${
                activeSection === 'all'? 'bg-blue-600 text-white' : ''
              }`}
              onClick={() => handleClick('all')}
            >
              All
            </button>
          </li>
          {sections.map((section) => (
            <li key={section.title} className="mb-1 mr-2">
              <button
                className={`nav-item px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out ${
                  activeSection === section.title? 'bg-blue-600 text-white' : ''
                }`}
                onClick={() => handleClick(section.title)}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Pop-up Content */}
      {/* {popupContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10" onClick={() => setPopupContent(null)}>
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">{popupContent.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popupContent.cards.map((card, index) => (
                <a
                  key={index}
                  href={card.link}
                  className="card block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out bg-black text-white transform scale-100 hover:scale-105 transition-transform duration-150"
                >
                  <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-sm">{card.description}</p>
                  </div>
                </a>
              ))}
            </div>
            <button onClick={() => setPopupContent(null)} className="absolute top-0 right-0 mt-2 mr-2">Close</button>
          </div>
        </div>
      )} */}

      <main className="content">
        {sections.map((section, sectionIndex) => (
          <div
            key={section.title}
            className={`content-section my-8 p-4 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out ${
              activeSection!== 'all' && activeSection!== section.title? 'hidden' : 'block'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.content.map((card, index) => (
                <a
                  key={index}
                  href={card.link}
                  className="card block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out bg-black text-white transform scale-100 hover:scale-105 transition-transform duration-150"
                  onClick={() => handleCardClick(sectionIndex, card)}
                >
                  <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-sm">{card.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </main>
      {popupContent && (
        <Dialog open={open} onClose={onClose} maxWidth="md">
          <DialogTitle>{popupContent.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {/* Your existing JSX for displaying card details remains unchanged */}
            </DialogContentText>
            {/* Add a link to another page within the dialogue box */}
            <p>
              Want to see more?{' '}
              <Link to="/another-page" style={{ textDecoration: 'none', color: 'inherit' }}>Go to Another Page</Link>
            </p>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}

export default Portfolio;
