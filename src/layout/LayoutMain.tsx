import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutMain = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="py-5 lg:py-10">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutMain;
