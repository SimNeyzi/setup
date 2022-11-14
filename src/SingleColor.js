import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hex, type }) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(",");

  const handleClick = (e) => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <>
      <article
        className={`color ${type === "shade" && "color-light"}`}
        style={{ backgroundColor: `rgb(${bgc})` }}
        onClick={handleClick}
      >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">#{hex}</p>
        {alert ? <p className="alert">Copied to clipboard</p> : null}
      </article>
    </>
  );
};

export default SingleColor;
