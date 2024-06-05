import { useState } from "react";
import { LinearGradient } from "react-text-gradients";


const stepsData = [
      {
        "number": 1,
        "title": "Identify Your Unique Niche and Audience",
        "description": "Your journey begins with defining your niche. What sets you apart? Identify your passions and expertise, and understand who your target audience is. Know their interests, challenges, and the type of content they crave. This clarity will guide your content creation and attract a loyal following."
      },
      {
        "number": 2,
        "title": "Craft High-Quality, Consistent Content",
        "description": "Quality is paramount. Invest in high-resolution visuals and clear audio to ensure your posts stand out. Consistency is equally crucial. Establish a regular posting schedule and maintain a cohesive brand voice and aesthetic. Use a content calendar to plan and organize your posts."
      },
      {
        "number": 3,
        "title": "Leverage the Power of Stories and Short-Form Videos",
        "description": "Stories and short-form videos, such as Instagram Reels and TikToks, are highly engaging and favored by algorithms. Use these formats to offer behind-the-scenes glimpses, share quick tips, or showcase your personality. Engage with your audience through interactive features like polls, Q&As, and challenges."
      },
      {
        "number": 4,
        "title": "Engage Actively with Your Audience",
        "description": "Building a community requires active engagement. Respond to comments, answer direct messages, and interact with your followers’ content. Show appreciation for your audience’s support and encourage conversations. A responsive and interactive presence fosters loyalty and boosts engagement rates."
      },
      {
        "number": 5,
        "title": "Collaborate with Other Creators",
        "description": "Collaborations can exponentially increase your reach. Partner with creators in your niche for guest posts, joint live sessions, or shoutouts. These collaborations introduce your content to new audiences and lend credibility through association with established creators."
      },
      {
        "number": 6,
        "title": "Optimize with Hashtags and SEO",
        "description": "Effective use of hashtags increases your content’s discoverability. Use a combination of popular and niche-specific hashtags to reach a broader audience. For platforms like YouTube, incorporate SEO best practices—research keywords that your target audience searches for and use them in your titles, descriptions, and tags."
      },
      {
        "number": 7,
        "title": "Analyze and Adapt Your Strategy",
        "description": "Regularly review your analytics to understand what content resonates most with your audience. Focus on metrics such as engagement rates, reach, and follower growth. Utilize tools like Instagram Insights, YouTube Analytics, and Facebook Insights to gather data. Adapt your strategy based on these insights to continually improve your content’s performance."
      },
      {
        "number": 8,
        "title": "Invest in Strategic Advertising",
        "description": "While organic growth is essential, strategic advertising can accelerate your progress. Platforms like Facebook and Instagram offer sophisticated targeting options. Start with a modest budget to test different ad creatives and strategies. Optimize based on performance data to ensure your ads effectively reach and engage your target audience."
      },
      {
        "number": 9,
        "title": "Stay Ahead of Trends",
        "description": "Social media trends evolve rapidly. Stay informed about new features, algorithm changes, and emerging content trends. Follow industry news, participate in creator forums, and continuously educate yourself. Early adoption of trends can set you apart and keep your content fresh and engaging."
      },
      {
        "number": 10,
        "title": "Be Authentic and Patient",
        "description": "Authenticity is key to building trust and a genuine connection with your audience. Be yourself, share your story, and show your personality. Authenticity fosters loyalty and long-term engagement. Remember, building a significant following takes time. Celebrate small victories and remain committed to your long-term vision."
      },
      {
        "number": 11,
        "title": "Use Analytics Tools",
        "description": "Invest in analytics tools to track your performance. Platforms like Hootsuite, Sprout Social, and Google Analytics provide insights into your audience’s behavior and content performance. Use these tools to refine your strategy, identify what works, and adjust what doesn’t."
      },
      {
        "number": 12,
        "title": "Leverage User-Generated Content",
        "description": "Encourage your followers to create content related to your brand. User-generated content (UGC) is a powerful tool for building community and trust. Share and celebrate UGC on your profiles to show appreciation and motivate others to contribute."
      },
      {
        "number": 13,
        "title": "Run Contests and Giveaways",
        "description": "Contests and giveaways are effective ways to boost engagement and attract new followers. Ensure the prizes are relevant to your audience and that the contest mechanics encourage sharing and tagging. This not only increases your visibility but also encourages interaction and growth."
      }
]

const Blogs = () => {
  const [showAll, setShowAll] = useState(false);
  const maxInitialPoints = 3;
  const visiblePoints =  showAll? stepsData : stepsData.slice(0, maxInitialPoints);
  
    return (
        <div className="container mx-auto px-2 -mt-8">
            <h2 className="text-3xl md:text-5xl font-poppins text-[4vh] font-[700] ml-5 mb-[-85px] mt-36">
                Blogs{" "}
            <LinearGradient gradient={["to bottom", "#fdde00 ,#ffffff"]}>
            Section
            </LinearGradient>
            </h2>
                <div className="">
                <div className="mx-5 mb-10 mt-40 p-6 rounded-lg bg-white text-black custom-shadow border-4 cursor-pointer from-yellow-500 to-white-600 rounded-[10px] ">
                        <h1 className="text-4xl font-poppins font-bold mb-6">Tech Talks: Exploring the Future</h1>
                        <div>
                            <p className="text-md font-poppins text-gray-600">Welcome to BrandRoot Media, where technology meets creativity At BrandRoot Media, we are passionate about crafting innovative solutions that elevate your digital presence to new heights. With our team of experienced professionals, we specialize in web design, app development, digital marketing, and more. Whether you are a startup looking to make your mark or an established business aiming to stay ahead of the curve, we are here to turn your vision into reality. Explore the latest trends, insights, and tech updates with our blog, and let BrandRoot Media be your trusted partner on your digital journey.</p>
                        </div>
                    </div>

                    <div className="mx-5 mb-36 mt-10 p-6 rounded-lg bg-white text-black custom-shadow border-4 cursor-pointer from-yellow-500 to-white-600 rounded-[10px] relative">
                    <h2 className="text-3xl font-poppins font-bold mb-4 text-center">
                      How to Grow on Social Media: 13 Expert Strategies for Building a Massive Online Presence
                    </h2>
                    <div className="list-disc pl-5 space-y-2">
                      {visiblePoints.map(step => (
                        <div key={step.number} className="mb-2">
                          <span className="inline-block align-middle mr-2 text-xl font-poppins">{step.number}.</span>
                          <strong className="text-gray-700">{step.title}</strong><br />
                          <em className="text-gray-600 font-poppins text-md">{step.description}</em>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setShowAll(!showAll)} // Toggle the state
                      className="relative bottom-0 mt-4 -mb-4 right-0 left-10 mb-4 mr-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                    >
                      {showAll? "Show Less" : "Read More"}
                    </button>
                  </div>
                </div>
        </div>
    );
}

export default Blogs;