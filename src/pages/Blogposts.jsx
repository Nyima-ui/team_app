import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";
import darkLogo from "../assets/logo_dark.png";
import blogCardData from "../Data/blogcard";
import { useState } from "react";

const Blogposts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const dataToRender = blogCardData.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogCardData.length / postsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="bg-bg-primary px-7 md:px-12">
      <Navbar
        logo={darkLogo}
        hambugColor="text-black"
        bgColor="bg-bg-nav-light"
        textColor="text-text-primary/80"
        buttonBg="bg-bg-secondary/20"
        buttonTextColor="text-bg-secondary"
      />
      <main className="font-cabin mt-13 pb-14 lg:max-w-6xl mx-auto">
        <h1 className="text-text-primary text-[42px] md:text-5xl">Blog</h1>
        <p className="text-text-secondary/70 text-lg leading-[1.4] mt-2 md:mt-5">
          Our latest web design tips, tricks, insights, and resources, hot off
          the presses.
        </p>
        <div
          className="mt-12 grid gap-x-8 gap-y-10 grid-cols-1 grid-sm:grid-cols-2 lg:grid-cols-3 pb-5"
          aria-label="List of blog articles"
          role="list"
        >
          {dataToRender.map((obj, index) => (
            <Link to="/blog" key={index} state={obj}>
              <article
                className="rounded-md overflow-clip bg-white hover:shadow-xl transition-all duration-150 ease-in hover:-translate-y-0.5 h-full flex flex-col"
                role="listitem"
              >
                <div>
                  <img
                    src={obj.image}
                    alt="Blog image."
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="px-4 py-5 space-y-3 grow flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h2 className="text-text-h1 text-2xl font-semibold leading-[1.3]">
                      {obj.title}
                    </h2>
                    <p className="text-text-secondary/70">{obj.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-3 grid-sm:mt-1.5">
                    <img
                      src={obj.avatar}
                      alt={`${obj.name} avatar`}
                      className="mr-0.5"
                    />
                    <span className="text-text-secondary/70 text-xs">
                      {obj.name}
                    </span>
                    <hr className="inline border-none px-[0.8px] py-1.5 bg-text-secondary/40" />
                    <time className="text-text-secondary/70 text-xs">
                      {obj.date}
                    </time>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <button
          className="flex items-center cursor-pointer mx-auto rounded-sm mt-15 py-2.5 px-6 bg-text-secondary/10 text-text-secondary/90 text-base hover:bg-text-secondary/20 transition-bg duration-150"
          onClick={currentPage === totalPages ? prevPage : nextPage}
          disabled={currentPage === totalPages && currentPage === 1}
          aria-label={
            currentPage === totalPages
              ? "Go to previous blog articles list"
              : "View more blog articles."
          }
        >
          {currentPage === totalPages ? (
            <>
              <i
                className="fa-solid fa-chevron-left mr-1.5 text-xs"
                aria-hidden="true"
              ></i>
              Previous
            </>
          ) : (
            <>
              Next
              <i
                className="fa-solid fa-chevron-right ml-1.5 text-xs"
                aria-hidden="true"
              ></i>
            </>
          )}
        </button>
        <span
          className="block mx-auto text-center mt-6 text-text-secondary/70"
          aria-live="polite"
          aria-label={`Page ${currentPage} of ${totalPages}`}
        >
          {currentPage} / 2
        </span>
      </main>
    </section>
  );
};

export default Blogposts;
