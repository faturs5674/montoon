import React from "react";
import PropTypes from "prop-types";

function SecondaryButton({
    type = "button",
    className = "",
    disabled = false,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={`
        rounded-2xl border border-white w-full py-[13px] text-cente
        ${disabled ? "opacity-25" : ""}
        ${className}
      `}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

SecondaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default SecondaryButton;
