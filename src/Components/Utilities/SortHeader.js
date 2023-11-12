import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../Assets/sort.png";
const SortHeader = ({ title }) => {
  const handler = () => {};
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1">
              <img
                width="20px"
                height="20px"
                className="ms-1"
                src={sort}
                alt="Sort Image"
              />
              Sort By
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div className="border-bottom card-filter-item">Best Selling</div>
            <div className="border-bottom card-filter-item">Highly Rated</div>
            <div className="border-bottom card-filter-item">
              Prices from lowest to highest
            </div>
            <div className=" card-filter-item">
              Prices from highest to lowest
            </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SortHeader;
