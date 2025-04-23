import React, { Children } from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  const SectionHeading = ({ children, className = "" }) => {
    return <p className={`${className} text-lg text-bg-primary`}>{children}</p>;
  };

  const MutedText = ({ children, className = "", href = "/" }) => {
    return (
      <a
        href={href}
        className={`${className} text-sm text-white/60 block hover:text-sky-400`}
      >
        {children}
      </a>
    );
  };

  return (
    <footer className="w-full bg-bg-footer px-7 md:px-13 font-cabin text-white pt-15 pb-7.5">
      <div className="space-y-10 sm:flex sm:flex-wrap sm:gap-10 md:gap-24 mx-auto lg:max-w-6xl lg:gap-15 xl:gap-24">
        <section className="max-w-35 h-fit">
          <a href="/">
            <img src={logo} alt="Company logo" />
          </a>
          <MutedText className="mt-4.5">
            Collaboration platform for modern teams.
          </MutedText>
        </section>

        <address className="not-italic space-y-3">
          <SectionHeading>Contact Us</SectionHeading>
          <MutedText href="#">info@teamapp.com</MutedText>
          <MutedText href="#">1-800-200-300</MutedText>
          <MutedText className="max-w-30" href="">
            1010 Sunset Blv. Palo Alto, California
          </MutedText>
        </address>

        <nav className="space-y-3">
          <SectionHeading>Features</SectionHeading>
          <MutedText href="#">Screen Sharing</MutedText>
          <MutedText href="#">iOS and Andriod Apps</MutedText>
          <MutedText href="#">File sharing</MutedText>
          <MutedText href="#">User Management</MutedText>
        </nav>

        <nav className="space-y-3">
          <SectionHeading>Company</SectionHeading>
          <MutedText href="">About us</MutedText>
          <MutedText href="">Blog</MutedText>
          <MutedText href="">Support</MutedText>
          <MutedText href="">Knowledge Base</MutedText>
        </nav>

        <section className="space-y-4.5">
          <SectionHeading>Stay up to date</SectionHeading>
          <MutedText>Subscribe to our newsletter</MutedText>
          <form>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              placeholder="Email"
              className="bg-white/20 placeholder:text-white/30 py-3 px-3 rounded-md text-white min-w-65 
            border border-transparent focus:outline-none
            focus:border-sky-500"
              id="newsletter-email"
            />
          </form>
        </section>
      </div>
      <p className="text-sm text-white/50 mt-30 lg:max-w-6xl mx-auto">
        © Copyright Team Inc.
      </p>
    </footer>
  );
};

export default Footer;
