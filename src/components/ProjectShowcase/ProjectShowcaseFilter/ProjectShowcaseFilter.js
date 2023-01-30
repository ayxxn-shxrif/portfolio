import React from "react";

import filtersArray from "../Filters";

import "./ProjectShowcaseFilter.scoped.scss";

const ProjectShowcaseFilter = ({ filter, setFilter }) => {
  const getFilters = () => {
    return filtersArray.map((filterItem, i) => {
      return (
        <button
          onClick={(e) => setFilter(e.target.innerHTML)}
          className={
            filterItem === filter
              ? "filter-button filter-button-selected"
              : "filter-button"
          }
          key={i}
        >
          {filterItem}
        </button>
      );
    });
  };

  return <div className="project-showcase-filter">{getFilters()}</div>;
};

export default ProjectShowcaseFilter;
