import React from "react";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import heroPng from '../assets/Hero.png'; 

const Home = () => {
  return (
    <>
      <section
        className={`hero pb-12 w-full relative font-cabin min-h-[70vh] lg:min-h-[95vh] lg:before:bg-[position:30%_100%] lg:before:scale-116 lg:before:left-19 md:min-h-[95vh] md:before:scale-110 md:after:to-black/30 sm:before:bg-cover sm:before:scale-120 overflow-clip sm:before:bg-[30%_60%] before:inset-0 before:absolute before:bg-[47%_center] before:bg-no-repeat after:bg-radial-[at_60%_10%] after:from-black/30 before:from-30% after:to-black/60 after:absolute after:inset-0 px-7 md:px-13`}
       aria-label="Hero section"
      >
        <Navbar
          logo={logo}
          hambugColor="text-white"
          bgColor="bg-bg-nav"
          textColor="text-white"
          buttonBg="bg-white/20"
        />
        <div
          className="relative z-20 text-bg-primary mt-8 space-y-2.5 sm:mt-13 md:mt-35 md:space-y-4 lg:mt-34 lg:max-w-6xl mx-auto 2xl:mt-45"
          role="main"
        >
          <h1 className="text-[45px] leading-[1.1] max-w-md md:text-5xl md:max-w-lg">
            Instant collaboration for remote teams
          </h1>
          <p className="text-xl leading-[1.5] max-w-md">
            All-in-one place for your remote team to chat, collaborate and track
            project progresssss.
          </p>
          <form
            className="flex mt-8 gap-2 flex-wrap md:mt-12"
            onSubmit={(e) => e.preventDefault()}
            aria-labelledby="signup-heading"
          >
            <h2 id="signup-heading" className="sr-only">Signup for early access</h2>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              className="flex-1 min-w-[260px] md:min-w-xs bg-white placeholder:text-gray-400 py-3 px-3 rounded-md text-gray-700 border border-transparent focus:border-sky-500 focus:outline-none sm:max-w-40"
              aria-label="Email address"
            />
            <button className="grow-1 bg-bg-secondary rounded-md py-4 font-bold px-5 cursor-pointer sm:max-w-40 hover:opacity-90 transition-opacity duration-150"
            aria-label="Submit email to get early access">
              Get Early Access
            </button>
          </form>
        </div>
      </section>
      <Features />
      <Testimonial />
    </>
  );
};

export default Home;

{
  /* <section className="h-[97vh] w-full relative bg-radial-[at_60%_10%] from-black/30 from-30% to-black/20 overflow-hidden">
   <img src={heroImg} alt="This is hero background image." className="w-full h-full object-cover translate-x-8 -translate-y-9 scale-120 absolute mix-blend-overlay" />
   <Navbar />
</section> */
}

{
  /* <section className='h-screen w-full bg-radial-[at_70%_10%] from-black/30 from-10% to-black/50 font-cabin relative flex items-center'>
  <img src={heroImg} alt="Hero background image." className='w-full h-full object-cover absolute mix-blend-overlay'/>
  <div className='max-w-lg  text-white mx-10'>
     <h1 className='text-[40px] leading-9'>Instant collaboration for remote teams</h1>
     <p>All-in-one place for your remote team to chat, collaborate and track project progress. </p>
     <input type="email" placeholder='Email' />
     <button>Get Early Access</button>
   </div>
</section> */
}

{
  /* <section className="h-screen w-full relative font-cabin overflow-x-hidden bg-radial-[at_70%_80%] from-black/10 from-10% to-black/15">
   <img src={heroImg} alt="Background hero image" className="object-cover w-full h-full absolute mix-blend-overlay scale-115 xl:translate-x-24" draggable="false" />
   <nav className="flex justify-between max-w-6xl mx-auto pt-10 items-center">
      <a href="#" className="py-4 mb-2">
        <img src={logo} alt="It is company logo" />
      </a>
      <ul className="text-white flex text-sm">
        <li className="text-sm"><a href="#" className="p-4">Products</a></li>
        <li><a href="#" className="p-4">Blog</a></li>
        <li><a href="#" className="p-4">Contact</a></li>
        <li><a href="#" className="p-4">Log in</a></li>
        <li><a href="#" className="py-3.5 px-4.5 bg-white/30 text-white rounded-sm">Get Access</a></li>
      </ul>
   </nav>
   <div className="text-bg-primary mx-46 max-w-lg mt-45 space-y-5 relative z-10">
        <h1 className="text-5xl">Instant collaboration for remote teams</h1>
        <p className="text-xl max-w-md">All-in-one place for your remote team to chat, collaborate and track project progress. </p>
        <div className="flex mt-10 gap-2.5">
          <input type="email" placeholder='Email' className="text-md border bg-white placeholder-gray-400 placeholder:font-extralight placeholder:text-sm max-w-xs grow px-3 rounded-sm"/>
          <button className="text-md py-4 px-6.5 bg-bg-secondary font-bold rounded-sm">Get Early Access</button>
        </div>
   </div>
</section> */
}
