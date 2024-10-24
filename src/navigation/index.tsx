import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";

// const TabNavigation: React.FC = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Главная</Link>
//         </li>
//         <li>
//           <Link to="/page1">Страница 1</Link>
//         </li>
//         <li>
//           <Link to="/page2">Страница 2</Link>
//         </li>
//         <li>
//           <Link to="/page3">Страница 3</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

const Page1: React.FC = () => {
  return <h2>Страница 1</h2>;
};

const Page2: React.FC = () => {
  return <h2>Страница 2</h2>;
};

const Page3: React.FC = () => {
  return <h2>Страница 3</h2>;
};

const Navigation: React.FC = () => {
  const [isLoginned, setIsLoginned] = useState(false);
  return (
    <Router>
      {/* <TabNavigation /> */}
      <Routes>
        {isLoginned ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}

        {/* <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} /> */}
      </Routes>
    </Router>
  );
};

export default Navigation;
