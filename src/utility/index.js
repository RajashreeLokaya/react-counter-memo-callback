import React from "react";
import PropTypes from "prop-types";
const CustomButton = ({ className, forName, onButtonClick, label }) => {
  const handleButton = () => {
    onButtonClick(forName);
  };
  return (
    <button className={className} onClick={handleButton}>
      {label}
    </button>
  );
};
CustomButton.defaultProps = {
  label: "trail",
};
CustomButton.propType = {
  label: PropTypes.string,
};
export default CustomButton;
