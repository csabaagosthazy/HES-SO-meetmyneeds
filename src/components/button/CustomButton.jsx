import React from "react";

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
  const size = {
    x: {
      minHeight: "150px",
      minWidth: "175px",
      padding: "10px",
      fontSize: 14,
    },
    m: {
      minHeight: "100px",
      minWidth: "150px",
      padding: "10px",
      fontSize: 14,
    },
    s: {
      minHeight: "50px",
      minWidth: "75px",
      padding: "10px",
      fontSize: 14,
    },
  };

  const [style, setStyle] = React.useState({
    borderTop: " grey solid 2px",
    borderLeft: " grey solid 2px",
    borderBottom: " black solid 2px",
    borderRight: " black solid 2px",
    borderRadius: "10px",
    backgroundColor: bgColor,
    color: textColor,
    outline: "none",
    ...size[variant],
  });

  React.useEffect(() => {
    if (focusColor)
      setStyle({
        ...style,
        outline: selected ? `${focusColor} solid 3px` : "none",
      });
  }, [selected]);
  const handleMouse = (e) => {
    if (e.type === "mousedown") {
      setStyle({
        ...style,
        borderTop: " black solid 2px",
        borderLeft: " black solid 2px",
        borderBottom: " grey solid 2px",
        borderRight: " grey solid 2px",
      });
    } else {
      setStyle({
        ...style,
        borderTop: " grey solid 2px",
        borderLeft: " grey solid 2px",
        borderBottom: " black solid 2px",
        borderRight: " black solid 2px",
      });
    }
  };

  const handleFocus = (e) => {
    //console.log("focused")
  };

  const handleBlur = (e) => {
    //console.log("focused")
    //if (focusColor) setStyle({ ...style, outline: "" });
  };
  return (
    <button
      data-testid="button"
      style={style}
      onMouseDown={(event) => handleMouse(event)}
      onMouseUp={(event) => handleMouse(event)}
      onFocus={(event) => handleFocus(event)}
      onBlur={(event) => handleBlur(event)}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
