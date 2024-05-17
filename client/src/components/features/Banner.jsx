import React from "react";

const Banner = () => {
  return (
    <section class="banner lg:h-[75vh] md:h-[50vh] md:p-0 p-10">
      <div className="h-inherit container px-6 py-3 grid lg:grid-cols-2 grid-cols-1 items-center lg:text-start text-center">
        <div className="text-white">
          <p className="text-info font-yesteryear lg:text-2xl md:text-xl text-lg font-bold mb-2">
            Explore the world
          </p>
          <h1 className="uppercase font-jakarta lg:text-5xl md:text-4xl text-3xl leading-tight font-extrabold mb-2">
            Tour Travel & adventure <span className="text-info">Camping</span>
          </h1>
          <p className="font-jakarta text-light mb-4">
            Welcome to our Print 128 website! We are a professional and reliable
            printing company that offers a wide range of printing services to
          </p>
          <div className="space-x-6 md:inline flex flex-col gap-4">
            <button className="bg-info px-5 py-3 rounded-lg">
              Let's Get Started
            </button>
            <button>Who We Are </button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Banner;
