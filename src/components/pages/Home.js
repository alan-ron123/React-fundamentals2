import React from "react";
import Products from "../productPages/Products";
import Hoc from "../../Hoc/Hoc";
const Home = ({ likes, setLikes, obj }) => {
  return (
    <>
      <Products />

      <div className="p-5">
        <h1>
          ❤️<sup>{likes}</sup>
        </h1>
        <button
          className="btn btn-success"
          onMouseOver={() => {
            setLikes(likes + 1);
          }}
        >
          like
        </button>
      </div>
    </>
  );
};
export default Hoc(Home);
// import React from "react";
// import Navbar from "./components/pages/Navbar";
// import Home from "./components/pages/Home";
// import Contact from "./components/pages/Contact";
// import More from "./components/pages/More";
// import Login from "./components/AuthPages/Login";
// import Signup from "./components/AuthPages/Signup";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="contact" element={<Contact />}></Route>
//         <Route path="/more" element={<More />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/signup" element={<Signup />}></Route>
//         <Route path="*" element={<h1>page not found</h1>}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };
// export default App;
