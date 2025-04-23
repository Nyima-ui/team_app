import React from "react";
import firstMockup from "../assets/home_page_assets/vako.webp";
import secondMockup from "../assets/home_page_assets/Second_mockup.webp";
import thirdMockup from "../assets/home_page_assets/Third_Mockup.webp";
import learnMorewebp from "../assets/home_page_assets/arrow_right_alt_24px.png";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      image: firstMockup,
      heading: "Your hub for teamwork",
      disc: "Project discussions, important documents, free food announcements: they all live tidily together in Team. With your team and information in one easily searchable place, collaborating online is as easy as collaborating in person.",
    },
    {
      image: secondMockup,
      heading: "Simplest task management",
      disc: "Task management with Team is as simple as it gets. No complicated layout and need for user training. Your team members will intuitively know how to navigate the platform. It’s so simple, a baby could do it!",
    },
    {
      image: thirdMockup,
      heading: "Scheduling that actually works",
      disc: {
        part1:
          "Integrated a Team calendar with your favorite calendar app, be it Google Calendar or iCal.",
        part2:
          "Each team member works with their favorite calendar, while all the date is synced with the master calendar.",
      },
    },
  ];
  return (
    <section className="h-auto bg-bg-primary px-7 md:px-13 py-17 lg:py-24 space-y-25 font-cabin overflow-x-hidden"
     aria-label="Key features">
      {features.map((obj, index) => (
        <div
          className={
            index % 2 === 0
              ? "space-y-6 sm:flex sm:flex-row-reverse sm:items-center sm:gap-4 md:mx-auto md:justify-between md:gap-6 lg:max-w-6xl"
              : "space-y-6 sm:flex sm:items-center sm:gap-4 md:gap-10 mx-auto lg:max-w-6xl lg:justify-between "
          }
          key={index}
        >
          <div
            className={
              index === 0
                ? "-mr-28 sm:-mr-44 sm:scale-120 md:-mr-60 md:scale-110 lg:max-w-4xl lg:-mr-90 lg:scale-125"
                : index === 1
                ? "-ml-8 md:-ml-15 md:min-w-sm"
                : index === 2
                ? " -mr-8 md:-mr-15 md:min-w-sm"
                : ""
            }
          >
            <img key={index} src={obj.image} alt={obj.heading} className="w-full h-full" loading="lazy"/>
          </div>

          <div className="space-y-3.5 sm:max-w-[56%] md:max-w-[450px] md:space-y-5">
            <h1 className="text-[43px] md:text-5xl leading-12 md:leading-16 text-text-primary">
              {obj.heading}
            </h1>

            {typeof obj.disc === "object" ? (
              <p className="text-text-secondary/70 text-lg leading-[1.4]">
                {obj.disc.part1} <br /> {obj.disc.part2}
              </p>
            ) : (
              <p className="text-text-secondary/70 text-lg leading-[1.4]">
                {obj.disc}
              </p>
            )}

            <Link to="/" className="text-bg-secondary font-bold cursor-pointer mt-4" aria-label="Learn more">
              Learn more
              <img
                src={learnMorewebp}
                alt="Button to learn more"
                className="inline-block align-middle ml-1"
                role="presentation"
              />
            </Link>
          </div>
          
        </div>
      ))}
    </section>
  );
};

export default Features;
