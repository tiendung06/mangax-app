import { NavLink } from "react-router-dom";
import { navigation } from "../constants/navigation";

const Header = ({ transparent }: { transparent?: boolean }) => {
  return (
    <header
      className={`${
        transparent ? "absolute z-50 top-0" : ""
      } flex items-center justify-start w-full h-14 lg:h-20 gap-x-5 md:gap-x-10 lg:gap-x-20 px-5`}
    >
      <NavLink to="/" className="h-full">
        <img
          src="/logo.svg"
          alt="MangaX"
          className="object-cover w-full h-full"
        />
      </NavLink>
      <div className="flex items-center justify-start gap-x-3 md:gap-x-5">
        {navigation.map(({ title, url }) => (
          <NavLink
            to={url}
            key={title}
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "text-icon-color hover:text-white transition-all"
            }
          >
            {title}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
