import React from "react";
import "./Error.scss";
import { error } from "../../utils/images";
export default function Loader() {
  return (
    <div className="container py-5">
      <div className="flex flex-center loader">
        <img src={error} alt="error" />
      </div>
    </div>
  );
}
