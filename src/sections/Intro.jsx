import React from "react";
import InPageNav from "./InPageNav";
import SocialMedia from "./SocialMedia";

function Intro() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          <a href="/">Santhosh Bayyavarapu</a>
        </h1>
        <h2 className="mt-3 text-lg font-semibold tracking-tight text-primary sm:text-xl">
          Lead Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal tracking-normal text-gray-300">
          I design, architect, and deliver enterprise-scale, cloud-native applications.
        </p>
        <InPageNav />
      </div>
      <SocialMedia />
    </header>
  );
}

export default Intro;