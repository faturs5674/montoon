import { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const TextInput = forwardRef(function TextInput(
    {
        type = "text",
        name,
        value,
        defaultValue,
        required,
        variant = "primary",
        placeholder,
        isError = false,
        className = "",
        isFocused = false,
        ...props
    },
    ref
) {
    const inputRef = ref || useRef();

    useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <div className="flex flex-col items-start w-full">
            <input
                {...props}
                ref={inputRef}
                name={name}
                type={type}
                value={value}
                defaultValue={defaultValue}
                required={required}
                placeholder={placeholder}
                className={`
                  rounded-2xl bg-form-bg py-[13px] px-7 w-full outline-none
                  ${isError ? "input-error" : ""}
                  ${isFocused ? "outline-alerange" : ""}
                  focus:outline-alerange focus:bg-form-bg
                  ${className}
                `}
            />
        </div>
    );
});

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
    isFocused: PropTypes.bool,
};

export default TextInput;
