import React from "react";

const sizes = {
  textxs: "text-sm font-medium not-italic",
  headingxs: "text-sm font-bold",
  headings: "text-base font-bold",
  headinglg: "text-[22px] font-bold",
  headingxl: "text-4xl font-extrabold md:text-[34px] sm:text-[32px]",
  heading2xl: "text-5xl font-extrabold md:text-[44px] sm:text-[38px]",
};

const Heading = ({ children, className = "", size = "headingxl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-plusjakartasans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
