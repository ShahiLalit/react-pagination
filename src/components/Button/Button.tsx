import React from "react";
import { classnames } from "../../utils";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return (
    <a
      href="#"
      aria-current={props.selected ? "page" : false}
      aria-disabled={props.disabled}
      className={classnames(
        "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
        props.className,
        {
          "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 ring-indigo-600 hover:bg-indigo-600":
            props.selected,
        },
        {
          "relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0":
            props.firstButton,
        },
        {
          "relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0":
            props.lastButton,
        },
        {
          "px-2 py-2": props.previousButton || props.nextButton,
        },
        {
          "pointer-events-none": props.disabled,
        }
      )}
      style={props.style}
      onClick={props.handlePageChange}
      data-testid="page-button"
    >
      {props.children}
    </a>
  );
};
export default Button;
