import data from "../data.json";
import { useParams } from "react-router-dom";

const SelectedCompany = ({ isDarkMode }) => {
  const { name } = useParams();
  const company = data.find((company) => company.company === name);

  // Check if company is found
  if (!company) {
    return null;
  }

  return (
    <div>
      <div className="px-6">
        <div
          className="rounded-md bg-white flex flex-col items-center pb-10 mt-[-10px]"
          style={{
            background: !isDarkMode ? "white" : "#19202d",
          }}
        >
          <figure
            className="w-[50px] flex flex-col justify-center rounded-2xl py-4 px-1 mt-[-25px]"
            style={{ background: company.logoBackground, aspectRatio: "1/1" }}
          >
            <img className=" flex self-center" src={company.logo} />
          </figure>
          <p
            className="text-[20px] mt-6 font-bold"
            style={{
              color: !isDarkMode ? "#19202d" : "white",
            }}
          >
            {company.company}
          </p>
          <p className="text-[16px] mt-3 text-lightGray">
            <a href={company.website} target="_blank" rel="noopener noreferrer">
              {company.company + ".com"}
            </a>
          </p>
          <a href={company.website} target="_blank" rel="noopener noreferrer">
            <button
              className="mt-[27px] bg-sky-100 text-lightBlue tetx-[16px] font-bold px-5 py-4 rounded"
              style={{
                background: !isDarkMode ? "#b2c8f3" : "#18253c",
              }}
            >
              Company Site
            </button>
          </a>
        </div>
        <div
          className=" rounded-md mt-6 py-[40px] px-6"
          style={{
            background: !isDarkMode ? "white" : "#19202d",
          }}
        >
          <div className="flex gap-3 items-center">
            <p className="text-[16px] text-lightGray">{company.postedAt}</p>
            <div className="bg-lightGray w-[4px] h-[4px] rounded-full"></div>
            <p className="text-[16px] text-lightGray">{company.contract}</p>
          </div>
          <p
            className="mt-[10px]text-[20px] font-bold"
            style={{
              color: !isDarkMode ? "#19202d" : "white",
            }}
          >
            {company.position}
          </p>
          <p className="text-[16px] mt-[10px] text-lightBlue font-bold">
            {company.location}
          </p>

          <a href={company.apply} target="_blank" rel="noopener noreferrer">
            <button className="bg-lightBlue py-4 px-[54px] rounded text-white text-[16px] font-bold mt-[55px] w-full">
              Apply Now
            </button>
          </a>
          <p className="text-lightGray leading-relaxed text-[16px] text-left w-fit mt-8">
            {company.description}
          </p>
          <h2
            className="text-[20px] font-bold text-blackWords mt-10"
            style={{
              color: !isDarkMode ? "#19202d" : "white",
            }}
          >
            Requirements
          </h2>
          <p className="text-lightGray leading-relaxed text-[16px] text-left w-fit mt-8">
            {company.requirements.content}
          </p>
          <div className="mt-8">
            {company.requirements.items.map((item, index) => (
              <div key={index} className="flex gap-8 items-baseline mt-2">
                <div className="w-[5px] h-[5px] bg-lightBlue rounded-full"></div>
                <p className="text-lightGray leading-relaxed text-[16px] text-left w-fit">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <h2
            className="text-[20px] font-bold mt-10"
            style={{
              color: !isDarkMode ? "#19202d" : "white",
            }}
          >
            What You Will Do
          </h2>
          <p className="text-lightGray leading-relaxed text-[16px] text-left w-fit mt-8">
            {company.role.content}
          </p>
          <div className="mt-8">
            {company.role.items.map((item, index) => (
              <div key={index} className="flex gap-8 items-baseline mt-2">
                <h2 className="text-[16px] font-bold text-lightBlue">
                  {index + 1}
                </h2>
                <p className="text-lightGray leading-relaxed text-[16px] text-left w-fit">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="rounded-t-md px-6 py-6 mt-16 w-screen"
        style={{
          background: !isDarkMode ? "white" : "#19202d",
        }}
      >
        <a href={company.apply} target="_blank" rel="noopener noreferrer">
          <button className="bg-lightBlue py-4 px-[54px] rounded text-white text-[16px] font-bold w-full">
            Apply Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default SelectedCompany;
