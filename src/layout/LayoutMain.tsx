import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const LayoutMain = () => {
  const { darkMode } = useSelector((state: any) => state.darkMode);

  if (darkMode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="mx-auto">
      <Header />
      <div className="py-5 lg:py-10">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutMain;
