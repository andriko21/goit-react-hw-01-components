import React from "react";
import PropTypes from "prop-types";

const StatItem = ({ label, percentage }) => (
  <li className="item">
    <span className="label">{label}</span>
    <span className="percentage">{percentage}</span>
  </li>
);

StatItem.propTypes = {
    label: PropTypes.string,
  percentage: PropTypes.number,
}

export default StatItem;