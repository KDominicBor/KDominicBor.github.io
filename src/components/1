import React from "react";
import resume from "../resume.pdf";

const Skill = ({ title }) => {
  return (
    <div className="flex space-x-2 items-center">
      <div className="triangle w-2 h-2" />
      <p className="text-gray-200 ">{title}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="py-12 flex flex-col">
      <p className="text-3xl mb-2 txt-green"></p>
      <p className="text-4xl sm:text-6xl font-bold animate1 text-gray-200">
        Hi! i'm Dominic Bor
      </p>
      <p className="text-2xl sm:text-4xl font-bold py-4 txt-green animate2">
        Software Engineer
      </p>
      <p className="text-gray-300 animate3 sm:text-xl text-base mt-4 mb-6 ">
      I am a highly skilled software engineer with a strong focus on mobile and web application development. My expertise encompasses mobile applications developed using Java and Spring Boot, underpinned by extensive knowledge of MySQL and Amazon Web Services (AWS) to ensure top-notch performance and reliability. I thrive in Agile environments, excelling at breaking down complex challenges and delivering on-time, high-quality solutions. On the web front, I specialize in MongoDB, Express.js, React.js, Node.js, and GraphQL, allowing me to create responsive, user-centric web applications. My passion for e-commerce drives me to craft seamless user experiences. I'm committed to continuous learning, always eager to take on new challenges and contribute my expertise to innovative projects.</p>
      <p className="mb-6 font-medium text-gray-100 text-xl">
        Currently i'm available to participate in interesting Android development & Web Applications, schedule a
        <a
          href="https://calendly.com/sirbor/30min"
          target="_blank"
          className="underline txt-green ml-1" rel="noreferrer"
        >
          chat
        </a>
      </p>
      <div className=" mb-10">
        {/* <p className="text-lg text-gray-300"></p> */}
        <p className="md:text-2xl text-xl text-gray-300 flex font-semibold">
          Some
          <div className="relative mx-2">
            <span className="absolute bottom-1 border-b-[3px] md:border-b-[5px] w-[120px] md:w-[144px]  border-[#03c4a1]" />
            <h1 className="relative">technologies</h1>
          </div>
          that I code with:
        </p>
        <div className="flex space-x-12">
          <div className="flex flex-col space-y-1 mt-2">
            <Skill title="Java" />
            <Skill title="C++" />
            <Skill title="PHP" />
          </div>
          <div className="flex flex-col space-y-1 mt-2">
            <Skill title="Javascript" />
            <Skill title="SQL" />
            <Skill title="Python" />
          </div>
        </div>
      </div>
      <a
        href={resume}
        download
        className="w-24 h-11 flex items-center justify-center font-medium border border-[#03c4a1] txt-green hover:bg-[#03c4a1] hover:text-gray-900 transition duration-500"
      >
        Resume
      </a>
    </div>
  );
};

export default About;
