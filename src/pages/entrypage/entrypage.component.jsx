import React from "react";
import "./entrypage.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const Entrypage = () => {
  return (
    <div className="entrypage">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Entrypage;
