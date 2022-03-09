import React, { forwardRef, useState, useImperativeHandle } from "react";
//import PropTypes from "prop-types";

import i18n from "../i18n";

const Toggable = forwardRef(
  ({ children, buttonLabel = "Muestrame eso, desde default values" }, ref) => {
    const [visible, setVisible] = useState(false);

    const hideWhenVisible = { display: visible ? "none" : "" };
    const showWhenVisible = { display: visible ? "" : "none" };

    const toggleVisibility = () => setVisible(!visible);

    useImperativeHandle(ref, () => {
      return {
        toggleVisibility,
      };
    });

    return (
      <div>
        <div style={hideWhenVisible}>
          <button data-testid="togggleVisibility" onClick={toggleVisibility}>
            {buttonLabel}
          </button>
        </div>

        <div style={showWhenVisible}>
          {children}
          <button data-testid="cancelVisibility" onClick={toggleVisibility}>
            {i18n.TOGGABLE.CANCEL_BUTTON}
          </button>
        </div>
      </div>
    );
  }
);

export default Toggable;
