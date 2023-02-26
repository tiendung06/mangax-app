import IconSun from "../../components/icons/IconSun";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../redux/slide/darkModeSlide";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/navigation";

const Navbar = () => {
  const { darkMode } = useSelector((state: any) => state.darkMode);
  const dispatch = useDispatch();

  const handleDarkMode = () => {
    if (darkMode === "dark") {
      dispatch(setDarkMode("light"));
      localStorage.setItem("darkMode", "light");
    } else {
      dispatch(setDarkMode("dark"));
      localStorage.setItem("darkMode", "dark");
    }
  };

  return (
    <nav className="items-center w-full justify-end block pb-8 bg-white lg:flex gap-x-3 md:gap-x-5 lg:p-0 lg:bg-transparent shadow-[10px_10px_20px_rgba(218,213,213,0.15)] lg:shadow-none dark:bg-darkSecondary dark:lg:bg-transparent dark:shadow-none">
      {navigation.map(({ title, url }) => (
        <NavLink
          to={url}
          key={title}
          className={({ isActive }) =>
            isActive
              ? "text-primary font-medium block lg:inline-block bg-primaryExtra lg:bg-transparent py-4 px-5 lg:p-0 dark:bg-darkStroke dark:lg:bg-transparent"
              : "text-text4 hover:text-text2 transition-all block lg:inline-block py-4 px-5 lg:p-0 dark:text-text3 dark:hover:text-text4"
          }
        >
          {title}
        </NavLink>
      ))}
      <button
        className="flex items-center w-full gap-2 px-5 py-4 bg-white lg:transition-none lg:p-0 lg:h-12 lg:justify-center lg:w-12 lg:rounded-xl text-text4 hover:text-text2 dark:text-text3 dark:hover:text-text4 dark:bg-darkSecondary"
        onClick={handleDarkMode}
      >
        <IconSun />
        <span className="lg:hidden">Dark mode</span>
      </button>
    </nav>
  );
};

export default Navbar;
