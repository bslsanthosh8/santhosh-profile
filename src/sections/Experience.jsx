import React from "react";
import resume from "../assets/docs/Resume.pdf";

function Experience() {
  const arrowSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  const workExperience = [
    {
      doj: "AUG 2021",
      doe: null,
      jobTitle: "Senior Software Engineer",
      company: "Wells Fargo",
      location: "Hyderabad, India",
      languages: ["Java 17", "Spring Boot 3.x", "Kafka", "Redis", "MongoDB", "React.js", "OpenShift"],
      description:
        "Designed and developed distributed microservices using Java 17, Spring Boot 3.x, Kafka, Redis, and MongoDB, implementing Event-Driven Architecture, Saga Pattern for distributed transactions, processing 400 TPS with high availability and fault tolerance patterns. Spearheaded the successful migration of critical applications to OpenShift Cloud (OCP), resulting in a 25% reduction in infrastructure costs and improved application uptime to 99.9%. Led the successful migration of the Fed Funds application to the latest WF-RIA3 framework leveraging React.js, delivering results within challenging deadlines. Acted as a Team Lead, mentoring and coaching team of 5+ engineers while driving adoption of Agile best practices, peer code reviews, and CI/CD pipelines across teams, improving code quality and cutting post-release defects by 25%.",
    },
    {
      doj: "2017",
      doe: "2021",
      jobTitle: "Software Engineer",
      company: "DBS Tech",
      location: "Hyderabad, India",
      languages: ["React.js", "Spring Boot", "SonarQube"],
      description:
        "Modernized legacy systems using React.js and Spring Boot, improving performance by 45%. Developed and optimized application modules with a focus on performance and scalability. Contributed to the development of advanced application features by writing clean, maintainable code, improving code review turnaround by 30%. Implemented SonarQube compliance across all modules, increasing code quality scores by 40% and cutting technical debt by 20%. Authored detailed test case documentation and actively collaborated with senior developers to adopt best practices. Ensured high-quality sprint deliveries aligned with Agile practices, reducing production defects by 30% and consistently meeting stakeholder commitments.",
    },
  ];

  const tenureString = ({ doj, doe }) => `${doj} - ${doe || "Present"}`;
  const tenureAriaLabel = ({ doj, doe }) => `${doj} to ${doe || "Present"}`;

  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/30 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {workExperience.map((experience, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-100">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-800/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 my-2 text-xs font-semibold uppercase tracking-wide text-gray-400 sm:col-span-2"
                  aria-label={tenureAriaLabel(experience)}
                >
                  {tenureString(experience)}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-gray-100">
                    <div>
                      <span className="group/link flex flex-col items-start text-base font-medium leading-tight text-white hover:font-semibold hover:text-accent focus-visible:font-semibold focus-visible:text-accent md:flex-row md:items-baseline lg:flex-row lg:items-baseline">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {experience.jobTitle}, {experience.company}
                        </span>
                      </span>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed tracking-wide text-gray-300">
                    {experience.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {experience.languages.map((language, index) => (
                      <li key={index} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium leading-5 text-secondary">
                          {language}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            href={resume}
            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-white hover:font-semibold hover:text-accent focus-visible:font-semibold focus-visible:text-accent"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full <span className="inline-block">Résumé{arrowSVG}</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Experience;