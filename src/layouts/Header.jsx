import Sun from "../SVGs/Sun";
import ToggleLight from "../SVGs/ToggleLight";
import ToggleDark from "../SVGs/ToggleDark";
import Moon from "../SVGs/Moon";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleTheme, isDarkMode }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/`);
  };

  return (
    <div
      className="flex items-center justify-between w-screen pt-8 px-6 pb-[72px]"
      style={{
        backgroundImage: "url(/assets/mobile/mobile-header-background.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2
        className="font-bold text-[20px] text-white"
        onClick={handleNavigation}
      >
        devjobs
      </h2>
      <div className="flex gap-4 items-center">
        <Sun />
        {isDarkMode ? (
          <ToggleDark onClick={toggleTheme} isVisible={true} />
        ) : (
          <ToggleLight onClick={toggleTheme} isVisible={true} />
        )}
        <Moon />
      </div>
    </div>
  );
};

export default Header;
