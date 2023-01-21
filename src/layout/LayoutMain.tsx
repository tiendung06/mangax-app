import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutMain = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default LayoutMain;
