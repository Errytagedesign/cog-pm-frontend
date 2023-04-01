import React from "react";
import Footer from "../footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Classname here will serve as props, so we can style the header from it's own comp, we should do the same for footer when it's ready
       */}
      <Navbar />

      <main className="  ">{children} </main>
      <Footer />
    </div>
  );
};

export default Layout;
