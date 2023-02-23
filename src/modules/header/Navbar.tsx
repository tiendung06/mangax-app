import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/navigation";

const Navbar = () => {
  return (
    <nav className="items-center justify-end pb-8 bg-white lg:flex gap-x-3 md:gap-x-5 lg:p-0 lg:bg-transparent shadow-[10px_10px_20px_rgba(218,213,213,0.15)] lg:shadow-none">
      {navigation.map(({ title, url }) => (
        <NavLink
          to={url}
          key={title}
          className={({ isActive }) =>
            isActive
              ? "text-primary font-medium block lg:inline-block bg-primaryExtra lg:bg-transparent py-4 px-5 lg:p-0"
              : "text-text4 hover:text-text2 transition-all block lg:inline-block py-4 px-5 lg:p-0"
          }
        >
          {title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
