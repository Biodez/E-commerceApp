import React from "react";
import { Link } from "@reach/router";

function AdminDisplay() {
  return (
    <div id="adminContainer">
      <div>
        <ul>
          <li>
            <Link to="/product">Add Product</Link>
          </li>
          {/* <li></li> */}
        </ul>
      </div>
    </div>
  );
}

export default AdminDisplay;
