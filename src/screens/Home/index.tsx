import React from "react";
import NavBar from "../../components/Navbar";
import Tabs from "../../components/Tabs";

const Home = () => {
  return (
    <div>
      <h2>EVAHOME courses</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <NavBar />
        <div style={{ display: "flex", flex: 1, backgroundColor: "black" }}>
          <Tabs />
        </div>
      </div>
      {/* <TabNavigation /> */}
    </div>
  );
};

export default Home;
