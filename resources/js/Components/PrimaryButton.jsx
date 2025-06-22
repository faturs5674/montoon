import React from "react";
import PropTypes from "prop-types";

function PrimaryButton({
    type = "submit",
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
        rounded-2xl bg-alerange w-full py-[13px] text-center
        ${disabled ? "opacity-25" : ""}
        ${className}
      `}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default PrimaryButton;
