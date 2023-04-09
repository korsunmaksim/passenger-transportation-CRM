import React, { useState } from "react";
import menu from "../../../assets/menu.svg";
import close from "../../../assets/close.svg";
import { NAVBAR_LINKS } from "../../consts/app_keys.const";
import { useNavigate } from "react-router-dom";
import { userService } from "../../service/user.service";

export const BurgerMenu = () => {
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  const logoutHandler = async () => {
    userService.logout();
  };

  return (
    <div className="d-flex justify-content-center ">
      <img
        onClick={toggleHandler}
        className="pointer default-transition"
        src={`${toggle ? close : menu}`}
        style={{
          width: "40px",
          height: "40px",
          position: "fixed",
          left: "5px",
          top: "0",
          zIndex: "1",
        }}
      />
      <h2 className="title">Passenger transportation</h2>
      <nav
        className="default-transition d-flex bg-info flex-column position-absolute justify-content-center align-items-center"
        style={{
          height: "100vh",
          width: "min(50%,300px)",
          left: `${toggle ? "0" : "-100%"}`,
          zIndex: "0",
        }}
      >
        {NAVBAR_LINKS.map((link) => (
          <h5
            key={link.name}
            className="my-4 pointer"
            onClick={() => {
              navigate(link.ref);
              setToggle(false);
            }}
          >
            {link.name}
          </h5>
        ))}
        <h5 className="mt-3 pointer" onClick={logoutHandler}>
          Log out
        </h5>
      </nav>
    </div>
  );
};
