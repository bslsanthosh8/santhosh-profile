import React from "react";

function About() {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/30 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">
          About
        </h2>
      </div>
      <div className="text-gray-300">
        <p className="mb-4">
          Strategic Senior Software Engineer with 12+ years of experience in
          designing, architecting, and delivering enterprise-scale,
          cloud-native applications. Expertise in Java ecosystem (17/21 LTS),
          Spring Boot 3.x, and Microservices, with a proven track record of
          scaling distributed systems using Kafka, Redis, and MongoDB.
          Full-stack proficient with deep expertise in Java backend
          specialization and modern React.js frontend integration. Recognized
          for reducing infrastructure costs by 25% and maintaining 99.9%
          uptime for high-volume, business-critical payment engines. Adept at
          driving and mentoring cross-functional teams of 5+ engineers in
          Agile environments to drive engineering governance and
          high-performance software delivery.
        </p>
      </div>
    </>
  );
}

export default About;