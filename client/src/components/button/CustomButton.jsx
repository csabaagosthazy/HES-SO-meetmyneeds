import React from "react";

import buttonClasses from '../../stylesheets/components/buttons.module.css';

/**
 *
 * @param {String} variant Available size "x", "m", "s"
 * @param {string} bgColor Background color
 * @param {string} textColor Color of text
 * @param {string} focusColor Outline color if selected
 * @param {boolean} selected True/false
 * @returns
 */
export const CustomButton = ({
  children,
  variant,
  bgColor,
  textColor,
  focusColor,
  selected,
  ...buttonProps
}) => {
  const sizeClass = {
    s: buttonClasses.small,
    m: buttonClasses.medium,
    x: buttonClasses.large
  }

  const style = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <button
      data-testid="button"
      style={style}
      className={[
        buttonClasses['custom-button'],
        sizeClass[variant],
        selected ? buttonClasses.selected : null
      ].join(' ')}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
