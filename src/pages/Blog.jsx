import React from "react";
import Navbar from "../components/Navbar";
import darkLogo from "../assets/logo_dark.png";

//pseudo data
import avatar2 from "../assets/avatars/Avatar5.png";
import blogImage from "../assets/blog_home_images/1_6OXHRhwHdlz8B5Ra1Qid3A.png";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const location = useLocation();
  const blogData = location.state;
  const {
    title = "7 secrets of to become a successful web developer",
    image = blogImage,
    avatar = avatar2,
    date = "2024-01-08",
    name = "Leland Little",
  } = blogData;

  return (
    <section className="px-7 md:px-12 font-cabin">
      <Navbar
        logo={darkLogo}
        hambugColor="text-black"
        bgColor="bg-bg-nav-light"
        textColor="text-text-primary/80"
        buttonBg="bg-bg-secondary/20"
        buttonTextColor="text-bg-secondary"
      />

      <div className="mt-18 space-y-7 max-w-3xl mx-auto">
        <h1 className="text-text-primary text-[38px] md:text-5xl leading-12 md:leading-16">
          {title}
        </h1>
        <div className="flex items-center gap-2 mt-3 grid-sm:mt-1.5">
          <img src={avatar} alt={`${name} avatar`} className="mr-0.5" />
          <span className="text-text-secondary/70 text-base">{name}</span>
          <hr className="inline border-none px-[0.8px] py-1.5 bg-text-secondary/40" aria-hidden='true'/>
          <time
            dateTime="2024-01-08"
            className="text-text-secondary/70 text-base"
          >
            {date}
          </time>
        </div>
      </div>

      <main className="mt-10 md:mt-14 max-w-2xl mx-auto">
        <figure className="-mx-8 md:-mx-12">
          <img src={image} alt={`${title} image`} className="h-full w-full" />
          <figcaption className="sr-only">Blog post illustration</figcaption>
        </figure>
        <section className="mt-8 md:mt-20 space-y-4 md:px-2">
          <h2 className="text-2xl font-semibold text-text-blog">
            Eum perferendis voluptate id sed cum.
          </h2>
          <p className="text-lg text-text-blog leading-6.5">
            Necessitatibus aperiam molestiae. Et et et ab qui. Est autem maxime
            optio
          </p>
          <p className="text-lg text-text-blog leading-6.5">
            Voluptatum nihil corporis vel accusamus repudiandae aspernatur
            dolores harum dolorem.
          </p>

          <blockquote className="border-l-5 border-bg-quote my-7">
            <p className="ml-5 text-text-quote italic text-lg leading leading-6">
              Eos eos perferendis inventore reiciendis quo pariatur enim nam
              ipsa. Amet quo dolorem eveniet in iure sint. Facilis consequuntur
              et. Soluta maxime laudantium quos.
            </p>
          </blockquote>

          <p className="text-text-blog text-lg leading-6.5">
            Nobis cumque consequatur. Sed qui reprehenderit accusantium facilis
            et qui porro. Praesentium ut odit sed qui temporibus nisi quo.{" "}
          </p>
          <p className="text-text-blog text-lg leading-6.5">
            Voluptate possimus non praesentium dolorem facilis dolorem. Cumque
            quaerat et mollitia vel non et iusto sed. Magni et minus suscipit
            soluta. Est quam libero nesciunt fugiat ullam totam sint ipsam. In
            totam voluptate. Qui nulla modi omnis.
          </p>

          <h2 className="text-2xl font-semibold text-text-blog">
            Mollitia repellendus eaque corporis optio esse id nesciunt
            veritatis.
          </h2>
          <p className="text-text-blog text-lg leading-6.5">
            Nam dolor reprehenderit iusto sed ducimus non occaecati eligendi.
            Dicta ad perferendis. Cupiditate sed quo suscipit. Laborum et fugiat
            earum sed cumque voluptatibus neque. Fugiat repellat animi
            repudiandae quis optio.
          </p>
          <p className="text-text-blog text-lg leading-6.5">
            Ex similique dolores repellendus repellat atque.
          </p>

          <blockquote className="border-l-5 border-bg-quote my-8">
            <p className="ml-5 text-text-quote italic text-lg leading leading-6.5">
              Totam sunt et natus adipisci fuga. Et nihil assumenda non
              repellendus ratione doloribus. Soluta atque quae provident
              suscipit facere earum error. Minus officia reprehenderit error
              autem enim eos. Sit iste aut.
            </p>
          </blockquote>

          <p className="text-text-blog text-lg leading-6.5">
            Eius est dolor natus ex nobis consequatur. Illum eveniet enim quos
            porro velit quisquam dolor blanditiis commodi. Maxime nostrum harum.
            Ipsa recusandae odit optio cupiditate aut maxime ducimus fugiat
            blanditiis. Eaque quis velit ex qui.{" "}
          </p>
          <p className="text-text-blog text-lg leading-6.5">
            Aut est harum minima laboriosam ea iure doloremque rerum quidem.
            Quidem dignissimos suscipit. Eos et quas. Consequatur nisi omnis
            aperiam rem. Eligendi sunt vitae recusandae magni officia ut quod
            dolores omnis.
          </p>
        </section>

        <div className="flex my-12 sm:my-13 sm:pb-7 gap-3 md:px-2 sm:gap-8">
          <div className="rounded-full size-15">
            <img
              src={avatar}
              alt={`${name} avatar`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-47 sm:max-w-100 space-y-0.5">
            <h3 className="uppercase text-text-quote/50 font-semibold tracking-[0.2rem]">
              written by
            </h3>
            <h4 className="text-text-blog text-3xl">{name}</h4>
            <p className="text-text-quote">
              This is some text inside of a div block.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Blog;
