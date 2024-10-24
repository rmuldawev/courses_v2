import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import NavigationButton from "../NavigationButton";

const links = [
  {
    name: "Alipay",
    link: "/",
  },
  {
    name: "Taobao",
    link: "/taobao",
  },
  { name: "1688", link: "/1688" },
  {
    name: "Pindoudou",
    link: "/pindoudou",
  },
  {
    name: "Poizon",
    link: "/poizon",
  },
];

const NavBar = () => {
  return (
    <div className="container">
      <nav className="vertical-nav">
        {links.map((e, i) => {
          return <NavigationButton key={i} name={e.name} link={e.link} />;
        })}
      </nav>
    </div>
  );
};

export default NavBar;
