import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={logo}
          alt="article_summarizer_logo"
          className="w-28 object-contain"
        />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/johnnysteel/BrevityAI", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Any Article With <br className="max-md:hidden" />
        <span className="blue_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Meet BrevityAI – your smart, AI-powered article summarizer that
        effortlessly turns long reads into quick, easy-to-digest insights. Get
        the key takeaways in seconds and stay informed without the extra fluff.
      </h2>
    </header>
  );
};

export default Hero;
