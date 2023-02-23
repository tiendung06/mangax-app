import Search from "../modules/search/Search";
import Navbar from "../modules/header/Navbar";
import IconBars from "../components/icons/IconBars";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <header className="spacing">
      <div className="flex items-center justify-between w-full pt-4 lg:p-0 lg:h-20 gap-x-5 md:gap-x-10 lg:gap-x-20">
        <div className="flex items-center w-full gap-x-6 lg:gap-x-14">
          <NavLink to="/" className="hidden h-full lg:block">
            <img
              src="/logo.svg"
              alt="MangaX"
              title="MangaX"
              className="object-cover w-full h-full"
            />
          </NavLink>
          <div className="relative flex-1">
            <div className="flex items-center justify-between gap-x-6">
              <Search />
              <button
                className="lg:hidden text-text3"
                onClick={() => setMenu(true)}
              >
                <IconBars />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            !menu ? "h-0" : ""
          } fixed top-0 left-0 lg:z-10 z-40 w-full overflow-hidden transition-all lg:h-fit lg:min-h-0 lg:static bg-lite lg:bg-transparent`}
        >
          <div className="px-5 py-4 lg:p-0">
            <div className="flex items-center justify-between mb-8 lg:mb-0">
              <NavLink to="/" className="block lg:hidden">
                <img
                  src="/logo.svg"
                  alt="MangaX"
                  title="MangaX"
                  className="object-cover w-10 h-10"
                />
              </NavLink>
              <button
                className="lg:hidden text-text3"
                onClick={() => setMenu(false)}
              >
                <IconBars />
              </button>
            </div>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
