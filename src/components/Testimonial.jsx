import React, { useRef } from "react";
import avatar1 from "../assets/avatars/Avatar1.png";
import avatar2 from "../assets/avatars/Avatar2.png";
import avatar3 from "../assets/avatars/Avatar3.png";
import avatar4 from "../assets/avatars/Avatar4.png";
import avatar5 from "../assets/avatars/Avatar5.png";
import avatar6 from "../assets/avatars/avatar6.png";
import ratingPng from "../assets/home_page_assets/Stars.svg";
import arrowRight from "../assets/home_page_assets/arrow_forward_24px.svg";
import arrowLeft from "../assets/home_page_assets/arrow_back_24px.svg";

const Testimonial = () => {
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut equis",
      avatar: avatar1,
      name: "Amy Goldberg",
      occupation: "COO at Slack",
    },
    {
      review:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
      avatar: avatar2,
      name: "Lina Sloan",
      occupation: "Content Write at Uber",
    },
    {
      review:
        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived nnchanged.",
      avatar: avatar3,
      name: "Jon Jandali",
      occupation: "CTO at Loom",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, tempor incididunt ut labore et dolore magna aliqua. Ut equis",
      avatar: avatar4,
      name: "Erik Hendrix",
      occupation: "CTO at Slack",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur consectetur consectetur consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut equis",
      avatar: avatar5,
      name: "Amy Goldberg",
      occupation: "COO at Slack",
    },
    {
      review:
        "Lorem ipsum doctetur consectetur consectetur consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut equis",
      avatar: avatar6,
      name: "Jhon Doe",
      occupation: "Employee at Google",
    },
  ];
  function scroll(direction) {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 270;
    if (direction === "right") container.scrollLeft += scrollAmount;
    else container.scrollLeft -= scrollAmount;
  }
  return (
    <section className="bg-bg-primary py-8 font-cabin" aria-labelledby="testimonial-heading">
      <h2 className="text-text-primary text-[45px] leading-[1.2] px-7 md:px-13 xl:max-w-6xl mx-auto xl:px-0"
          id="testimonial-heading">
        What people say about Team App
      </h2>
      <div
        className="flex gap-4 overflow-x-scroll py-9 px-5 mt-1 items-start scroll-smooth scrollbar-hide lg:gap-7"
        ref={scrollContainerRef}
        aria-label="Testimonials from users of the Team App"
      >
        {testimonials.map((obj, index) => (
          <article
            key={index}
            className="px-8 py-10 min-w-64 shadow-lg space-y-5 rounded-md bg-white"
            aria-label={`Testimonial by ${obj.name}, ${obj.occupation}`}
          >
            <img src={ratingPng} alt="5-star rating" aria-hidden="true" className="w-full h-full" />
            <blockquote className="text-text-secondary/70 font-semibold leading-6 font-cabin">
             <p>{obj.review}</p> 
            </blockquote>
            <footer className="flex gap-4 items-center mt-13">
              <img src={obj.avatar} alt={`${obj.name} avatar`} className="w-full h-full"/>
              <div className="flex flex-col">
                <strong className="block  text-text-primary font-semibold">
                  {obj.name}
                </strong>
                <small className=" text-text-primary/70">
                  {obj.occupation}
                </small>
              </div>
            </footer>
          </article>
        ))}
      </div>
      <div className="flex justify-end px-10 gap-2 lg:mr-40">
        <button onClick={() => scroll("left")} className="cursor-pointer" aria-label="Scroll testimonials to left.">
          <img src={arrowLeft} alt="" aria-hidden="true" className="w-full h-full"/>
        </button>
        <button onClick={() => scroll("right")} className="cursor-pointer" aria-label="Scroll testimonials to right.">
          <img src={arrowRight} alt="" aria-hidden="true" className="h-full w-full" />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
