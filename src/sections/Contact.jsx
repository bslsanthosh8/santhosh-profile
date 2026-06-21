import React from "react";

function Contact() {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/30 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">
          Contact
        </h2>
      </div>
      <div>
        <h3 className="my-2 text-xl font-bold text-white lg:text-2xl">
          Get In Touch
        </h3>
        <p className="my-2 text-sm leading-relaxed tracking-wide text-gray-300">
          I'm open to new opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hello.
        </p>
        <a
          href="mailto:bslsanthosh@outlook.com"
          target="_blank"
          aria-label="Mail To: bslsanthosh@outlook.com (opens in a new email tab)"
          rel="noreferrer noopener"
          className="relative mt-2 inline-block border border-accent px-4 py-2 text-sm font-medium text-accent hover:bg-accent/10"
        >
          Say Hello
        </a>
      </div>
    </>
  );
}

export default Contact;