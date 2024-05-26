import { LinearGradient } from "react-text-gradients";

const Blogs = () => {
    return (
        <div className="container mx-auto px-2 -mt-8">
            <h2 className="text-[30px] md:text-[55px] font-medium tracking-tight leading-[32px] md:leading-[60px] ml-5 mb-[-85px] mt-36">
                Blogs{" "}
            <LinearGradient gradient={["to bottom", "#fdde00 ,#ffffff"]}>
            Section
            </LinearGradient>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mx-5 mb-36 mt-40 p-6 rounded-lg bg-white text-black">
                        <h1 className="text-4xl font-kanit mb-6">Tech Talks: Exploring the Future</h1>
                        <div>
                            <p>Welcome to BrandRoot Media, where technology meets creativity At BrandRoot Media, we are passionate about crafting innovative solutions that elevate your digital presence to new heights. With our team of experienced professionals, we specialize in web design, app development, digital marketing, and more. Whether you are a startup looking to make your mark or an established business aiming to stay ahead of the curve, we are here to turn your vision into reality. Explore the latest trends, insights, and tech updates with our blog, and let BrandRoot Media be your trusted partner on your digital journey.</p>
                        </div>
                    </div>

                        {/* SECOND BLOG POST */}

                    <div className="mx-5 mb-36 mt-40 p-6 rounded-lg bg-white text-black">
                        <h1 className="text-4xl font-kanit mb-6">Another Tech Talk: Innovating Tomorrow</h1>
                        <div>
                            <p>More detailed description about another blog post...</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Blogs;