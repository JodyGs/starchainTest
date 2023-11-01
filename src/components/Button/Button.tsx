import React from "react";
import clsx from "clsx";

function Button({
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      type="button"
      className={clsx(
        className,
        "bg-purple-500 py-2 px-6 rounded-[32px] font-poppins font-bold text-sm shadow-button tracking-[.1em] leading-6",
        "hover:opacity-80 active:opacity-100 transition-opacity"
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export default Button;
