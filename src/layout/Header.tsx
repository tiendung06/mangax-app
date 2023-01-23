import { NavLink } from "react-router-dom";
import { navigation } from "../constants/navigation";

const Header = ({ transparent }: { transparent?: boolean }) => {
  return (
    <header
      className={`${
        transparent ? "absolute z-50 top-0" : ""
      } flex items-center justify-center md:justify-start w-full h-14 lg:h-20 gap-x-5 md:gap-x-10 lg:gap-x-20 px-5 lg:px-10 shadow-[10px_10px_20px_rgba(218,213,213,0.15)]`}
    >
      <NavLink to="/" className="hidden h-full md:block">
        <img
          src="/logo.svg"
          alt="MangaX"
          className="object-cover w-full h-full"
        />
      </NavLink>
      <nav className="flex items-center justify-start gap-x-3 md:gap-x-5">
        {navigation.map(({ title, url }) => (
          <NavLink
            to={url}
            key={title}
            className={({ isActive }) =>
              isActive
                ? "text-primary font-medium"
                : "text-text4 hover:text-text2 transition-all"
            }
          >
            {title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
