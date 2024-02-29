import data from "../data.json";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (companyName) => {
    navigate(`/selectedCompany/${companyName}`);
  };

  return (
    <div className="flex flex-col gap-[57px] px-6 mt-[-40px] pb-[62px]">
      <SearchBar />
      <div className="grid grid-cols-1 gap-[49px]">
        {data.map((company, index) => (
          <div
            className="bg-white pl-8 pb-9 rounded-md"
            key={index}
            onClick={() => handleNavigation(company.company)}
          >
            <figure
              className="w-[50px] flex flex-col justify-center rounded-2xl py-4 px-1 mt-[-25px]"
              style={{ background: company.logoBackground, aspectRatio: "1/1" }}
            >
              <img className=" flex self-center" src={company.logo} />
            </figure>
            <div className="flex gap-3 items-center mt-6">
              <p className="text-[16px] text-lightGray">{company.postedAt}</p>
              <div className="bg-lightGray w-[4px] h-[4px] rounded-full"></div>
              <p className="text-[16px] text-lightGray">{company.contract}</p>
            </div>
            <p className="mt-4 text-blackWords text-[20px] font-bold">
              {company.position}
            </p>
            <p className="text-[16px] mt-4 text-lightGray">{company.company}</p>
            <p className="text-[16px] mt-11 text-lightBlue font-bold">
              {company.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
