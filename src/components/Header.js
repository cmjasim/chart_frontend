
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h4>Good Morning !🌞 </h4>
      <div className="profile">
        <div style={{ marginRight: "10px" }}>
          <h6>John Doe</h6>
          <p>john@doe.com</p>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="profile"
          width={40}
        />
      </div>
    </div>
  );
};

export default Header;
