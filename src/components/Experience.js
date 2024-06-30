import React from "react";
import { FaRegBuilding } from "react-icons/fa";

const workExp = [
  {
    id: 1,
    position: "Software Engineer",
    companyName: "Rapid Research",
    from: "Nov 2022",
    to: "Present",
    current: true,
    description: [
      "Developed robust, secure codebases, reducing vulnerabilities by 30% and ensuring compliance with industry standards without extensive supervision.",
      "Facilitated seamless communication between Quant Researchers and Business Users, resulting in comprehensive documentation of functional requirements, ensuring alignment with project objectives and minimizing development iterations.",
      "Engineered cutting-edge applications using Python and React/JavaScript, driving user satisfaction by delivering intuitive, efficient solutions tailored to business needs, resulting in a 25% increase in user engagement.",
      "Deepened understanding of Pricing, Risk, and Trade Management functions through proactive engagement with business users, facilitating the implementation of innovative solutions aligned with industry trends, thus improving overall business performance."
    ],
    isVisible: true,
  },
  {
    id: 2,
    position: "Software Engineer",
    companyName: "Labs Afrika",
    from: "Aug 2021",
    to: "Oct 2022",
    current: false,
    description: [
      "Facilitated seamless communication and collaboration between cross-functional teams to understand data requirements and translate them into scalable and efficient data pipeline solutions, ensuring alignment with business objectives and maximizing data utilization.",
      "Implemented comprehensive data quality checks and validation processes throughout the data lifecycle, ensuring data integrity and accuracy, and minimizing data errors or discrepancies, resulting in improved decision-making and trust in data assets.",
      "Automated testing of data pipelines and integrated them seamlessly into the Continuous Integration and Continuous Deployment (CICD) pipeline, ensuring early detection of issues and accelerating the deployment of data solutions with minimal manual intervention.",
      "Optimized data processing and query performance for large-scale datasets within AWS and Databricks environments, leveraging advanced optimization techniques and performance tuning strategies, resulting in reduced processing time and enhanced scalability."
    ],
    isVisible: false,
  },
  
];

const Experience = () => {
  const activeClass =
    "-ml-[2px] md:border-l-2 border-t-2 md:border-t-0 border-[#03c4a1] px-3 h-12 w-36 txt-green text-left bg-dark-light transition-all duration-300";

  const inactiveClass =
    "-ml-[2px] md:border-l-2 border-t-2 md:border-t-0 hover:border-[#03c4a1] px-3 h-12 w-36 text-gray-400 text-left hover:bg-[#23262b] hover:text-[#03c4a1] transition-all duration-300";

  const [workData, setWorkData] = React.useState(workExp);

  const showCompany = (id) => {
    let tempData = workData.map((item) => {
      if (item.id === id) {
        item.isVisible = true;
      } else {
        item.isVisible = false;
      }
      return item;
    });
    setWorkData(tempData);
  };

  return (
    <div className="pb-16">
      <p className="md:text-4xl text-3xl text-gray-200 flex font-semibold">
        Where I've
        <div className="relative ml-2">
          <span className="absolute bottom-1 border-b-[8px] w-[120px] md:w-[145px]  border-[#03c4a1]" />
          <h1 className="relative">Worked</h1>
        </div>
      </p>

      <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-3 mt-12 ">
        <div className="flex md:flex-col flex-row items-start text-gray-100 ">
          <button
            onClick={() => showCompany(1)}
            className={workData[0].isVisible ? activeClass : inactiveClass}
          >
            Rapid Research
          </button>
          <button
            onClick={() => showCompany(2)}
            className={workData[1].isVisible ? activeClass : inactiveClass}
          >
            Labs Afrika
          </button>

        </div>
        <div>
          {workExp.map((work, index) => {
            return (
              <div
                key={index}
                className={`${work.isVisible ? "block" : "hidden"}`}
              >
                <div className="flex flex-col space-y-2">
                  <p className="text-gray-200 text-xl font-semibold">
                    {work.position}{" "}
                    <span className="txt-green">@{work.companyName}</span>
                  </p>
                </div>
                <div className="flex flex-col space-y-2 mt-3">
                  <p className="text-gray-200 text-sm font-medium">
                    {work.from} - {work.current === true ? "Present" : work.to}
                  </p>
                </div>
                <div className="flex flex-col space-y-4 mt-6">
                  {work.description.map((desc) => (
                    <div className="flex space-x-2" key={desc}>
                      <div className="triangle w-2 h-2" />
                      <p className="text-gray-300 -mt-2">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
