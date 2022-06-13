import React from "react";
import Footer from "src/components/Footer";
function AppLayout({ children }) {
  return (
    <>
      {children}
      <Footer></Footer>
    </>
  );
}

export default AppLayout;
