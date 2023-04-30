import React from "react";
import "./Loader.scss";
import { spinner } from "../../utils/images";
export default function Loader() {
  return (
    <div className="container">
      <div className="flex flex-center loader">
        <img src={spinner} alt="loader" />
      </div>
    </div>
  );
}
