import React from "react";
import { Link } from "react-router-dom";

const Subtitle = ({ title, btntitle, linkTo }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="sub-title">{title}</div>
      {btntitle ? (
        <Link style={{ textDecoration: "none" }} to={`${linkTo}`}>
          <div className="shopping-now">{btntitle}</div>
        </Link>
      ) : null}
    </div>
  );
};

export default Subtitle;
