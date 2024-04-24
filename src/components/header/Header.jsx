import { SearchIcon } from "../../../public/icons/Icons";

const Header = () => {
  return (
    <div className=" flex items-center justify-start gap-6 w-full mb-5">
      <span>
        <SearchIcon />
      </span>
      <label
        className="group max-w-[1200px] w-full border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#5A698F] focus:border-b-2 focus:border-b-[#5A698F] mr-5"
        htmlFor="search"
      >
        <input
          id="search"
          className="w-full bg-transparent text-[#fff] text-[24px]  py-2 pl-2 placeholder:text-[#fffa]  outline-none   focus:bg-transparent group"
          placeholder="Search for movies or TV series"
        />
      </label>
    </div>
  );
};

export default Header;
