import React, {Fragment} from "react";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/Navbar";
import SubHeader from "./Components/SubHeader";
import Footer from "./Components/Footer";

function App() {
  return (
      <Fragment>
          <NavBar />
          <SubHeader />
          <HomePage />
          <Footer />
      </Fragment>
  );
}

export default App;
