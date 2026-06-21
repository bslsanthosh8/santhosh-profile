import React from "react";

function InPageNav() {
  const [activeLink, setActiveLink] = React.useState(null);
  const navLinks = ["about", "experience", "projects", "contact"];

  const handleClick = (link) => {
    setActiveLink(link);
  };

  React.useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.6, // Adjust this value as needed
    });

    navLinks.forEach((link) => {
      const section = document.getElementById(link);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [navLinks]);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={`group flex items-center py-3 ${activeLink === link ? "active" : ""}`}
              onClick={() => handleClick(link)}
            >
              <span
                className={`nav-indicator mr-4 h-px ${activeLink === link ? "w-16 bg-accent" : "w-8 bg-gray-500"} transition-all group-hover:w-16 group-hover:bg-accent group-focus-visible:w-16 group-focus-visible:bg-accent motion-reduce:transform-none`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest ${activeLink === link ? "text-white" : "text-gray-400"} group-hover:text-white group-focus-visible:text-white`}
              >
                {link}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default InPageNav;