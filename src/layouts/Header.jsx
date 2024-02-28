import Sun from "../SVGs/Sun";
import ToggleLight from "../SVGs/ToggleLight";
import Moon from "../SVGs/Moon";

const Header = () => {
  return (
    <div
      className="flex items-center justify-between w-screen pt-8 px-6 pb-[72px]"
      style={{
        backgroundImage: "url(assets/mobile/mobile-header-background.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="font-bold text-[20px] text-white">devjobs</h2>
      <div className="flex gap-4 items-center">
        <Sun />
        <ToggleLight />
        <Moon />
      </div>
    </div>
  );
};

export default Header;
