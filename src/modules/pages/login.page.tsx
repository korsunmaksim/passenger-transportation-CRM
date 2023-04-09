import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { userService } from "../service/user.service";
import { ToastContainer } from "react-toastify";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const emailPasswordSignInHandler = () => {
    userService.emailPasswordSignUp(email, password);
  };

  const emailPasswordRegisterHandler = () => {
    userService.emailPasswordRegister(email, password);
  };

  const googleSignInHandler = () => {
    userService.googleSignUp();
  };

  return (
    <div
      className="w-50 d-flex flex-column align-items-center justify-content-center mx-auto "
      style={{ height: "80vh" }}
    >
      <h1 className="text-center mb-5">Sign in</h1>
      <div className="d-flex flex-column">
        <input
          className="my-4"
          value={email}
          onChange={emailInputHandler}
          placeholder="Enter email..."
        />
        <input
          className="mb-4"
          value={password}
          onChange={passwordInputHandler}
          type="password"
          placeholder="Enter password..."
        />
      </div>
      <div className="d-flex w-75 justify-content-around my-5">
        <button className="rounded mr-1" onClick={emailPasswordSignInHandler}>
          Sign in
        </button>
        <button className="rounded " onClick={emailPasswordRegisterHandler}>
          Register{" "}
        </button>
      </div>
      <GoogleButton onClick={googleSignInHandler} />
      <ToastContainer />
    </div>
  );
};
