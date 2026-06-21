import React from "react";

function SocialMedia() {
  const socialMediaLinks = [
    {
      name: "GitHub",
      url: "https://github.com/bslsanthosh8",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.305-.535-1.54.117-3.205 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.665.24 2.9.118 3.205.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.218.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      ariaLabel: "GitHub (opens in a new tab)",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bslsanthosh8/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      ),
      ariaLabel: "LinkedIn (opens in a new tab)",
    },
    {
      name: "Outlook",
      url: "mailto:bslsanthosh@outlook.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M12.5,12.43L5.2,6.1A2.2,2.2,0,0,1,7.5,5.5h10A2.2,2.2,0,0,1,19.8,6.1ZM4.5,8.23,11.37,14a1.81,1.81,0,0,0,2.26,0L20.5,8.23V16.5A2.2,2.2,0,0,1,18.5,19.1H6.5A2.2,2.2,0,0,1,4.5,16.5Z" />
        </svg>
      ),
      ariaLabel: "Outlook (opens in a new email tab)",
    },
  ];

  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label={"Social Media"}>
      {socialMediaLinks.map((link, index) => (
        <li key={index} className="mr-5 shrink-0 text-xs">
          <a
            href={link.url}
            className="block text-gray-400 hover:text-white"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={link.ariaLabel}
            title={link.name}
          >
            <span className="sr-only">{link.name}</span>
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMedia;