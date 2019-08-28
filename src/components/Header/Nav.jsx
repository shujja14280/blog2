import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {

    
  
  return (
    // <div>
    //   <div>THis is nav bar</div>
    //   <Link to="/"> Home </Link>
    // </div>

    <div className="nav">
    <ul>
        <Link className="border_none" to="/"><li>Home</li></Link>
        <Link className="border_none" to="/blog1"> <li>Blog 1 </li></Link>
        <Link className="border_none" to="/blog2"><li>Blog 2</li></Link>
        <Link className="border_none" to="/blog3"><li>Blog 3</li></Link>
        <Link className="border_none" to="/blog4"><li>Blog 4</li></Link>
        <Link className="border_none" to="/blog5"><li>Blog 5</li></Link>
    </ul>
     </div>
  );
};

export default Nav;
