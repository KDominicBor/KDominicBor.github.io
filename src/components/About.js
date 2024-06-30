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
      I am a results-oriented software engineer with a proven track record in developing robust, scalable applications using Python, C/C++, and JavaScript. 
      With expertise in frameworks like React, Django and Flask and proficiency in tools such as Redis, Kafka, Docker, and Kubernetes, 
      I have consistently delivered secure codebases, reduced vulnerabilities by 30%, and increased user engagement by 25%.
      My experience includes optimizing data pipelines in AWS,ensuring data integrity, and enhancing performance with Splunk and Dynatrace. 
      Let's connect to discuss how my skills can contribute to your project's success!</p> 
	  <p className="mb-6 font-medium text-gray-100 text-xl">
        Currently i'm available to participate in interesting in designing trading systems & Web Applications, schedule a
        <a
          href="https://calendly.com/KDominicbor/30min"
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
            <Skill title="C/C++" />
            <Skill title="Javascript" />
            <Skill title="Python" />
          </div>
          <div className="flex flex-col space-y-1 mt-2">
            <Skill title="Typecript" />
            <Skill title="SQL" />
            <Skill title="Bash" />
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
